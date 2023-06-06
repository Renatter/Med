<template>
  <div class="bg-[#EFF8FF] mb-[55px]">
    <div class="container h-[700px] pt-[50px]">
      <!-- Комментарий: Раздел с фоном в виде светло-голубой полосы и отступом вниз -->
      <h1>Үздік тауарлар</h1>
      <!-- Комментарий: Использование компонента BestCard для отображения лучших товаров с передачей данных -->
      <BestCard :prodcuts="prodcuts" />
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebas";
import BestCard from "../components/BestCard.vue";
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
export default {
  components: {
    BestCard,
  },
  data() {
    return {
      prodcuts: [], // Комментарий: Массив для хранения информации о товарах
    };
  },
  async mounted() {
    // Комментарий: Асинхронная функция, вызывается после монтирования компонента
    const querySnapshot = await getDocs(collection(db, "best"));
    // Комментарий: Получение всех документов из коллекции "best"
    querySnapshot.forEach((doc) => {
      // Комментарий: Обход каждого документа
      const newsItem = {
        id: doc.id,
        ...doc.data(),
      };
      // Комментарий: Создание объекта с информацией о товаре
      this.prodcuts.push(newsItem);
      // Комментарий: Добавление объекта товара в массив
    });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Nunito", sans-serif;
  font-weight: Bold 700;
  font-size: 35px;
}
</style>
