<template>
    
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            data : null
        }
    },
    methods:{
        tampilid(data){
            console.log(data)
        }
    },
    mounted(){
        axios.get('http://localhost:3000/tampil')
        .then((res)=>[
            this.data = res.data
        ])
    }
}
</script>

<style>

</style>