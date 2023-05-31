<template>
  <div class="flex flex-wrap gap-[15px]">
    <div
      v-for="comment in comments"
      class="Comment border-[1px] w-[350px] rounded-[15px] p-[15px]"
    >
      <div class="flex">
        <h1 class="text-[25px]">{{ comment.name }}</h1>
        <div class="flex items-center">
          <template v-for="star in comment.rating">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </template>
        </div>
      </div>
      <p class="text-[18px]">{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebas";

import { collection, doc, setDoc, getDocs } from "firebase/firestore";
export default {
  props: ["comments"],
  data() {
    return {
      // Установите значение рейтинга здесь
    };
  },
};
</script>

<style lang="scss" scoped></style>
