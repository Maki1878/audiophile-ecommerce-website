<template>
  <div class="navigation">
    <div class="logo" v-if="logoIconPath">
      <img :src="logoIconPath" class="logo-icon" alt="logo" />
    </div>
    <div class="navigation-links">
      <router-link to="/">HOME</router-link>
      <router-link to="/headphones">HEADPHONES</router-link>
      <router-link to="/speakers">SPEAKERS</router-link>
      <router-link to="/earphones">EARPHONES</router-link>
    </div>
    <div class="cart">
      <img :src="cartIconPath" class="cart-icon" alt="cart" />
    </div>
  </div>
</template>

<script>
export default {
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
.navigation-links {
  display: flex;
  gap: 3rem;
}
a {
  color: var(--color-white);
  text-decoration: none;
}
</style>
