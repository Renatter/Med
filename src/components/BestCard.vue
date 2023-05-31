<template>
  <div class="container h-[700px]">
    <swiper class="mySwiper h-[500px]" :slides-per-view="4">
      <swiper-slide v-for="prodcut in prodcuts" :key="prodcut.id">
        <div
          class="mt-[20px] CARD bg-white rounded-[15px] w-[280px] h-[400px] p-[25px] relative ml-[25px]"
        >
          <img :src="prodcut.image" class="h-[200px] object-contain" alt="" />
          <p
            class="absolute top-[30px] left-[-15px] disc bg-red-400 px-[5px] text-white"
          >
            {{ prodcut.discount }}%
          </p>
          <p class="text-[21px] text-[#445471] pt-[30px]">{{ prodcut.name }}</p>
          <p class="pt-[20px]">{{ prodcut.info }}</p>
          <div class="flex items-end">
            <p class="text-[25px] text-[#709FF4] font-bold">
              {{ calculateDiscountedPrice(prodcut) }} ₸
            </p>
            <p class="ml-[15px] text-[20px] oldPrice">{{ prodcut.price }} ₸</p>
          </div>
          <button
            type="button"
            class="text-[20px] mt-[15px] buyButton focus:outline-none text-white bg-[#60A5FA] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
          >
            Купить
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default {
  props: ["prodcuts"],
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    calculateDiscountedPrice(product) {
      const discount = product.discount || 0; // Если поле 'discount' отсутствует, присваиваем 0
      const price = product.price || 0; // Если поле 'price' отсутствует, присваиваем 0

      if (discount > 0) {
        const discountedPrice = price - (price * discount) / 100;
        return discountedPrice.toFixed(0); // Округляем до целого числа и возвращаем новую цену
      }

      return price; // Если скидка отсутствует, возвращаем исходную цену
    },
  },
};
</script>

<style lang="scss" scoped>
.disc {
  border-radius: 15% 0% 14% 0% / 27% 27% 27% 27%;
}

.oldPrice {
  position: relative;
}

.oldPrice::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  border-top: 2px solid red;
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
