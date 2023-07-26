<template>
  <div>
    <promo />
    <Feature />
    <Pricing />
    <Discord />
  </div>
</template>

<script>
import Home from "@/components/home.vue"
import Promo from '@/components/promo.vue'
import Feature from "@/components/feature.vue";
import Pricing from "@/components/pricing.vue";
import Discord from "@/components/discord.vue";
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    Home,
    Promo,
    Feature,
    Pricing,
    Discord
  },
}
</script>
