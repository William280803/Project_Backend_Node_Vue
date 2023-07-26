<template>
    <div>
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div class="grid p-fluid">
                  <div class="col-12 md:col-4">
                      <div class="p-inputgroup">
                          <span class="p-inputgroup-addon">
                              <i class="pi pi-user"></i>
                          </span>
                          <InputText v-model="author" placeholder="Username" />
                      </div>
                  </div>
      
                  <div class="col-12 md:col-4">
                      <div class="p-inputgroup">
                          <span class="p-inputgroup-addon">Rp.</span>
                          <InputText v-model="harga" placeholder="Price" />
                          <span class="p-inputgroup-addon">.00</span>
                      </div>
                  </div>
      
                  <div class="col-12 md:col-4">
                      <div class="p-inputgroup">
                          <span class="p-inputgroup-addon">NC</span>
                          <InputText v-model="Course_Name" placeholder="Nama Course" />
                      </div>
                  </div>
      
                  <div class="col-12 md:col-4">
                      <div class="p-inputgroup">
                          <span class="p-inputgroup-addon">D</span>
                          <InputText v-model="Deskripsi" placeholder="Deskripsi" />
                      </div>
                  </div>
              </div>
              <div>
                <Button class="mr-3 p-button-raised" label="New Course" @click="TambahCourse()"/>
            </div>
        </div>
        <div>
            <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <DataTable :value="c_list">
                    <column field="course_id" header="ID Course"></column>
                    <column field="course_name" header="Course Name"></column>
                    <column field="author" header="Author"></column>
                    <column field="course_price" header="Price"></column>
                </DataTable>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-book"></i>
                    </span>
                    <InputText v-model="eord" placeholder="ID Course" />
                </div>
                <Button label="Edit" class="p-button-warning" @click="visibleFull = true"/>
                <Button label="Delete" class="p-button-danger" @click="D_Course" />
            </div>
        </div>
        <Sidebar v-model:visible="visibleFull" :baseZIndex="10000" position="right">
            <InputText placeholder="Course Name" v-model="course_name"/>
            <InputText placeholder="Author" v-model="author"/>
            <InputText placeholder="Price" v-model="price"/>
            <InputText placeholder="Details" v-model="course_detail"/>
            <br>
            <br>
            <Button label="Submit" @click="E_Course"/>
      </Sidebar>
    </div>
</template>

<script>
import axios from 'axios';
import Button from 'primevue/button';
import Column from 'primevue/column';
import Sidebar from 'primevue/sidebar';
import Course from '../components/Course.vue';
export default {
    data(){
        return{
            harga: "",
            Course_Name: "",
            author: "",
            Deskripsi:"",
            c_list:[],
            eord:"",
            visibleFull: false,
            course_name : "",
            author : "",
            price : "",
            course_detail : ""
        }
    },
    components:{
        Button,
        Column,
        Course,
        Sidebar
    },
    mounted(){
    axios.get(`http://localhost:3000/Tampil/Course?jwt=${localStorage.getItem('jwt')}`).then((res) => {
      this.c_list = res.data.data;
      console.log(res.data.data);
    })
    .catch( (err) => {
      window.location = "/login"
    });
    },
    methods:{
        TambahCourse(){
            axios.post('http://localhost:3000/api/AddCourse',{
                author: this.author,
                course_name : this.course_name,
                course_detail: this.Deskripsi,
                course_price: this.harga
            })
            .then(()=>{
                window.location = '/course'
            })
            console.log(this.harga)
        },
        E_Course(){
            axios.put(`http://localhost:3000/Api/Ganti/Course/${this.eord}?jwt=${localStorage.getItem('jwt')}`,{
                course_name : this.course_name,
                author : this.author,
                course_price : this.price,
                course_detail : this.detail
            })
            .then((res)=>{
                console.log(res)
            })
        },
        D_Course(){
            axios.delete(`http://localhost:3000/Api/Hapus/Course/${this.eord}?jwt=${localStorage.getItem('jwt')}`)
            .then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>