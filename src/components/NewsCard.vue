<template>
  <div>
    <div class="container">
      <div class="flex gap-[25px] flex-wrap">
        <div v-for="item in items" class="NewsCard font-bold">
          <router-link :to="{ path: '/InfoNews/' + item.nameNews }">
            <img
              class="w-[250px] h-[150px] rounded-[15px]"
              :src="item.image"
              alt=""
            />
            <p class="text-[#BBC3CB] pt-[15px]">{{ item.date }}</p>
            <p class="text-[20px] pt-[05px]">
              {{ item.nameNews.substring(0, 20) + "..." }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebas";

import { collection, doc, setDoc, getDocs } from "firebase/firestore";
export default {
  props: ["items"],
  mounted() {
    // Данные для новостей
  },
};
</script>

<style lang="scss" scoped></style>
