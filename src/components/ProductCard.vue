<template>
  <div class="container">
    <!-- Отображение элемента -->

    <div class="pt-[45px]">
      <h1 class="text-[40px]">
        <!-- Отображение названия, информации и количества -->
        {{ item.name }} <br />{{ item.info }} {{ item.quantity }} шт
      </h1>
      <div class="flex">
        <img
          :src="item.image"
          alt=""
          class="w-[500px] object-contain h-[500px]"
        />
        <div>
          <div class="price border-[1px] rounded-[15px] w-[700px] p-[25px]">
            <h1>Бағасы</h1>
            <p class="text-[30px] font-bold text-[#4A94F5]">
              <!-- Отображение цены -->
              {{ item.price }} тг
            </p>
            <div class="flex">
              <div
                class="rounded-[10px] border-[#4A94F5] border-[2px] w-[300px] p-[25px] flex mr-[15px]"
              >
                <img
                  src="https://apoteka.kz/nuxt/8dd1e1182853d17cb0da9ca0809184f7.svg"
                  alt=""
                />
                <div class="ml-[15px]">
                  <p>Қол жетімді: {{ item.availability }} дана.</p>
                  <p>Бүгін жеткіземіз</p>
                </div>
              </div>
              <div
                class="rounded-[10px] border-[#4A94F5] border-[2px] w-[300px] p-[25px] flex"
              >
                <img
                  src="https://apoteka.kz/nuxt/24e9635760ad17f6f1d4d7123882dc2d.svg"
                  alt=""
                />
                <div class="ml-[15px]">
                  <p>Қоймада: 0 дана.</p>
                </div>
              </div>
            </div>
            <button
              @click="addToCart"
              type="button"
              class="text-[20px] mt-[30px] w-[200px] h-[50px] focus:outline-none text-white bg-[#4A94F5] hover:bg-[#4A94F5]focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Себетке қосу
            </button>
          </div>
          <div class="flex">
            <div class="text-[#A7B1BB]">
              <p class="mt-[15px] text-[20px] ml-[5px]">Дейін жарамды:</p>
              <p class="mt-[15px] text-[20px] ml-[5px]">Шығару формасы:</p>
              <p class="mt-[15px] text-[20px] ml-[5px]">Қаптамадағы саны:</p>
              <p class="mt-[15px] text-[20px] ml-[5px]">Өндіруші:</p>
            </div>
            <div>
              <p class="mt-[15px] text-[20px] ml-[10px]">
                <!-- Отображение даты окончания действия -->
                {{ item.validUntil }}
              </p>
              <p class="mt-[15px] text-[20px] ml-[10px]">{{ item.info }}</p>
              <p class="mt-[15px] text-[20px] ml-[10px]">
                <!-- Отображение количества -->
                {{ item.quantity }} шт
              </p>
              <p class="mt-[15px] text-[20px] ml-[10px]">
                <!-- Отображение производителя -->
                {{ item.manufacturer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogCard from "./CatalogCard.vue";
import { db, auth } from "../firebase/firebas";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
export default {
  components: {
    CatalogCard,
  },
  data() {
    return {
      categ: this.$route.params.id2,
      name: this.$route.params.id,
      item: null,
      cart: [],
      currentUser: null,
    };
  },
  methods: {
    async addToCart() {
      const docRef = doc(db, "cart", `${this.currentUser.uid}`);
      const newItem = {
        category: this.$route.params.id2,
        name: this.item.name,
        image: this.item.image,
        price: this.item.price,
        availability: this.item.availability,
        currentUser: this.currentUser.uid,
        quantity: this.item.quantity,
        totalPrice: this.item.price,
        oneItem: 1,
        validUntil: this.item.validUntil,
      };

      // Проверка, существует ли уже новый товар в корзине
      const itemExists = (this.cart || []).some(
        (item) => item.name === newItem.name
      );

      if (itemExists) {
        alert("Уже есть этот товар в корзине");
        return;
      }

      // Добавление нового товара в существующий массив корзины
      const updatedCart = [...(this.cart || []), newItem];

      // Обновление корзины пользователя с обновленным массивом корзины
      await setDoc(docRef, { cart: updatedCart }, { merge: true });

      console.log("Товар добавлен в корзину:", newItem);
    },
  },
  async created() {
    const q = query(collection(db, this.categ), where("name", "==", this.name));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      this.item = doc.data();
      // doc.data() никогда не является неопределенным для снимков запроса документа
      console.log(doc.id, " => ", doc.data());
    });
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        const userDocRef = doc(db, "cart", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.cart = userDoc.data().cart;
        } else {
          console.log("Нет такого документа!");
        }
      }
    });
  },
};
</script>
