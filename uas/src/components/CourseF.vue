
<template>
    <div>
        
        <div class="surface-section"  v-for="i in this.course" :key="i.course_id">
            <div class="font-medium text-3xl text-900 mb-3">Course Information</div>
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                    <div class="text-500 w-6 md:w-2 font-medium">Course Name</div>
                    <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ i.course_name }}</div>

                </li>
                <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                    <div class="text-500 w-6 md:w-2 font-medium">Author</div>
                    <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ i.author }}</div>

                </li>
                <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                    <div class="text-500 w-6 md:w-2 font-medium">Description</div>
                    <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ i.course_detail }}</div>

                </li>
                <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                    <div class="text-500 w-6 md:w-2 font-medium">Price</div>
                    <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                        {{ i.course_price }}
                    </div>
                </li>
            </ul>
            <br>
            <Button label="Take Course" @click="Buyed(i.course_id)" />
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button'
import axios from 'axios'
export default {
    components:{
        Button,
    },
    data(){
        return{
            course : [],
            user : null,
        }
    },
    methods:{
        Buyed(id){
            axios.post(`http://localhost:3000/api/TakedCourse?jwt=${localStorage.getItem('jwt')}`,{
                user_id: this.user,
                course_id: id
            })
            .then((res)=>{
                console.log(res)
            })
        }
    },
    mounted(){
        const que1 = this.$route.query.course
        axios.get(`http://localhost:3000/Tampil/Course/${que1}?jwt=${localStorage.getItem('jwt')}`)
        .then((res)=>{
            this.course = res.data.data
            this.user = res.data.info.id
        })
        .catch(()=>{
            window.location = '/login'
        })
        
       
    }
}
</script>

<style>

</style>