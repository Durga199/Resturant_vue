<template>
  <div>
    <img class="logo" src="../assets/Rlogo.png" />
    <h2>Sign up</h2>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="signUp">Sign Up</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/rusers", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("Welcome. You Registered successfully !");
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>
<style>
</style>