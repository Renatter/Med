<template>
  <div class="bg-[#EFF8FF] mb-[55px]">
    <div class="container h-[700px] pt-[50px]">
      <h1>Лучшие товары</h1>
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
      prodcuts: [],
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "best"));
    querySnapshot.forEach((doc) => {
      const newsItem = {
        id: doc.id,
        ...doc.data(),
      };
      this.prodcuts.push(newsItem);
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
