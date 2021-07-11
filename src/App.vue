<template>
  <div>
    <router-view />
    <!-- <signup /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import signup from './components/signup.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
    // signup
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 120px;
  height: 130px;
}
.login input,
.add input,
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgb(11, 207, 44);
}
.login button,
.add button,
.register button {
  width: 325px;
  height: 40px;
  border: 1px solid rgb(12, 91, 97);
  color: white;
  background-color: rgb(9, 124, 28);
}
</style>
