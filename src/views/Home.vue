<template>
  <Header mode="background" />
  <div class="home-header">
    <div class="home-header-text">
      <p class="home-header-new-product">NEW PRODUCT</p>
      <h1 class="home-header-product-name">XX99 MARK II HEADPHONES</h1>
      <p class="home-header-product-description">
        Experience natural, lifelike audio and exceptional build quality made for the passionate
        music enthusiast.
      </p>
      <BaseButton
        class="see-product-button home-header-button"
        link
        :to="{
          name: 'Product',
          params: { category: 'speakers', productSlug: 'xx99-mark-two-headphones' },
        }"
        >SEE PRODUCT</BaseButton
      >
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
      <div class="home-product-two">
        <div class="home-product-two-text">
          <h4 class="home-product-two-heading">ZX7 SPEAKER</h4>
          <BaseButton
            mode="transparent"
            class="see-product-button"
            link
            :to="{
              name: 'Product',
              params: { category: 'speakers', productSlug: 'zx7-speaker' },
            }"
            >SEE PRODUCT</BaseButton
          >
        </div>
      </div>
      <div class="home-product-three">
        <img :src="earphonesImage" alt="earphones-image" class="home-product-three-image" />
        <div class="home-product-three-text">
          <div class="home-product-three-description">
            <h4 class="home-product-three-heading">YX1 EARPHONES</h4>
            <BaseButton
              mode="transparent"
              class="see-product-button"
              link
              :to="{
                name: 'Product',
                params: { category: 'speakers', productSlug: 'yx1-earphones' },
              }"
              >SEE PRODUCT</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
    <BestGear class="best-gear" />
  </div>
</template>

<script>
import SelectCategory from '@/components/SelectCategory.vue';
import BestGear from '@/components/BestGear.vue';
import Header from '@/components/layout/Header.vue';

export default {
  name: 'Home',
  components: {
    SelectCategory,
    BestGear,
    Header,
  },
  computed: {
    // ...mapGetters(['products']),
    // markTwoHeadphones() {
    //   return this.products.find((product) => product.id === 4);
    // },
    earphonesImage() {
      return '/assets/home/desktop/image-earphones-yx1.jpg';
    },
  },
};
</script>

<style scoped>
.home-header {
  background-image: url('/assets/home/desktop/image-hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 63.2rem;
  background-position-y: 100%;
  background-color: #0e0e0e;
}

.home-header-text {
  color: var(--color-white);
  margin-left: 16.5rem;
  margin-top: 12.8rem;
  display: inline-block;
  width: 39.8rem;
}

.home-header-new-product {
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 1rem;
  color: var(--color-white);
  opacity: 0.49;
  font-weight: var(--font-regular);
  margin-bottom: 1.6rem;
}

.home-header-product-name {
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
}

.home-header-product-description {
  opacity: 75%;
  width: 34.9rem;
}

.home-header-button {
  padding-top: 1rem;
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
  border-radius: 8px;
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

.home-product-two {
  height: 32rem;
  background-image: url('/assets/home/desktop/image-speaker-zx7.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;
  border-radius: 8px;
}

.home-product-two-text {
  height: 11.8rem;
  width: 20.4rem;
  margin-left: 9.5rem;
  margin-top: 10.1rem;
  display: inline-block;
  margin-bottom: -1rem;
}

.home-product-three {
  height: 32rem;
  display: flex;
  gap: 3rem;
}

.home-product-three-text {
  background-color: #f1f1f1;
  height: 32rem;
  width: 54rem;
  border-radius: 8px;
}

.home-product-three-image {
  border-radius: 8px;
}

.home-product-three-description {
  height: 11.8rem;
  width: 20.4rem;
  margin-left: 9.5rem;
  margin-top: 10.1rem;
  display: inline-block;
  margin-bottom: -1rem;
}
</style>
