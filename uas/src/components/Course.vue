<template>
  <div class="">
    <div class="mtb-4">
      <div class="col-12 md:col-4">
        <div class="p-inputgroup">
          <InputText v-model="cari" placeholder="Keyword" />
        </div>
      </div>
      <div>
          <div class="grid center">
            <div v-for="i in filtercourse" :key="i.course_name" class="card-container blue-container mx-2 flex align-items-center justify-content-start">
              <Card style="width: 25em">
                <template #header>
                  <img
                    src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png"
                    style="height: 15rem"
                  />
                </template>
                <template #title>
                  {{ i.course_name }}
                </template>
                <template #subtitle>
                  {{ i.course_price }}
                  <ScrollPanel style="width: 100%; height: 80px" class="custombar2">
                    <p>
                      {{ i.course_detail }}
                    </p>
                  </ScrollPanel>
                </template>
                <template #footer>
                  <Button class="mr-3 p-button-raised" label="Enrol" @click="enrol(i.course_id)" />
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
export default {
  components: {
    Button,
    InputText

  },
  data() {
    return {
      data: [],
      cari: ''
    };
  },
  mounted() {
    axios.get(`http://localhost:3000/Tampil/Course?jwt=${localStorage.getItem('jwt')}`).then((res) => {
      this.data = res.data.data;
      console.log(res.data);
    })
    .catch( (err) => {
      window.location = "/login"
    });
  },
  computed:{
    filtercourse(){
      return this.data.filter((course)=>{
        return course.course_name.toLowerCase().match(this.cari.toLowerCase())
      })
    }
  },
  methods:{
    enrol(id){
      window.location = '/CourseFull?course='+id
    }
  }
};
</script>

<style>
.mtb4 {
  margin: 10px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.mx-2{
  margin: 10px;
}
</style>
