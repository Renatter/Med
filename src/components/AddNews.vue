<template>
  <div class="flex justify-center pt-[25px]"></div>

  <div class="center">
    <form @submit.prevent="addProduct">
      <!-- Поле для ввода названия -->
      <div class="w-[400px]">
        <label for="name"> {{ $t("admin.name") }}:</label>
        <input
          type="text"
          id="name"
          v-model="newProduct.name"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода URL изображения -->
      <div>
        <label for="image"> {{ $t("admin.url") }}:</label>
        <input
          type="text"
          id="image"
          v-model="newProduct.image"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для выбора даты -->
      <div>
        <label for="validUntil"> {{ $t("admin.date") }}</label>
        <input
          type="date"
          id="validUntil"
          v-model="newProduct.validUntil"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода информации -->
      <div>
        <label for="info"> {{ $t("admin.text") }}:</label>
        <textarea
          id="info"
          v-model="newProduct.info"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>

      <!-- Кнопка для добавления продукта -->
      <button
        type=" button"
        class="mt-[25px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {{ $t("admin.add") }}
      </button>
    </form>
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
      cat: "Hygiene",
      newProduct: {
        name: "",
        image: "",
        validUntil: "",
        info: "",
      },
    };
  },
  methods: {
    tab(item) {
      this.cat = item;
    },
    async addProduct() {
      // Добавление новости в коллекцию "news"
      const docRef = await addDoc(collection(db, "news"), {
        nameNews: this.newProduct.name, // Внимание на исправленную строку
        image: this.newProduct.image,
        date: this.newProduct.validUntil,
        text: this.newProduct.info,
      });
      // Очистка полей формы после успешного добавления продукта
      this.newProduct.name = "";
      this.newProduct.image = "";
      this.newProduct.validUntil = "";
      this.newProduct.info = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
