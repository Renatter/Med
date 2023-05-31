<template>
  <div>
    <div class="container">
      <h1 class="text-[35px] font-bold">Сұрақтар мен жауаптар</h1>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">Онлайн дәріхананың жұмыс кестесі</h1>
          <span v-if="isHidden7">
            Онлайн дәріханалар 24/7 жұмыс істейді. Сіз кез келген ыңғайлы
            уақытта тапсырыс бере аласыз. Операторлар тапсырыстарды 10:00-ден
            21:00-ге дейін, үзіліссіз және демалыс күндерінсіз өңдейді. Алматы
            қаласындағы алып кету нүктесі 10:00-ден 22:00-ге дейін, үзіліссіз
            және демалыс күндерінсіз жұмыс істейді. Қазақстанның басқа
            қалаларына тапсырыстар жұмыс күндері жіберіледі.
          </span>
          <br />
          <button
            @click="isHidden7 = !isHidden7"
            type="button"
            class="text-[15px] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">
            Сайттағы тапсырысты түсіну мүмкін емес. Телефон арқылы тапсырыс бере
            аласыз ба?
          </h1>
          <span v-if="isHidden2">
            Егер сайтта тапсырыс беру кезінде қиындықтар туындаса apoteka.kz.
            сіз телефон арқылы тапсырыс бере аласыз +7 777 358 77 44. <br />

            Байланыс орталығының фармацевт-операторы сізге қажетті тауарларды
            таңдауға және тапсырыс беруге көмектеседі.
          </span>
          <br />
          <button
            @click="isHidden2 = !isHidden2"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">Онлайн дәріхананың жұмыс кестесі</h1>
          <span v-if="isHidden8">
            Егер сайтта тапсырыс беру кезінде қиындықтар туындаса apoteka.kz.
            сіз телефон арқылы тапсырыс бере аласыз+7 777 358 77 44. <br />

            Байланыс орталығының фармацевт-операторы сізге қажетті тауарларды
            таңдауға және тапсырыс беруге көмектеседі.
          </span>
          <br />
          <button
            @click="isHidden8 = !isHidden8"
            type="button"
            class="text-[15px] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">
            Онлайн дәріханада жеткізудің қандай түрлері бар?
          </h1>
          <span v-if="isHidden2">
            Жеткізу аймағы шегінде Алматы бойынша курьер – қала бойынша бірнеше
            сағат ішінде жеткізу. <br />

            Қазақстанның кез келген өңіріне жеткізу – курьермен 2-14 күн ішінде.
          </span>
          <br />
          <button
            @click="isHidden2 = !isHidden2"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">Қала бойынша жеткізу мерзімі қандай?</h1>
          <span v-if="isHidden3">
            Қала ішінде біз 1-2 сағат ішінде жеткіземіз. Жеткізу уақытына сағат
            17.30 - дан 20.00-ге дейін және ауа-райының қолайсыздығы әсер етуі
            мүмкін. <br />

            Егер сізге шұғыл қажет болса, сіз қосымша ақыға жедел жеткізуді
            рәсімдей аласыз — содан кейін курьер сіздің тапсырысыңызға сәттілік
            әкеледі және 1 сағат ішінде келеді.
          </span>
          <br />
          <button
            @click="isHidden3 = !isHidden3"
            type="button"
            class="text-[15px] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">Қала бойынша жеткізу мерзімі қандай?</h1>
          <span v-if="isHidden4">
            Қала ішінде біз 1-2 сағат ішінде жеткіземіз. Жеткізу уақытына сағат
            17.30 - дан 20.00-ге дейін және ауа-райының қолайсыздығы әсер етуі
            мүмкін. <br />

            Егер сізге шұғыл қажет болса, сіз қосымша ақыға жедел жеткізуді
            рәсімдей аласыз — содан кейін курьер сіздің тапсырысыңызға сәттілік
            әкеледі және 1 сағат ішінде келеді.
          </span>
          <br />
          <button
            @click="isHidden4 = !isHidden4"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">
            Қазақстан өңірлеріне жеткізу мерзімі қандай?
          </h1>
          <span v-if="isHidden5">
            Өңірлерде қызметтердің жеткізу мерзімі 2-ден 14 жұмыс күніне дейін.
            <br />

            Біз басқа қалаларға дәрігердің рецепті бойынша дәрі-дәрмектерді,
            сондай-ақ арнайы температураны сақтауды қажет ететін заттарды
            жібермейміз.
          </span>
          <br />
          <button
            @click="isHidden5 = !isHidden5"
            type="button"
            class="text-[15px] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
          </button>
        </div>
      </div>
      <div class="rounded-[25px] x bg-[#F8F8F8] w-[700px] p-[35px]">
        <div>
          <h1 class="text-[25px]">Курьермен жеткізуді қалай төлеуге болады?</h1>
          <span v-if="isHidden6">
            Алматы қаласы бойынша курьерлік жеткізіліммен тапсырыс беру кезінде
            сізге Visa/Mastercard, Kaspi банк картасының көмегімен 100% Онлайн
            алдын ала төлем жасау қажет. <br />

            Курьерлік қызметтердің Қазақстан өңірлеріне жеткізуіне тапсырыс
            берген кезде Visa/Mastercard немесе Kaspi банк карталарының
            көмегімен 100% Онлайн алдын ала төлем жүргізу қажет.
          </span>
          <br />
          <button
            @click="isHidden6 = !isHidden6"
            type="button"
            class="text-[15px] h-[] w-[200px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Көрсету / жасыру
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
