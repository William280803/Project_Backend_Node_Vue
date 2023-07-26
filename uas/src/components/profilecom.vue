<template>
  <div>
    <Accordion>
    <AccordionTab>
      <template #header>
        <i class="pi pi-user"></i>
        <span>User</span>
      </template>
      <div v-for="i in this.user_info" :key="i.user_id">
        <span>Username : {{ i.username }}</span><br>
        <span>Email    : {{ i.Email }}</span><br>
        <span>Account Created  : {{ i.createdAt }}</span><br>
        <span>No Hp : {{ i.NoHP }}</span>
      </div>
    </AccordionTab>
    <AccordionTab>
      <template #header>
        <i class="pi pi-cog"></i>
        <span>Edit Profile</span>
      </template>
      <Accordion>
    <AccordionTab header="Edit Username">
      <Button label="Edit Username" @click="visibleFull1 = true"  />
    </AccordionTab>
    <AccordionTab header="Edit Email">
      <Button label="Edit Email" @click="visibleFull2 = true"/>
    </AccordionTab>
    <AccordionTab header="Edit NoHP">
      <Button label="Edit NoHP" @click="visibleFull3 = true"/>
    </AccordionTab>
  </Accordion>
    </AccordionTab>
    <AccordionTab>
      <template #header>
        <i class="pi pi-chart-line"></i>
        <span>Analyic</span>
      </template>
      Content
    </AccordionTab>
  </Accordion>
      <Sidebar v-model:visible="visibleFull1" :baseZIndex="10000" position="right">
        <div class="p-inputgroup">
          <Button label="Input" @click="e_name" />
          <InputText placeholder="Keyword" v-model="i_name"/>
        </div>
      </Sidebar>
      <Sidebar v-model:visible="visibleFull2" :baseZIndex="10000" position="right">
        <div class="p-inputgroup">
          <Button label="Input" @click="e_Email"/>
          <InputText placeholder="Keyword" v-model="i_email"/>
        </div>
      </Sidebar>
      <Sidebar v-model:visible="visibleFull3" :baseZIndex="10000" position="right">
        <div class="p-inputgroup">
          <Button label="Input" @click="e_NoHP"/>
          <InputText placeholder="Keyword" v-model="i_NoHP"/>
        </div>
      </Sidebar>
  </div>

</template>

<script>
import axios from "axios"
import AccordionTab from "primevue/accordiontab"
import Button from "primevue/button";
export default {
  components:{
    AccordionTab,
    Button
  },
  methods:{
    e_Email(){
      axios.post(`http://localhost:3000/api/cekbiasa?jwt=${localStorage.getItem("jwt")}`).then((res) => {
        axios.put(`http://localhost:3000/api/ganti/email/${res.data.id}/${this.i_email}?jwt=${localStorage.getItem("jwt")}`)
        .then((results)=>{
          console.log(results)
        })
      })
    },
    e_NoHP(){
      axios.post(`http://localhost:3000/api/cekbiasa?jwt=${localStorage.getItem("jwt")}`).then((res) => {
        axios.put(`http://localhost:3000/api/ganti/nohp/${res.data.id}/${this.i_NoHP}?jwt=${localStorage.getItem("jwt")}`)
        .then((results)=>{
          console.log(results)
        })
      })
    },
    e_name(){
      axios.post(`http://localhost:3000/api/cekbiasa?jwt=${localStorage.getItem("jwt")}`).then((res) => {
        axios.put(`http://localhost:3000/api/ganti/nama/${res.data.id}/${this.i_name}?jwt=${localStorage.getItem("jwt")}`)
        .then((results)=>{
          console.log(results)
        })
        // console.log(res.data.id)
      })

    }
  },
  data(){
    return{
      user_info : null,
      visibleFull1: false,
      visibleFull2: false,
      visibleFull3: false,
      i_name : '',
      i_email: '',
      i_NoHP: ''
    }
  },
  mounted(){
    axios.post(`http://localhost:3000/api/cekbiasa?jwt=${localStorage.getItem("jwt")}`).then((res) => {
      axios.get(`http://localhost:3000/tampil/user/${res.data.id}?jwt=${localStorage.getItem("jwt")}`)
      .then((res1)=>{
        this.user_info = res1.data

      })
      this.data = res.data.data;
    })
    .catch((err)=>{
      window.location = '/login'
    });
  },
  method:{

  }
}
</script>

<style>

</style>