<template>
  <div class="flex flex-wrap gap-[15px]">
    <!-- Комментарий: Итерация по каждому комментарию в массиве comments -->
    <div
      v-for="comment in comments"
      class="Comment border-[1px] w-[350px] rounded-[15px] p-[15px]"
    >
      <div class="flex">
        <!-- Комментарий: Отображение имени комментатора -->
        <h1 class="text-[25px]">{{ comment.name }}</h1>
      </div>
      <!-- Комментарий: Отображение текста комментария -->
      <p class="text-[18px]">{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebas";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

export default {
  props: ["comments"], // Комментарий: Принимаем свойство comments как входной параметр

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
