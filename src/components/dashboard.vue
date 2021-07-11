<template>
  <body class="bd">
    <div class="login dv1">
      <img class="logo" src="../assets/Rlogo.png" />
      <h1>WELCOME TO KING LIFE WEBSITE</h1>
      <h2>
        Here you can See the Loxurious Restaurants and Hotels Near to you.
      </h2>
      <br />
      <h3>If you are new , First Create an Account.</h3>
      <router-view />

      <button type="button" v-on:click="$router.push('/signup')">
        Create Account</button
      ><br /><br />
      <button type="button" v-on:click="$router.push('/login')">Login</button
      ><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </body>
</template>
<script>
export default {
  name: "dashboard",
};
</script>
<style>
.bd {
  background-image: url("../assets/back.jpg");
  background-size: cover;
  background-color: lawngreen;
}
</style>