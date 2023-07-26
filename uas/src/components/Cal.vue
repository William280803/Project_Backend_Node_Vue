<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        width: 300,
        height:700,
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        events: []
      }
    }
  },
  mounted(){
    axios.get(`http://localhost:3000/Tampil/Event?jwt=${localStorage.getItem('jwt')}`)
    .then((res)=>{
      this.calendarOptions.events = res.data.data
    })
    .catch(()=>{
      window.location = '/login'
    })
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>