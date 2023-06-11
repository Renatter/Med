<template>
  <div class="container">
    <ul
      class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
    >
      <li class="w-full">
        <a
          @click="activate(1)"
          href="#"
          class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-current="page"
          >{{ $t("admin.zapros") }}</a
        >
      </li>
      <li class="w-full">
        <a
          @click="activate(2)"
          href="#"
          class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >{{ $t("admin.addT") }}</a
        >
      </li>
      <li class="w-full">
        <a
          @click="activate(3)"
          href="#"
          class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >{{ $t("admin.prom") }}</a
        >
      </li>
      <li class="w-full">
        <a
          @click="activate(4)"
          href="#"
          class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >{{ $t("admin.addNews") }}</a
        >
      </li>
    </ul>

    <SendProdcut v-if="tab === 1" />
    <AddCard v-if="tab === 2" />
    <AddPromo v-if="tab === 3" />
    <AddNews v-if="tab === 4" />
  </div>
</template>

<script>
import SendProdcut from "../components/SendProdcut.vue";
import AddCard from "../components/AddCard.vue";
import AddPromo from "../components/AddPromo.vue";
import AddNews from "../components/AddNews.vue";
export default {
  components: {
    SendProdcut,
    AddCard,
    AddPromo,
    AddNews,
  },
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    activate(item) {
      this.tab = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
