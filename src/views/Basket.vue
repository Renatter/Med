<template>
  <div class="h-full bg-white container">
    <h1 class="text-[50px]">Себет</h1>

    <div>
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr class="text-[15px]">
              <th scope="col" class="px-6 py-3">Тауар</th>
              <th scope="col" class="px-6 py-3">Бағасы</th>
              <th scope="col" class="px-6 py-3">Cаны</th>
              <th scope="col" class="px-6 py-3">Барлығы</th>
            </tr>
          </thead>
          <tbody class="text-[20px]">
            <tr
              v-for="item in items"
              :key="item.currentUser"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <router-link
                :to="{ path: '/InfoCard/' + item.name + '/' + item.category }"
              >
                <td class="flex items-center px-6 py-4 whitespace-nowrap">
                  <img
                    :src="item.image"
                    alt="Product Image"
                    class="w-[70px] h-[70px] mr-4"
                  />
                  <div>
                    <span class="font-medium text-gray-900 dark:text-white">{{
                      item.name.substring(0, 15) + "..."
                    }}</span>
                    <div>
                      <span class="font-medium text-[#B6BEC6] dark:text-white">
                        Қаптамадағы саны:{{ item.quantity }}</span
                      >
                    </div>
                    <div>
                      <span class="font-medium text-[#B6BEC6] dark:text-white">
                        Жарамды:{{ item.validUntil }}</span
                      >
                    </div>
                  </div>
                </td>
              </router-link>

              <td class="px-6 py-4">
                <div>{{ item.price }} тг</div>
                <div>Қол жетімді:{{ item.availability }}</div>
              </td>
              <td class="px-6 py-4">
                <div
                  class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative"
                >
                  <button
                    class="font-semibold border-r bg-white text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                    @click="decrementQuantity(item)"
                  >
                    <span class="m-auto text-[#2E91FF] text-[25px]">-</span>
                  </button>
                  <input
                    type="hidden"
                    class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                    readonly
                    name="custom-input-number"
                    :value="item.oneItem"
                  />
                  <div
                    class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default"
                  >
                    <span>{{ item.oneItem }}</span>
                  </div>
                  <button
                    class="font-semibold border-l bg-white text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                    @click="incrementQuantity(item)"
                    :disabled="item.oneItem >= item.availability"
                  >
                    <span class="m-auto text-[#2E91FF] text-[25px]">+</span>
                  </button>
                </div>
              </td>
              <td class="px-6 py-4">${{ item.totalPrice }}</td>
              <td class="px-6 py-4">
                <button @click="deleteItem(item)" class="text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="bg-[#F3F3F3] p-[15px] mt-[25px] rounded-[10px] flex justify-between items-center"
    >
      <div class="flex t">
        <input
          v-model="promoCode"
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button
          @click="applyPromoCode"
          type="button"
          class="text-[15px] font-bold h-[45px] ml-[15px] border-[1px] text-[#2E91FF] border-[#2E91FF] bg-white hover:bg-[#2E91FF] hover:text-white focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Кодты қолдану
        </button>
      </div>
      <div v-if="disc" class="text-[#2563EB] font-bold text-[25px]">
        Промокод {{ promoCode }} {{ disc }} %
      </div>
      <div class="mt-4 font-bold text-[20px]">
        БАРЛЫҒЫ: <span class="text-[#2E91FF]">{{ totalSum }} тг</span>
      </div>
    </div>
    <router-link to="/Offer">
      <button
        @click="addToCart"
        type="button"
        class="mt-[20px] h-[50px] w-[200px] text-[20px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Тапсырыс беру
      </button>
    </router-link>

    <div class="bg-[#E0EEFF] p-[25px] mt-[20px] rounded-[20px]">
      <p class="text-[20px]">
        Жеткізу тек 2 500 теңгеден бастап тапсырыспен ғана қолжетімді, бірақ сіз
        тауарды сатып алып, оны біздің дәріханадан ала аласыз.
      </p>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../firebase/firebas";
import {
  doc,
  getDocs,
  updateDoc,
  arrayRemove,
  onSnapshot,
  collection,
  setDoc,
  query,
  where,
} from "firebase/firestore";

export default {
  data() {
    return {
      currentUser: null,
      firstName: null,
      lastName: null,
      items: null,
      id: null,
      totalSum: 0,
      promoCode: "",
      cart: [],
      disc: "",
    };
  },
  methods: {
    async addToCart() {
      const docRef = doc(db, "offer", `${this.currentUser.uid}`);

      // Loop through each item in this.items and add it to the cart
      for (const item of this.items) {
        const newItem = {
          category: item.category,
          name: item.name,
          image: item.image,
          price: item.price,
          availability: item.availability,
          currentUser: this.currentUser.uid,
          quantity: item.quantity,
          totalPrice: item.totalPrice,
          oneItem: item.oneItem,
          validUntil: item.validUntil,
        };

        // Check if the new item already exists in the cart
        const itemExists = (this.cart || []).some(
          (cartItem) => cartItem.name === newItem.name
        );

        if (itemExists) {
          alert("Уже есть этот товар в корзине");
          continue;
        }

        // Add the new item to the existing cart array
        this.cart.push(newItem);
      }

      // Update the user's cart with the updated cart array
      await setDoc(
        docRef,
        { cart: this.cart, totalSum: this.totalSum },
        { merge: true }
      );

      console.log("Items added to cart:", this.items);
    },

    async applyPromoCode() {
      const promoCode = this.promoCode; // Значение промокода
      const promoCollectionRef = collection(db, "promo"); // Ссылка на коллекцию "promo"

      // Запрос Firestore для получения документа с соответствующим промокодом
      const querySnapshot = await getDocs(
        query(promoCollectionRef, where("name", "==", promoCode))
      );

      if (!querySnapshot.empty) {
        // Документ с промокодом найден
        const promoDoc = querySnapshot.docs[0].data();
        const discount = promoDoc.discount;
        this.disc = promoDoc.discount;
        // Применение скидки
        this.totalSum = this.totalSum * (1 - discount / 100);
      }
    },

    updateTotalSum() {
      if (this.items) {
        this.totalSum = this.items.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );
      } else {
        this.totalSum = 0;
      }
    },
    updateTotalPrice(item) {
      item.totalPrice = item.price * item.oneItem;
    },
    async deleteItem(item) {
      const docRef = doc(db, "cart", this.id);
      await updateDoc(docRef, {
        cart: arrayRemove(item),
      });
      this.updateTotalSum(); // Call the method after deleting the item
    },
    decrementQuantity(item) {
      if (item.oneItem > 1) {
        item.oneItem--;
        this.updateTotalPrice(item);
        this.updateTotalSum(); // Call the method after decrementing the quantity
      }
    },
    incrementQuantity(item) {
      if (item.oneItem < item.availability) {
        item.oneItem++;
        this.updateTotalPrice(item);
        this.updateTotalSum(); // Call the method after incrementing the quantity
      }
    },
  },

  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        this.id = user.uid;
        const docRef = doc(db, "cart", this.id);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.items = docSnap.data().cart;
            this.updateTotalSum(); // Call the method after fetching the items
          } else {
            console.log("No such document!");
          }
        });

        // Add unsubscribe function to component instance
        this.unsubscribe = unsubscribe;
      }
    });
  },
  beforeUnmount() {
    // Unsubscribe from the snapshot listener when the component is unmounted
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
};
</script>

<style lang="scss" scoped></style>
