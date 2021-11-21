<template>
  <div class="navigation" :class="mode">
    <div class="navigation-container">
      <img
        :src="hamburgerIconPath"
        class="hamburger-icon"
        alt="logo"
        v-if="screen !== 'desktop'"
        @click="openNavigation"
      />
      <img :src="logoIconPath" class="logo-icon" alt="logo" />
      <Navbar v-if="screen === 'desktop'" />
      <img :src="cartIconPath" class="cart-icon" alt="cart" />
    </div>
  </div>
  <div
    class="backdrop"
    v-if="screen !== 'desktop' && showNavigation === true"
    @click="closeNavigation"
  ></div>
  <dialog open class="navigation-modal" v-if="screen !== 'desktop' && showNavigation === true">
    <SelectCategory class="select-category" @close-modal="closeNavigation" modal="modal" />
  </dialog>
</template>

<script>
import Navbar from '../Navbar.vue';
import SelectCategory from '@/components/SelectCategory.vue';
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
    SelectCategory,
  },
  data() {
    return {
      logoIconPath: '/assets/shared/desktop/logo.svg',
      cartIconPath: '/assets/shared/desktop/icon-cart.svg',
      hamburgerIconPath: '/assets/shared/tablet/icon-hamburger.svg',
      showNavigation: false,
    };
  },
  methods: {
    closeNavigation() {
      this.showNavigation = false;
    },
    openNavigation() {
      this.showNavigation = true;
    },
  },
};
</script>

<style scoped>
.navigation {
  background-color: var(--color-black);
  color: var(--color-white);
  height: 9.7rem;
  /* z-index: 30; */
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

.backdrop {
  position: fixed;
  top: 8.9rem;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  /* z-index: 10; */
}

.navigation-modal {
  top: 9rem;
  width: 100%;
  height: 34rem;
  z-index: 20;
  border: none;
  overflow: hidden;
  background-color: white;
}

.hamburger-icon {
  cursor: pointer;
}

.hamburger-icon:hover {
  cursor: pointer;
  filter: invert(71%) sepia(12%) saturate(5375%) hue-rotate(326deg) brightness(90%) contrast(86%);
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

  .select-category {
    margin-top: 5.5rem;
    margin-left: 3.9rem;
    gap: 2.5rem;
  }
}

@media (max-width: 39em) {
  .logo-icon {
    margin: 0;
  }

  .navigation-modal {
    height: 75rem;
  }

  .select-category {
    width: 90%;
    margin: 0 auto;
    margin-top: 2.5rem;
  }
}
</style>
