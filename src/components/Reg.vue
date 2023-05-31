<template>
  <div class="h-[100vh] container">
    <p>EMAIL</p>
    <input v-model="email" type="text" />
    <p>Pass</p>
    <input v-model="pass" type="text" />
    <p>fName</p>
    <input v-model="firstName" type="text" />
    <p>LastName</p>
    <input v-model="lastName" type="text" />
    <button @click="register">enster</button>
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
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.pass);
        await signInWithEmailAndPassword(auth, this.email, this.pass);
        this.currentUser = auth.currentUser;

        await setDoc(doc(db, "userProfile", this.currentUser.uid), {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        });
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
