<template>
  <div class="navigation">
    <div class="navigation-container">
      <img
        :src="hamburgerIconPath"
        class="hamburger-icon"
        alt="logo"
        v-if="screenSize !== 'desktop'"
      />
      <img :src="logoIconPath" class="logo-icon" alt="logo" />
      <Navbar v-if="screenSize === 'desktop'" />
      <img :src="cartIconPath" class="cart-icon" alt="cart" />
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      logoIconPath: '/assets/shared/desktop/logo.svg',
      cartIconPath: '/assets/shared/desktop/icon-cart.svg',
      hamburgerIconPath: '/assets/shared/tablet/icon-hamburger.svg',
      screenSize: 'desktop',
    };
  },
};
</script>

<style scoped>
.navigation {
  background-color: var(--color-black);
  color: var(--color-white);
  height: 97px;
}

.navigation-container {
  width: 77%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
