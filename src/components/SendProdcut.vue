<template>
  <div class="container">
    <!-- Если нет предложений, выводим "Бос" -->
    <div v-if="offers < 1" class="text-[150px] text-center">Бос</div>
    <!-- Выводим предложения -->
    <div v-else class="flex flex-wrap gap-[20px] pt-[25px]">
      <div
        v-for="item in offers"
        :key="item.number"
        class="w-[500px] border-[1px] p-[15px] rounded-[25px]"
      >
        <!-- Выводим детали предложения -->
        <p class="text-[25px] text-[#2E91FF] font-bold">
          {{ item.firstName }} {{ item.lastName }} {{ item.number }}
        </p>
        <p>
          Город: {{ item.city }}, улица: {{ item.ulica }}, дом: {{ item.home }},
          квартира: {{ item.room }}, почтовый индекс: {{ item.pochtaIndex }}
        </p>
        <div class="flex">
          <!-- Выводим товары в предложении -->
          <div v-for="product in item.cart" class="p-[15px] ml-[20px]">
            <img class="h-[150px]" :src="product.image" alt="" />
            <p>{{ product.name.substring(0, 20) + "..." }}</p>
            <p>Количество: {{ product.oneItem }}</p>
          </div>
        </div>
        <p class="text-[25px] font-bold">
          Общая сумма:
          <span class="text-[#2E91FF]">{{ item.totalSum }} тг</span>
        </p>
        <!-- Кнопка для удаления предложения -->
        <button
          @click="removeItem(item.uid)"
          type="button"
          class="mt-[20px] h-[50px] w-[200px] text-[20px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Жіберу
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../firebase/firebas";
import {
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  onSnapshot,
  collection,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
export default {
  data() {
    return {
      offers: null,
    };
  },
  methods: {
    // Метод для удаления элемента из предложения
    async removeItem(item) {
      await deleteDoc(doc(db, "offer", item));
      await deleteDoc(doc(db, "cart", item));
    },
  },
  // Получаем предложения из базы данных при создании компонента
  async created() {
    const classRef = collection(db, "offer");
    onSnapshot(classRef, (snapshot) => {
      this.offers = [];
      snapshot.forEach((doc) => {
        const classItem = doc.data();
        this.offers.push(classItem);
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
