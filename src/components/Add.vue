<template>
  <div>
    <Header />
    <img class="logo" src="../assets/Rlogo.png" />
    <h2>ADD A NEW HOTEL / RESTAURANT </h2>
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
      <button  v-on:click="addResturant">ADD NEW RESTURANT</button>
    </form>
  </div>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'Add',
    components:{
        Header
    },
    data(){
       return{
           resturant:{
               name:'',
               address:'',
               contact:'',
           }
       } 
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if (!user)
        {
            this.$router.push({name:'signup'})
        }
    },
    methods:{
        async addResturant(){
            let result = await axios.post("http://localhost:3000/resturant",{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact
            })
            if (result.status == 201){
                alert("Welcome. You Added new Resturant successfully !")
            //    localStorage.setItem("user-info",JSON.stringify(result.data))
               this.$router.push({name:'Add'})
            }
    }
 }
}
</script>