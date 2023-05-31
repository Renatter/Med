<template>
  <div class="container h-full pb-[105px]">
    <div class="flex items-center">
      <h1 class="text-[42px] font-bold">Клиенттер біз туралы</h1>
      <a
        href=""
        class="text-[#60A5FA] border-[#60A5FA] font-bold border-[2px] rounded-[5px] ml-[15px] p-[5px]"
        >Все отзывы</a
      >
    </div>
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
      comments: [],
    };
  },
  async mounted() {
    const q = query(collection(db, "comments"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const commentItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.comments.push(commentItem);
    });
  },
};
</script>
