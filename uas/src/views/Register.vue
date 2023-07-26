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
          <div class="text-900 text-3xl font-medium mb-3">Register</div>
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
          <label for="password1" class="block text-900 font-medium mb-2"
            >Username</label
          >
          <InputText id="username1" type="text" class="w-full mb-3" v-model="username"/>
          <label for="password1" class="block text-900 font-medium mb-2"
            >Nomor HP</label
          >
          <InputText id="NoHP1" type="number" class="w-full mb-3" v-model="NoHP1"/>
  
          <div class="flex align-items-center justify-content-between mb-6">
          </div>
        </div>
  
        <Button label="Sign In" icon="pi pi-user" class="w-full" @click="register()"></Button>
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
        Password : "",
        username : "",
        NoHP1 : ""
      }
    },
    methods:{
        register(){
            axios.post('http://localhost:3000/api/register',{
                NoHP:this.NoHP1,
                Email:this.Email,
                username:this.username,
                password:this.Password
            })
            .then((result)=>{
                window.location = "/login"
            })
            .catch((err)=>{
                console.log(err)
            })
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