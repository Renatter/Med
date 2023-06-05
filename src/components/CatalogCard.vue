<template>
  <!-- Отображение категории -->
  {{ cat }}
  <div class="flex flex-wrap">
    <!-- Цикл по продуктам -->
    <div v-for="prodcut in prodcuts" class="mt-[45px]">
      <div
        class="mt-[20px] CARD bg-white rounded-[15px] w-[250px] h-[400px] p-[25px] relative ml-[25px] border-[1px]"
      >
        <!-- Изображение продукта -->
        <img :src="prodcut.image" class="h-[200px] object-contain" alt="" />

        <!-- Название продукта -->
        <p class="text-[21px] text-[#445471] pt-[30px]">
          {{ prodcut.name.substring(0, 15) + "..." }}
        </p>
        <!-- Информация о продукте и количество -->
        <p class="pt-[20px]">{{ prodcut.info }} {{ prodcut.quantity }} шт</p>
        <div class="flex items-end">
          <!-- Цена продукта -->
          <p class="ml-[15px] text-[20px] oldPrice text-[#709FF4] font-bold">
            {{ prodcut.price }} ₸
          </p>
        </div>
        <!-- Ссылка на страницу с подробностями о продукте -->
        <router-link :to="{ path: '/ProductCard/' + prodcut.name + '/' + cat }">
          <!-- Кнопка "Купить" -->
          <button
            type="button"
            class="text-[20px] mt-[15px] buyButton focus:outline-none text-white bg-[#60A5FA] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
          >
            Купить
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default {
  props: ["prodcuts", "cat"],
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.disc {
  border-radius: 15% 0% 14% 0% / 27% 27% 27% 27%;
}

.CARD {
  transition: transform 0.3s, box-shadow 0.3s;
}

.CARD:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 400px;
}

.CARD .buyButton {
  opacity: 0;
  transition: opacity 0.3s;
}

.CARD:hover .buyButton {
  opacity: 1;
}
</style>
