<template>
  <div>
    <div class="container">
      <h1 class="font-bold text-[30px]">{{ $t("comment.title") }}</h1>

      <div class="rounded-[20px] border-[1px] w-[700px] h-full">
        <!-- Поле для ввода имени пользователя -->
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

        <!-- Поле для ввода комментария -->
        <div class="p-[25px]">
          <h1>{{ $t("comment.comment") }}</h1>
          <textarea
            v-model="infoText"
            name=""
            id=""
            cols="65"
            rows="10"
            class="rounded-[20px] border-[2px] p-[20px]"
          ></textarea>
          <!-- Кнопка для отправки комментария -->
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
/* Ваши пользовательские стили */
</style>
