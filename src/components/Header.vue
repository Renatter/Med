<template>
  <div>
    <div class="header_top bg-[#F8F8F8] h-[40px]">
      <div class="container">
        <nav class="flex justify-between items-center">
          <ul class="flex items-center">
            <router-link to="/AllNews">
              <li
                class="ml-[20px] bg-[#00CB8E] text-white p-[5px] rounded-[5px] font-bold"
              >
                Денсаулық туралы пайдалы
              </li>
            </router-link>
            <router-link to="/Delivery">
              <li class="ml-[20px]">Жеткізу және төлеу</li>
            </router-link>

            <router-link to="/Questions">
              <li class="ml-[20px]">Жиі сұрақтар</li>
            </router-link>
            <router-link to="/AddOtzv">
              <li class="ml-[20px]">Пікір қалдыру</li>
            </router-link>
            <router-link to="/Contacts">
              <li class="ml-[20px]">Байланыс</li></router-link
            >
          </ul>
          <div>+7 771 112 09 57 телефон және WhatsApp</div>
        </nav>
        <div class="bottom-header pt-[10px]">
          <nav class="flex items-start justify-evenly pt-[15px]">
            <router-link to="/">
              <img src="../assets/logo.png" class="w-[50px]" alt="" />
            </router-link>
            <div>
              <button
                id="dropdownDefaultButton"
                @click="toggleDropdown"
                class="text-white w-[150px] bg-[#2E91FF] hover:bg-[#2E91FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Каталог
                <svg
                  class="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                v-if="isDropdownOpen"
                id="dropdown"
                class="dropdown-container z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <router-link :to="{ path: '/Catlog/' + 'Hygiene' }">
                      <a
                        @click="isDropdownOpen = false"
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Гигиена</a
                      >
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/Catlog/' + 'MaB' }">
                      <a
                        @click="isDropdownOpen = false"
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Ана амен бала</a
                      >
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ path: '/Catlog/' + 'Cosmetics' }">
                      <a
                        @click="isDropdownOpen = false"
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Косметика</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/Catlog/' + 'Medicines' }">
                      <a
                        @click="isDropdownOpen = false"
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Дәрі-дәрмектер</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/Catlog/' + 'IaP' }">
                      <a
                        @click="isDropdownOpen = false"
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Аспаптар мен бұйымдар</a
                      >
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>

            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[700px] pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-[#2E91FF] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
            <div v-if="isAuthenticated" class="flex">
              <router-link v-if="isAdmin === true" to="/AdminCard">
                <button
                  type="button"
                  class="font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Админ
                </button>
              </router-link>
              <router-link v-else to="/Basket">
                <button
                  type="button"
                  class="font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Cебет
                </button>
              </router-link>
              <button
                type="button"
                @click="logout"
                class="font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Шығу
              </button>
            </div>
            <div v-else>
              <router-link to="/Login">
                <button
                  type="button"
                  class="font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Кіру
                </button>
              </router-link>
              <router-link to="/Reg">
                <button
                  type="button"
                  class="font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Тіркеу
                </button>
              </router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase/firebas";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
export default {
  data() {
    return {
      isDropdownOpen: false,
      isAuthenticated: false,
      isAdmin: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      auth.signOut();
      this.$router.push("/");
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const docRef = doc(db, "users", user.uid);
        onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.itemsLength = docSnap.data().cart.length;

            console.log(this.itemsLength);
          } else {
            console.log("No such document!");
          }
        });
        const likeRef = doc(db, "userProfile", user.uid);
        onSnapshot(likeRef, (docSnap) => {
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const userData = docSnap.data();
            console.log(userData);

            this.isAdmin = userData.role === "admin";
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
.dropdown-container {
  position: absolute;
  z-index: 9999;
}
</style>
