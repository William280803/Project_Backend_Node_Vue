<template>
  <div>
    <DataTable :value="data">
      <Column field="author" header="Author"></Column>
      <Column field="course_name" header="Course"></Column>
      <Column field="take_id" header="ID"></Column>
    </DataTable>
  </div>
</template>

<script>
import axios from "axios";
import Column from "primevue/column";
export default {
  data() {
    return {
      data: [],
    };
  },
  components:{
    Column
  },
  mounted() {
    axios.post(`http://localhost:3000/api/cekbiasa?jwt=${localStorage.getItem("jwt")}`)
    .then((res1)=>{
      axios.get(`http://localhost:3000/tampil/take/${res1.data.id}?jwt=${localStorage.getItem("jwt")}`).then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      })
      .catch((err)=>{
        console.log(err)
        window.location = '/login'
      })
    })
    .catch((err)=>{
        console.log(err)
        window.location = '/login'
      })

  },
  methods:{
    tekan(id){
      console.log(id)
    }
  }
};
</script>

<style></style>
