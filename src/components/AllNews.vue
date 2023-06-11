<template>
  <div>
    <div class="container">
      <div class="flex items-center">
        <h1 class="text-[42px] font-bold pb-[35px]">
          {{ $t("newsTitle") }}
        </h1>
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
    const q = query(collection(db, "news"));
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
