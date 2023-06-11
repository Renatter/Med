<template>
  <div class="flex justify-center items-center">
    <div class="container">
      <h1 class="text-[30px]">{{ $t("offer.title") }}</h1>
      <div
        class="border-[2px] w-[700px] text-[20px] p-[25px] rounded-[25px] mt-[25px]"
      >
        <div v-if="userInfo === false">
          <div class="flex">
            <div>
              <p>{{ $t("offer.name") }}</p>
              <p>{{ user.lastName }} {{ user.firstName }}</p>
            </div>
          </div>
          <div class="flex">
            <input
              v-model="number"
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[300px]"
            />
            <input
              :placeholder="user.email"
              type="text"
              id="first_name"
              class="ml-[25px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[300px] cursor-not-allowed"
              disabled
            />
          </div>
          <p class="text-[15px] pt-[5px] text-[#9BA3B3]">
            Т{{ $t("offer.text") }}
          </p>
          <button
            @click="userInfo = true"
            type="button"
            class="ml-[430px] mt-[20px] h-[50px] w-[200px] text-[20px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {{ $t("offer.next") }}
          </button>
        </div>
        <div v-else class="">
          <div class="flex items-end">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4225/4225683.png"
              class="w-[50px]"
            />
            <div class="ml-[15px] text-[#B7BDC7]">
              <p class="text-black font-bold">{{ $t("offer.Infouser") }}</p>
              <p>
                {{ user.firstName }} {{ user.lastName }} {{ number }}
                {{ user.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-[2px] w-[700px] text-[20px] p-[25px] rounded-[25px] mt-[25px]"
      >
        <div v-if="userInfo === true && cityInfo == false">
          <p class="text-[30px]">{{ $t("offer.take") }}</p>
          <div class="flex">
            <div>
              <p>{{ $t("offer.city") }}</p>
              <select
                v-model="city"
                id="countries"
                class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-[20px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Қала</option>
                <option value="Орал">Орал</option>
                <option value="Атырау">Атырау</option>
                <option value="Астана">Астана</option>
                <option value="Костанай">Костанай</option>
              </select>
            </div>
            <div class="ml-[15px]">
              <p>Почтовый индекс</p>
              <input
                v-model="index"
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[300px]"
              />
            </div>
          </div>

          <div
            class="border-[1px] rounded-[15px] mt-[20px] border-[#4A94F5] p-[15px]"
          >
            <div class="flex justify-between font-bold">
              <p>{{ $t("offer.dev") }}</p>
              <p class="text-[#2E91FF] text-[17px]">2500 тг</p>
            </div>
            <p class="text-[18px]">
              {{ $t("offer.devtext") }}
            </p>
          </div>

          <div class="flex justify-between">
            <button
              @click="cityInfo = true"
              type="button"
              class="mt-[20px] h-[50px] w-[200px] text-[20px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {{ $t("offer.next") }}
            </button>
          </div>
        </div>
        <div v-if="cityInfo === true">
          <div class="flex items-end">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4225/4225683.png"
              class="w-[50px]"
            />
            <div class="ml-[15px] text-[#B7BDC7]">
              <p class="text-black font-bold">{{ $t("offer.take") }}</p>
              {{ $t("offer.Sposb") }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-[2px] w-[700px] text-[20px] p-[25px] rounded-[25px] mt-[25px]"
      >
        <div v-if="cityInfo === true && adresInfo == false">
          <p>{{ $t("offer.adress") }}</p>
          <div class="flex">
            <div>
              <p>{{ $t("offer.koshe") }}</p>
              <input
                v-model="ulica"
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[300px]"
              />
            </div>
            <div>
              <p>{{ $t("offer.home") }}</p>
              <input
                v-model="home"
                type="text"
                id="first_name"
                class="ml-[15px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[150px]"
              />
            </div>
            <div>
              <p>{{ $t("offer.room") }}</p>
              <input
                v-model="room"
                type="text"
                id="first_name"
                class="ml-[15px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[150px]"
              />
            </div>
          </div>
          <p class="pt-[5px]">Комментарии</p>
          <textarea
            v-model="comment"
            class="border-[1px] rounded-[15px] mt-[15px]"
            name=""
            id=""
            cols="60"
            rows="3"
          ></textarea>
          <div class="flex justify-between">
            <button
              @click="adresInfo = true"
              type="button"
              class="mt-[20px] h-[50px] w-[200px] text-[20px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {{ $t("offer.next") }}
            </button>
          </div>
        </div>
        <div v-if="adresInfo === true">
          <div class="flex items-end">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4225/4225683.png"
              class="w-[50px]"
            />
            <div class="ml-[15px] text-[#B7BDC7]">
              <p class="text-black font-bold">{{ $t("offer.adress") }}</p>
              {{ $t("offer.city") }} {{ city }} ул-{{ ulica }}
              {{ $t("offer.home") }} {{ home }} {{ $t("offer.room") }}
              {{ room }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-[2px] w-[350px] text-[20px] p-[25px] rounded-[25px] mt-[25px]"
      >
        <div class="">
          <p class="text-[35px]">{{ $t("offer.spend") }}</p>
          <router-link to="/Basket">
            <button
              @click="addOffer"
              type="button"
              class="mt-[20px] h-[50px] w-[200px] text-[20px] text-white bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {{ $t("offer.enter") }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase/firebas";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
export default {
  data() {
    return {
      user: null,
      number: "",
      userInfo: false,
      index: "",
      city: "",
      cityInfo: false,
      ulica: "",
      home: "",
      room: "",
      comment: "",
      adresInfo: "",
      currentUser: null,
    };
  },
  methods: {
    async addOffer() {
      const washingtonRef = doc(db, "offer", this.currentUser.uid);

      const dataToUpdate = {
        lastName: this.user.lastName,
        firstName: this.user.firstName,
        pochtaIndex: this.index,
        city: this.city,
        home: this.home,
        room: this.room,
        ulica: this.ulica,
        number: this.number,
        comment: this.comment,
        uid: this.currentUser.uid,
      };

      await updateDoc(washingtonRef, dataToUpdate);
    },
  },

  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        const docRef = doc(db, "userProfile", user.uid);
        onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.user = docSnap.data();
          } else {
            console.log("No such document!");
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: bold;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
