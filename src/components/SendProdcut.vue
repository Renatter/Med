<template>
  <div class="container">
    <div v-if="offers < 1" class="text-[150px] text-center">Бос</div>
    <div v-else class="flex flex-wrap gap-[20px] pt-[25px]">
      <div
        v-for="item in offers"
        :key="item.number"
        class="w-[500px] border-[1px] p-[15px] rounded-[25px]"
      >
        <p class="text-[25px] text-[#2E91FF] font-bold">
          {{ item.firstName }} {{ item.lastName }} {{ item.number }}
        </p>
        <p>
          Қала {{ item.city }}, көше {{ item.ulica }}, үй {{ item.home }}, пәтер
          {{ item.room }}, почта {{ item.pochtaIndex }}
        </p>
        <div class="flex">
          <div v-for="product in item.cart" class="p-[15px] ml-[20px]">
            <img class="h-[150px]" :src="product.image" alt="" />
            <p>{{ product.name.substring(0, 20) + "..." }}</p>
            <p>Дана: {{ product.oneItem }}</p>
          </div>
        </div>
        <p class="text-[25px] font-bold">
          Барлығы
          <span class="text-[#2E91FF]">{{ item.totalSum }} тг</span>
        </p>
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
    async removeItem(item) {
      await deleteDoc(doc(db, "offer", item));
      await deleteDoc(doc(db, "cart", item)); // Используем deleteDoc для удаления элемента
    },
  },
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
