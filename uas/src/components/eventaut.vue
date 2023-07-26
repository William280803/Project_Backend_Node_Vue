<template>
    <div>
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <h3>Event Update</h3>
            <InputText placeholder="Nama Event" v-model="titles"/>
            <Calendar inputId="icon" v-model="date1" :showIcon="true" dateFormat="yy-mm-dd" placeholder="Event Start"/>
            <Calendar inputId="icon" v-model="date2" :showIcon="true" dateFormat="yy-mm-dd" placeholder="Event End"/>
            <br>
            <br>
            <Button label="Update" @click="uptgl" />
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import axios from 'axios';
export default {
    components:{
        Button
    },
    created() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    },
    data() {
        return {
            date1: '',
            date2: '',
            titles: '',
            invalidDates: null,
            responsiveOptions: [
                {
					breakpoint: '1400px',
					numMonths: 2
				},
				{
					breakpoint: '1200px',
					numMonths: 1
				}
			]
        }
    },
    methods:{
        uptgl(){
            axios.post(`http://localhost:3000/Api/Tambah/Event?jwt=${localStorage.getItem('jwt')}`,{
                title: this.titles,
                start: this.date1,
                end: this.date2
            })
            .then((res) => {
                console.log(res)
            })
        },
    }
}
</script>

<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>