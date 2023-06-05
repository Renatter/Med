<template>
  <div class="container h-[100vh]">
    <!-- Компонент Swiper для слайдера -->
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <!-- Компонент SwiperSlide для каждого слайда -->
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
        class="bg-black rounded-[35px]"
      >
        <div class="h-[420px]">
          <!-- Отображение изображения слайда -->
          <img :src="slide.imageUrl" class="h-[420px] w-full" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <!-- Компонент GridMenu -->
    <GridMenu />
  </div>
  <!-- Компонент Best -->
  <Best />
  <!-- Компонент Comment -->
  <Comment />
  <!-- Компонент News -->
  <News />
</template>
<script>
// Импорт компонентов Swiper Vue.js
import { Swiper, SwiperSlide } from "swiper/vue";
// Импорт компонента News
import News from "./News.vue";
// Импорт компонента GridMenu
import GridMenu from "../components/GridMenu.vue";
// Импорт компонента Comment
import Comment from "./Comment.vue";
// Импорт компонента Best
import Best from "./Best.vue";
// Импорт стилей Swiper
import "swiper/css";
import "swiper/css/navigation";

// Импорт необходимых модулей Swiper
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    GridMenu,
    Best,
    Comment,
    News,
  },
  data() {
    return {
      modules: [Navigation], // Подключение модулей Swiper
      slides: [
        {
          id: 1,
          imageUrl: "https://api-back.apoteka.kz//media/60ab54367fc41.webp",
        },
        {
          id: 2,
          imageUrl: "https://api-back.apoteka.kz//media/60ab546857566.webp",
        },
        {
          id: 3,
          imageUrl: "https://api-back.apoteka.kz//media/602a3b12eb270.webp",
        },
        {
          id: 4,
          imageUrl: "https://api-back.apoteka.kz//media/60ab5500a3f29.webp",
        },
      ],
    };
  },
};
</script>
