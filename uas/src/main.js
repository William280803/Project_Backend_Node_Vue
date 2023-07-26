import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import "/node_modules/primeflex/primeflex.css"
import Menubar from 'primevue/menubar';
import TabPanel from 'primevue/tabpanel';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext';
import Card from 'primevue/card'
import Accordion from 'primevue/accordion'
import Calendar from 'primevue/calendar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import Chip from 'primevue/chip'
import Panel from 'primevue/panel'
import VirtualScroller from 'primevue/virtualscroller';
import Fieldset from 'primevue/fieldset';
import Sidebar from 'primevue/sidebar'
import '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AccordionTab from "primevue/accordiontab";
import ScrollPanel from 'primevue/scrollpanel'
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons

createApp(App)
.use(router)
.use(PrimeVue, {ripple:true})
.component("Column",Column)
.component('dayGridPlugin',dayGridPlugin)
.component('timeGridPlugin',timeGridPlugin)
.component('AccordionTab',AccordionTab)
.component('interactionPlugin',interactionPlugin)
.component("ColumnGroup",ColumnGroup)
.component("Fieldser",Fieldset)
.component("Sidebar",Sidebar)
.component("VisualScroller",VirtualScroller)
.component("Panel",Panel)
.component("Row",Row)
.component("Menubar",Menubar)
.component("Chip",Chip)
.component("DataTable",DataTable)
.component("Accordion", Accordion)
.component("ScrollPanel",ScrollPanel)
.component("Burron",Button)
.component("TabPanel",TabPanel)
.component("Checkbox",Checkbox)
.component("Calendar",Calendar)
.component("Card",Card)
.component("InputText",InputText)
.mount('#app')
