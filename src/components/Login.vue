<template>
  <div class="h-[100vh]">
    <p>EMAIL</p>
    <input v-model="email" type="text" />
    <p>Pass</p>
    <input v-model="pass" type="text" />
    <button @click="register">Sign</button>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebas";

export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    async register() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.pass);
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
