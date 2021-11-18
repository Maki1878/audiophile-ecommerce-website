<template>
  <!-- <Header /> -->
  <router-view />
  <Footer />
</template>

<script>
import Footer from '@/components/layout/Footer.vue';
export default {
  components: {
    Footer,
  },
};
</script>

<style></style>
