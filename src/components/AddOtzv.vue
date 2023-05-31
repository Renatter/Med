<template>
  <div>
    <div class="container">
      <h1 class="font-bold text-[30px]">Пікір қалдыру</h1>

      <div class="rounded-[20px] border-[1px] w-[700px] h-full">
        <div class="flex pt-[30px] pl-[30px]">
          <input
            v-model="userName"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Сіздің атыңыз"
            required
          />
        </div>
        <div class="flex pt-[30px] pl-[30px]">
          <div class="flex items-center mb-4">
            <input
              id="radio-1"
              type="radio"
              value="1"
              v-model="selectedOption"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="radio-1"
              class="ml-2 mr-[10px] text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              1</label
            >
          </div>
          <div class="flex items-center mb-4">
            <input
              id="radio-2"
              type="radio"
              value="2"
              v-model="selectedOption"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="radio-2"
              class="ml-2 mr-[10px] text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              2</label
            >
          </div>
          <div class="flex items-center mb-4">
            <input
              id="radio-3"
              type="radio"
              value="3"
              v-model="selectedOption"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="radio-3"
              class="ml-2 mr-[10px] text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              3</label
            >
          </div>
          <div class="flex items-center mb-4">
            <input
              id="radio-4"
              type="radio"
              value="4"
              v-model="selectedOption"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="radio-4"
              class="ml-2 mr-[10px] text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              4</label
            >
          </div>
          <div class="flex items-center mb-4">
            <input
              id="radio-5"
              type="radio"
              value="5"
              v-model="selectedOption"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="radio-5"
              class="ml-2 mr-[10px] text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              5</label
            >
          </div>
        </div>
        <div class="p-[25px]">
          <h1>Сіздің пікіріңіз</h1>
          <textarea
            v-model="infoText"
            name=""
            id=""
            cols="65"
            rows="10"
            class="rounded-[20px] border-[2px] p-[20px]"
          ></textarea>
          <button
            @click="addProduct"
            type="button"
            class="text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Жіберу
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebas";
export default {
  data() {
    return {
      userName: "",
      infoText: "",
      selectedOption: "",
    };
  },
  methods: {
    async addProduct() {
      const rating = parseInt(this.selectedOption); // Преобразование рейтинга в число
      const docRef = await addDoc(collection(db, "comments"), {
        name: this.userName,
        text: this.infoText,
        rating: rating,
      });
      // Очистка полей формы после успешного добавления комментария
      this.userName = "";
      this.infoText = "";
      this.selectedOption = "";
    },
  },
};
</script>

<style scoped>
/* Your custom styles go here */
</style>
