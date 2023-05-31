<template>
  <div>
    <div class="container pt-[20px]">
      {{ this.$route.params.id }}
      <div>
        <button
          type="button"
          @click="price"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Өсу бойынша
        </button>
        <button
          type="button"
          @click="UPprice"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Кему бойынша
        </button>
      </div>
      <div class="flex">
        <div>
          <CatalogCard :prodcuts="products" :cat="this.$route.params.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogCard from "../components/CatalogCard.vue";
import { db } from "../firebase/firebas";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  setDoc,
  doc,
} from "firebase/firestore";
export default {
  components: {
    CatalogCard,
  },
  data() {
    return {
      products: [],
      catalog: this.$route.params.id,
    };
  },
  created() {
    this.fetchProducts();
  },
  watch: {
    "$route.params.id": function (newCatalog) {
      this.catalog = newCatalog;
      this.fetchProducts();
    },
  },
  methods: {
    async price() {
      this.products = []; // Очистить массив перед загрузкой новых продуктов

      const q = query(collection(db, this.catalog), orderBy("price"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const newsItem = {
          id: doc.id,
          ...doc.data(),
        };
        this.products.push(newsItem);
      });
    },
    async UPprice() {
      this.products = []; // Очистить массив перед загрузкой новых продуктов

      const q = query(collection(db, this.catalog), orderBy("price", "desc"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const newsItem = {
          id: doc.id,
          ...doc.data(),
        };
        this.products.push(newsItem);
      });
    },

    async fetchProducts() {
      this.products = []; // Очистить массив перед загрузкой новых продуктов
      const querySnapshot = await getDocs(collection(db, this.catalog));
      querySnapshot.forEach((doc) => {
        const newsItem = {
          id: doc.id,
          ...doc.data(),
        };
        this.products.push(newsItem);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
