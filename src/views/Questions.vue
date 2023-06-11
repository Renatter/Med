<template>
  <div>
    <div class="container">
      <h1 class="text-[35px] font-bold">{{ $t("quest.title") }}</h1>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">{{ $t("quest.title1") }}</h1>
          <span v-if="isHidden7">
            {{ $t("quest.title1text") }}
          </span>
          <br />
          <button
            @click="isHidden7 = !isHidden7"
            type="button"
            class="text-[15px] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("quest.btn") }}
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">
            {{ $t("quest.title2") }}
          </h1>
          <span v-if="isHidden2">
            {{ $t("quest.text2") }}
          </span>
          <br />
          <button
            @click="isHidden2 = !isHidden2"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("quest.btn") }}
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">{{ $t("quest.title3") }}</h1>
          <span v-if="isHidden8">
            {{ $t("quest.text3") }}
          </span>
          <br />
          <button
            @click="isHidden8 = !isHidden8"
            type="button"
            class="text-[15px] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("quest.btn") }}
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">
            {{ $t("quest.title4") }}
          </h1>
          <span v-if="isHidden2">
            {{ $t("quest.text4") }}
          </span>
          <br />
          <button
            @click="isHidden2 = !isHidden2"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("quest.btn") }}
          </button>
        </div>
      </div>

      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">{{ $t("quest.title6") }}</h1>
          <span v-if="isHidden4">
            {{ $t("quest.text6") }}
          </span>
          <br />
          <button
            @click="isHidden4 = !isHidden4"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("quest.btn") }}
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">
            {{ $t("quest.title7") }}
          </h1>
          <span v-if="isHidden5">
            {{ $t("quest.text7") }}
          </span>
          <br />
          <button
            @click="isHidden5 = !isHidden5"
            type="button"
            class="text-[15px] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("quest.btn") }}
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">{{ $t("quest.title8") }}</h1>
          <span v-if="isHidden6">
            {{ $t("quest.text8") }}
          </span>
          <br />
          <button
            @click="isHidden6 = !isHidden6"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("quest.btn") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden1: false,
      isHidden2: false,
      isHidden3: false,
      isHidden4: false,
      isHidden5: false,
      isHidden5: false,
      isHidden6: false,
      isHidden7: false,
      isHidden8: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.x {
  margin: 0 auto;
  margin-bottom: 25px;
}
</style>
