<template>
  <Header />
  <div class="pt-[100px]">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
* {
  font-family: "Nunito", sans-serif;
}
</style>
