<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div
      class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
    >
      <section>
        <span class="block text-6xl font-bold mb-1"
          >Learn Skill To Make Better Word</span
        >
        <div class="text-6xl text-primary font-bold mb-3">
          Crwoy Course
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3">
            Web course berbayar biasanya menawarkan materi yang lebih lengkap dan lebih terstruktur, serta dilengkapi dengan fasilitas seperti forum pertanyaan, konsultasi dengan instruktur, dan sertifikat kelulusan. Web course gratis biasanya tidak menawarkan fasilitas yang sama, tetapi masih bisa memberikan pengetahuan yang bermanfaat bagi peserta.
        </p>

        <Button
          label="Learn Now"
          type="button"
          class="mr-3 p-button-raised"
        ></Button>
        <Button
          label="Features"
          type="button"
          class="p-button-outlined"
        ></Button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img
        src="https://www.primefaces.org/primeblocks-vue/images/blocks/hero/hero-1.png"
        alt="Image"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button"
export default {
    components:{
        Button
    }
};
</script>

<style>

</style>
