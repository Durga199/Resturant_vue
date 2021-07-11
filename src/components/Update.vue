<template>
  <div>
    <Header />
    <img class="logo" src="../assets/Rlogo.png" />
    <h1>Update Resturant Details</h1>
    <form class="add">
      <input
        type="text"
        v-model="resturant.name"
        placeholder="Resturant Name"
        name="name"
      />
      <input
        type="text"
        v-model="resturant.address"
        placeholder="Address"
        name="address"
      />
      <input
        type="text"
        v-model="resturant.contact"
        placeholder="Contact Number"
        name="contact"
      />
      <button type="button" v-on:click="updateResturant">
        UPDATE RESTURANT
      </button>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Update",
  components: {
    Header,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "signup" });
    }
    const result = await axios.get(
      "http://localhost:3000/resturant/" + this.$route.params.id
    );
    this.resturant = result.data;
  },
  data() {
    return {
      resturant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateResturant() {
      let url = this.$route.params.id;
      var upd = confirm("Are you Sure For Change The details ?");
      if (upd == true) {
        let result = await axios.put(
          `http://localhost:3000/resturant/${url}/`,
          this.resturant
        );

        console.warn(result.data);
        this.$router.push({ name: "Home" });
      } else {
        this.$router.push({ name: "update" });
      }
    },
  },
};
</script>