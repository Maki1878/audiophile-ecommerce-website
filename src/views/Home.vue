<template>
  <div class="home-header">
    <div class="home-header-section">
      {{ markTwoHeadphones.name }}
    </div>
  </div>
  <div class="home-main">
    <SelectCategory />
    <div class="home-products">
      <div class="home-product-one">
        <div class="home-product-one-image"></div>
        <div class="home-product-one-text">
          <h1 class="home-product-one-heading">ZX9 SPEAKER</h1>
          <p class="home-product-one-description">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </p>
          <BaseButton
            mode="black"
            class="see-product-button"
            link
            :to="{
              name: 'Product',
              params: { category: 'speakers', productSlug: 'zx9-speaker' },
            }"
            >SEE PRODUCT</BaseButton
          >
        </div>
      </div>
    </div>
    <BestGear class="best-gear" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SelectCategory from '@/components/SelectCategory.vue';
import BestGear from '@/components/BestGear.vue';

export default {
  name: 'Home',
  components: {
    SelectCategory,
    BestGear,
  },
  computed: {
    ...mapGetters(['products']),
    markTwoHeadphones() {
      return this.products.find((product) => product.id === 4);
    },
    markTwoHeadphonesImage() {
      return '/assets/home/desktop/image-hero.jpg';
    },
  },
};
</script>

<style scoped>
.home-header {
  /* background-image: url('/assets/home/desktop/image-hero.jpg'); */
  background-image: linear-gradient(rgba(0, 0, 0, 0.747), rgba(0, 0, 0, 0.719)),
    url('/assets/home/desktop/image-hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 63.2rem;
  background-position-y: 100%;
  background-color: #0e0e0e;
  /* background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); */
}

.home-header-section {
  color: var(--color-white);
  margin-left: 16.5rem;
}

.home-main {
  width: 77%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 9.6rem;
  margin-top: 14rem;
}

.best-gear {
  margin-bottom: 9.6rem;
}

.home-product-one {
  height: 56rem;
  background-color: var(--color-orange-dark);
  display: flex;
  gap: 13.8rem;
}

.home-product-one-image {
  background-image: url('/assets/home/desktop/image-speaker-zx9.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 49.3rem;
  width: 41rem;
  align-self: flex-end;
  margin-bottom: -0.3rem;
  margin-left: 11.74rem;
}

.home-product-one-text {
  height: 30.3rem;
  width: 34.9rem;
  align-self: center;
}

.home-product-one-heading {
  color: var(--color-white);
}

.home-product-one-description {
  color: var(--color-white);
  opacity: 0.75;
  height: 7.5rem;
  margin-top: 2.4rem;
}

.see-product-button {
  margin-top: 5rem;
}
</style>
