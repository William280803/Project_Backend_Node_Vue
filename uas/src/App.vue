<template>
  <div>
    <div>
      <Menubar :model="items">
        <template #start>
          <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cc.logo.white.svg/2096px-Cc.logo.white.svg.png"
            height="40"
            class="mr-2"
          />
        </template>
        <template #end class="mx-2">
          <h3 class="text-900">{{ nama }}</h3>
        </template>
      </Menubar>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HomeView from "@/views/HomeView.vue";
import Button from "primevue/button";
import "primeicons/primeicons.css";
export default {
  components: {
    HomeView,
    Button
  },
  mounted(){
    axios.post(`http://localhost:3000/API/CekBiasa?jwt=${localStorage.getItem('jwt')}`)
    .then((res)=>{
      axios.post(`http://localhost:3000/API/CekNama/${res.data.id}`)
      .then((res)=>{
        this.nama = res.data.username
      })
    })
    .catch(()=>{
      this.nama = 'guest'
    })
  },
  data() {
    return {
      nama : null,
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
          to: "/",
        },
        {
          label: "Account",
          icon: "pi pi-users",
          items: [
            {
              label: "Profile",
              icon: "pi pi-user",
              to: "/Profile"
            },
            {
              label: "Dashboard",
              icon: "pi pi-id-card",
              to: "/Dashboard"
            },
            {
              label: "login",
              icon: "pi pi-sign-in",
              to: "/login",
            },
          ],
        },
        {
          label: "Course",
          icon: "pi pi-book",
          to: "/Course"
        },
        {
          label: "Event",
          icon: "pi pi-gift",
          to: "/Event"
        },
        {
          label: "Add Course (Admin Only)",
          icon: "pi pi-fw pi-power-off",
          to: "/AddCourse"
        },
      ],
    };
  },
  methods:{
    removeToken(){
      localStorage.removeItem("jwt")
      window.location = "/login"
    }
  }
};
</script>