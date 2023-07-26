<template>
    <CourseTaked />
</template>

<script>
import CourseTaked from '@/components/CourseTaked.vue';
export default {
    components:{
        CourseTaked,
    },
    mounted(){
        axios.get(`localhost:3000/api/CekBiasa?jwt=${localStorage.getItem('jwt')}`)
        .then((response)=>{
            console.log(response)
        })
        .catch(err=>{
            window.location = '/login'
        })
    }
}
</script>

<style>

</style>