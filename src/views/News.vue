<template>
  <div>
    <div class="container pb-[40px]">
      <div class="flex items-center">
        <!-- Комментарий: Заголовок раздела -->
        <h1 class="text-[42px] font-bold">Денсаулық туралы пайдалы</h1>
        <!-- Комментарий: Ссылка на все новости -->
      </div>
      <!-- Комментарий: Компонент NewsCard для отображения новостей -->
      <NewsCard :items="news" />
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebas";
import { collection, query, getDocs, limit } from "firebase/firestore";
import NewsCard from "../components/NewsCard.vue";

export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      news: [], // Комментарий: Массив для хранения новостей
    };
  },
  async mounted() {
    // Комментарий: Запрос новостей из базы данных
    const q = query(collection(db, "news"), limit(4));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // Комментарий: Создание объекта для каждой новости, включая идентификатор и данные
      const newsItem = {
        id: doc.id,
        ...doc.data(),
      };
      // Комментарий: Добавление объекта новости в массив news
      this.news.push(newsItem);
    });
  },
};
</script>
