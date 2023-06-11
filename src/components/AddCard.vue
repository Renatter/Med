<template>
  <div class="flex justify-center pt-[25px]">
    <!-- Навигационное меню -->
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li class="mr-2">
        <a
          @click="tab('Hygiene')"
          href="#"
          class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          aria-current="page"
          >{{ $t("admin.Hygiene") }}</a
        >
      </li>
      <li class="mr-2">
        <a
          @click="tab('MaB')"
          href="#"
          class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >{{ $t("admin.Mab") }}</a
        >
      </li>
      <li class="mr-2">
        <a
          @click="tab('Cosmetics')"
          href="#"
          class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >{{ $t("admin.cosmetic") }}</a
        >
      </li>
      <li class="mr-2">
        <a
          @click="tab('Medicines')"
          href="#"
          class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >{{ $t("admin.med") }}</a
        >
      </li>
      <li class="mr-2">
        <a
          @click="tab('IaP')"
          href="#"
          class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >{{ $t("admin.Iap") }}</a
        >
      </li>
    </ul>
  </div>

  <div class="center">
    <form @submit.prevent="addProduct">
      <!-- Поле для ввода названия -->
      <div class="w-[400px]">
        <label for="name">{{ $t("admin.name") }}:</label>
        <input
          type="text"
          id="name"
          v-model="newProduct.name"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода количества -->
      <div>
        <label for="quantity">{{ $t("admin.quan") }}:</label>
        <input
          type="number"
          id="quantity"
          v-model="newProduct.quantity"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода URL изображения -->
      <div>
        <label for="image">{{ $t("admin.url") }}:</label>
        <input
          type="text"
          id="image"
          v-model="newProduct.image"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода даты окончания -->
      <div>
        <label for="validUntil">{{ $t("admin.date") }}:</label>
        <input
          type="date"
          id="validUntil"
          v-model="newProduct.validUntil"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода производителя -->
      <div>
        <label for="manufacturer">{{ $t("admin.made") }}:</label>
        <input
          type="text"
          id="manufacturer"
          v-model="newProduct.manufacturer"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода информации -->
      <div>
        <label for="info">{{ $t("admin.text") }}:</label>
        <textarea
          id="info"
          v-model="newProduct.info"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>

      <!-- Поле для ввода цены -->
      <div>
        <label for="price">{{ $t("admin.price") }}:</label>
        <input
          type="number"
          id="price"
          v-model="newProduct.price"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Поле для ввода доступности -->
      <div>
        <label for="availability">{{ $t("admin.abil") }}:</label>
        <input
          type="number"
          id="availability"
          v-model="newProduct.availability"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <!-- Кнопка отправки формы -->
      <button
        type="submit"
        class="bg-[#2E91FF] text-white p-[10px] mt-[15px] rounded-[10px] w-[150px]"
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
        quantity: 0,
        image: "",
        validUntil: "",
        manufacturer: "",
        info: "",
        price: 0,
        availability: 0,
      },
    };
  },
  methods: {
    tab(item) {
      this.cat = item;
    },
    async addProduct() {
      const docRef = await addDoc(collection(db, this.cat), {
        name: this.newProduct.name,
        quantity: this.newProduct.quantity,
        image: this.newProduct.image,
        validUntil: this.newProduct.validUntil,
        manufacturer: this.newProduct.manufacturer,
        info: this.newProduct.info,
        price: this.newProduct.price,
        availability: this.newProduct.availability,
      });
      // Добавление нового товара в массив данных
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
