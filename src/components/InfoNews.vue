<template>
  <div>
    <div class="container">
      <h1 class="text-[55px] font-bold">{{ item.nameNews }}</h1>
      <p class="text-[20px] text-gray-400 py-[25px]">{{ item.date }}</p>
      <img :src="item.image" class="w-[800px] mx-auto rounded-[25px]" alt="" />
      <p class="text-[20px] text-gray-400 py-[25px]">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import CatalogCard from "./CatalogCard.vue";
import { db, auth } from "../firebase/firebas";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
export default {
  data() {
    return {
      nameNews: this.$route.params.id,
      item: null,
    };
  },
  async created() {
    const q = query(
      collection(db, "news"),
      where("nameNews", "==", this.nameNews)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      this.item = doc.data();
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  },
};
</script>

<style lang="scss" scoped></style>
