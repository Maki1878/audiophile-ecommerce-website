<template>
  <div class="navigation" :class="mode">
    <div class="navigation-container">
      <img :src="hamburgerIconPath" class="hamburger-icon" alt="logo" v-if="screen !== 'desktop'" />
      <img :src="logoIconPath" class="logo-icon" alt="logo" />
      <Navbar v-if="screen === 'desktop'" />
      <img :src="cartIconPath" class="cart-icon" alt="cart" />
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar.vue';
import screenSize from '@/mixins/screenSize';
export default {
  mixins: [screenSize],
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
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
  height: 9.7rem;
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

.background {
  background-color: #141414;
}

@media (max-width: 52em) {
  .navigation {
    height: 9rem;
  }

  .navigation-container {
    width: 90%;
  }

  .logo-icon {
    margin-right: auto;
    margin-left: 4.2rem;
  }
}
</style>
