<template>
  <div>
    <div class="xx">
      <h1 class="text-[35px] font-bold">{{ $t("pay.title") }}</h1>
      <h1 class="">
        {{ $t("pay.title2") }}
      </h1>
      <p>
        {{ $t("pay.text") }}
      </p>
      <p>{{ $t("pay.text1") }}</p>
      <p>
        {{ $t("pay.text2") }}
      </p>
      <h1>{{ $t("pay.title3") }}</h1>
      <h1>{{ $t("pay.title4") }}</h1>
      <p>
        {{ $t("pay.title4text") }}
      </p>
      <h1>{{ $t("pay.title5") }}</h1>
      <p>{{ $t("pay.title5text") }}</p>

      <h1 class="pt-[15px]">{{ $t("pay.title6") }}</h1>
      <p>
        {{ $t("pay.title6text") }}
      </p>
      <h1>{{ $t("pay.title7") }}</h1>
      <p>
        {{ $t("pay.title7text") }}
      </p>

      <h1>{{ $t("pay.title8") }}</h1>
      <p>{{ $t("pay.title8text") }}</p>
      <h1>{{ $t("pay.title9") }}</h1>
      <p>
        {{ $t("pay.title9text") }}
      </p>

      <h1>{{ $t("pay.title10") }}</h1>
      <p>{{ $t("pay.title10text") }}</p>
      <h1 class="pt-[15px]">{{ $t("pay.title11") }}</h1>
      <p>
        {{ $t("pay.title11text") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.xx {
  max-width: 900px;
  margin: 0 auto;
}
h1 {
  padding-bottom: 25px;
  font-size: 28px;
  font-weight: bold;
}
p {
  padding-bottom: 15px;
}
</style>
