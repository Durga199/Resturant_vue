<template>
  <div>
    <Header />
    <img class="logo" src="../assets/Rlogo.png" />
    <h2>
      Welcome
      <h1>Mr./Mrs {{ name }}</h1>
    </h2>
    <table>
      <tr>
        <th>SL. NO</th>
        <th>Resturant Nmae</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in resturant" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <!-- <td><button><router-link  :to="'/Update/'+item.id" >Update</router-link></button></td> -->
        <td>
          <button
            class="upbutton"
            type="button"
            v-on:click="$router.push('/Update/' + item.id)"
          >
            EDIT
          </button>
          &emsp;
          <button class="delbutton" @click="toDelete(item.id)">DELETE</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      resturant: [],
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "signup" });
    }

    let result = await axios.get("http://localhost:3000/resturant");
    this.resturant = result.data;
  },
  methods: {
    async toDelete(id) {
      var del = confirm("Are you sure to Delete This Item ?");
      if (del == true) {
        await axios.delete("http://localhost:3000/resturant/" + id);
        window.location.reload();
      } else {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
<style>
td {
  width: 260px;
  height: 40px;
}
.upbutton {
  background-color: rgb(29, 14, 167);
  color: wheat;
  margin: 10px;
  padding: 4px;
}
.delbutton {
  background-color: rgb(184, 3, 12);
  color: white;
  padding: 4px;
}
th {
  background-color: rgb(211, 199, 199);
  height: 50px;
}
h1 {
  color: rgb(230, 20, 20);
}
table {
  border-collapse: collapse;
  border: 1px solid rgb(1, 0, 8);
}
tr:hover {
  background-color: rgb(120, 212, 0);
}
</style>