<template>
  <div>
    <div class="container">
      <h1 class="text-[55px] font-bold">{{ $t("conect.title") }}</h1>

      <div class="flex justify-between">
        <div>
          <p class="text-[20px] font-bold">{{ $t("conect.addres") }}</p>
          <p class="text-[18px]">ул.Айманова 155, ТД «Дархан»</p>
        </div>
        <div>
          <p class="text-[20px] font-bold">Телефон</p>
          <p class="text-[18px]">+7 771 112 09 57</p>
        </div>
        <div>
          <p class="text-[20px] font-bold">{{ $t("conect.email") }}</p>
          <p class="text-[18px]">info@apoteka.kz</p>
        </div>
      </div>
      <div class="pt-[35px]">
        <iframe
          class="rounded-[25px]"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Adbb96b7e1f549d47cc8602eafca7a9268bf9aa58835902238ada7675916e4ffa&amp;source=constructor"
          width="1200px"
          height="469"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
