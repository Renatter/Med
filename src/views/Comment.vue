<template>
  <div class="container h-full pb-[105px]">
    <div class="flex items-center">
      <!-- Комментарий: Заголовок раздела -->
      <h1 class="text-[42px] font-bold">Клиенттер біз туралы</h1>
      <!-- Комментарий: Ссылка на все отзывы -->
    </div>

    <!-- Комментарий: Использование компонента CommentCard для отображения отзывов с передачей данных -->
    <CommentCard :comments="comments" />
  </div>
</template>

<script>
import { db } from "../firebase/firebas";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import CommentCard from "../components/CommentCard.vue";

export default {
  components: {
    CommentCard,
  },
  data() {
    return {
      comments: [], // Комментарий: Массив для хранения информации об отзывах
    };
  },
  async mounted() {
    const q = query(collection(db, "comments"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // Комментарий: Создание объекта для каждого отзыва, включая его идентификатор и данные
      const commentItem = {
        id: doc.id,
        ...doc.data(),
      };
      // Комментарий: Добавление объекта отзыва в массив comments
      this.comments.push(commentItem);
    });
  },
};
</script>
