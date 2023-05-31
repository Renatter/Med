<template>
  <div class="container h-[100vh]">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide
        v-for="slide in slides"
        :key="slide.id"
        class="bg-black rounded-[35px]"
      >
        <div class="h-[420px]">
          <img :src="slide.imageUrl" class="h-[420px] w-full" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <GridMenu />
  </div>
  <Best />
  <Comment />
  <News />
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import News from "./News.vue";
import GridMenu from "../components/GridMenu.vue";
import Comment from "./Comment.vue";
import Best from "./Best.vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
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
      modules: [Navigation],
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
