<template>
  <div class="navigation">
    <div class="logo" v-if="logoIconPath">
      <img :src="logoIconPath" class="logo-icon" alt="logo" />
    </div>
    <Navbar />
    <div class="cart">
      <img :src="cartIconPath" class="cart-icon" alt="cart" />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      logoIconPath: '/assets/shared/desktop/logo.svg',
      cartIconPath: '/assets/shared/desktop/icon-cart.svg',
    };
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  color: var(--color-white);
}
</style>
