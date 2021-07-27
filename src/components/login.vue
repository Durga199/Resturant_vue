<template>
  <div>
    <img class="logo" src="../assets/Rlogo.png" />
    <h2>Login Here</h2>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button v-on:click="login">LOGIN</button><br /><br /><button
        @click="$router.push('/')"
      >
        Go to Home
      </button>
    </div>
  </div> 
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/rusers?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        alert("Welcome. You Logde in successfully !");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
</style>