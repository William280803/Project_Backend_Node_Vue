<template>
  <div class="centers">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cc.logo.white.svg/2096px-Cc.logo.white.svg.png"
          alt="Image"
          height="50"
          class="mb-3"
        />
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3"
          >Don't have an account?</span
        >
        <a :href="'/Register'" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >Create today!</a
        >
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2"
          >Email</label
        >
        <InputText id="email1" type="text" class="w-full mb-3" v-model="Email"/>

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText id="password1" type="password" class="w-full mb-3" v-model="Password"/>

        <div class="flex align-items-center justify-content-between mb-6">
          <a
            class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
            >Forgot password?</a
          >
        </div>
      </div>

      <Button label="Sign In" icon="pi pi-user" class="w-full" @click="login()"></Button>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import axios from "axios"
export default {
  components: {
    Button,
    Checkbox
  },
  data(){
    return{
      Email : "",
      Password : ""
    }
  },
  methods:{
    login(){
      axios.post("http://localhost:3000/api/login",{
        Email: this.Email,
        password: this.Password
      })
      .then((response)=>{
        const jwt = response.data
        localStorage.setItem("jwt",jwt)
        console.log(jwt)
        window.location= "/"
      })
      .catch ((err)=>{
        console.log(err)
      })
      console.log(this.Email)
      console.log(this.Password)
    }
  }
};
</script>

<style>
.centers {
  display: flex;
  justify-content: center;
  margin-top: 5%;
}
</style>
