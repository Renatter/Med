<template>
  <div>
    <div class="container pb-[40px]">
      <div class="flex items-center">
        <h1 class="text-[42px] font-bold">Полезное о здоровье</h1>
        <a
          href=""
          class="text-[#60A5FA] border-[#60A5FA] font-bold border-[2px] rounded-[5px] ml-[15px] p-[5px]"
          >Все отзывы</a
        >
      </div>
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
      news: [],
    };
  },
  async mounted() {
    const q = query(collection(db, "news"), limit(4));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const newsItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.news.push(newsItem);
    });
  },
};
</script>
