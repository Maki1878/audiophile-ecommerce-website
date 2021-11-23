<template>
  <!-- <Header /> -->
  <router-view />
  <Footer />
</template>

<script>
import Footer from '@/components/layout/Footer.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    Footer,
  },
  methods: {
    ...mapActions(['getCartItems']),
  },
  created() {
    this.getCartItems;
  },
};
</script>

<style></style>
