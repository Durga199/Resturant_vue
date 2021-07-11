<template>
  <div class="nav">
    <router-link to="/Home">Home</router-link>
    <router-link to="/Add">Add Resturant</router-link>
    <!-- <router-link to="/Update">Update Resturant</router-link> -->
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.nav {
  background-color: rgb(196, 57, 32);
  overflow: hidden;
}
.nav a {
  float: left;
  color: white;
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
  margin-right: 4px;
}
body {
  padding: 0%;
  margin: 0;
}
.nav a:hover {
  background-color: whitesmoke;
  color: rgb(0, 6, 34);
}
</style>