<template>
  <div>
    <div class="container">
      <div class="flex gap-[25px] flex-wrap">
        <!-- Комментарий: Итерация по элементам массива items и отображение каждой новости -->
        <div v-for="item in items" class="NewsCard font-bold">
          <!-- Комментарий: Маршрутная ссылка на страницу с полной информацией о новости -->
          <router-link :to="{ path: '/InfoNews/' + item.nameNews }">
            <!-- Комментарий: Отображение изображения новости -->
            <img
              class="w-[250px] h-[150px] rounded-[15px]"
              :src="item.image"
              alt=""
            />
            <!-- Комментарий: Отображение даты новости -->
            <p class="text-[#BBC3CB] pt-[15px]">{{ item.date }}</p>
            <!-- Комментарий: Отображение заголовка новости -->
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
  props: ["items"], // Комментарий: Принимаем массив новостей в качестве свойства
  mounted() {
    // Комментарий: Здесь могут быть дополнительные действия, связанные с компонентом NewsCard
    // Данные для новостей могут быть получены из базы данных или других источников
  },
};
</script>

<style lang="scss" scoped></style>
