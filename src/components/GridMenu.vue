<template>
  <div>
    <div class="parent h-[400px] pt-[15px]">
      <div class="div1 rounded-[15px] bg-slate-700">
        <div class="p-[55px]">
          <h1 class="text-[45px] font-bold text-white">
            {{ $t("gridMenu.card1") }}
          </h1>
          <router-link :to="{ path: '/Catlog/' + 'IaP' }">
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              {{ $t("gridMenu.btn") }}
            </button></router-link
          >
        </div>
      </div>
      <div class="div2 rounded-[15px] bg-red-400">
        <div class="p-[45px] flex relative">
          <div>
            <h1 class="text-[25px] font-semibold text-white">
              {{ $t("gridMenu.card2") }}
            </h1>
            <router-link :to="{ path: '/Catlog/' + 'MaB' }">
              <button
                type="button"
                class="text-gray-900 bg-white w-[150px] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {{ $t("gridMenu.btn") }}
              </button></router-link
            >
          </div>
          <img
            class="w-[200px] absolute right-0 bottom-0"
            src="https://api-back.apoteka.kz//media/60af409b6a71f.webp"
            alt=""
          />
        </div>
      </div>
      <div class="div3 rounded-[15px] bg-blue-400">
        <div class="p-[45px] flex relative">
          <div>
            <h1 class="text-[25px] font-semibold text-white">
              {{ $t("gridMenu.card3") }}
            </h1>
            <router-link :to="{ path: '/Catlog/' + 'Hygiene' }">
              <button
                type="button"
                class="text-gray-900 bg-white w-[150px] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {{ $t("gridMenu.btn") }}
              </button></router-link
            >
          </div>
          <img
            class="w-[200px] absolute right-0 bottom-0"
            src="https://api-back.apoteka.kz//media/6093c2d0c097d.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.parent {
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

.div1 {
  background-image: url("https://miuphro.com/wp-content/uploads/2022/07/young-asia-girl-wear-medical-face-mask-shows-something-blank-space-with-dressed-casual-cloth-look-camera-social-distancing-quarantine-corona-virus-panoramic-banner-blue-background_11zon-scaled.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  grid-area: 1 / 1 / 3 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
}
h1 {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: Bold 700;
}
</style>
