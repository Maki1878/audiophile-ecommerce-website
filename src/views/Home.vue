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
    <SelectCategory modal="modal" />
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
import screenSize from '@/mixins/screenSize';

export default {
  name: 'Home',
  mixins: [screenSize],
  components: {
    SelectCategory,
    BestGear,
    Header,
  },
  computed: {
    earphonesImage() {
      return `/assets/home/${this.screen}/image-earphones-yx1.jpg`;
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

@media (max-width: 78em) {
  .home-header {
    background-image: url('/assets/home/desktop/image-hero.jpg');
    background-repeat: no-repeat;
    background-size: unset;
    height: 64rem;
    background-position-x: 90%;
    background-position-y: 100%;
    background-color: #0e0e0e;
  }

  .home-header-text {
    text-align: center;
  }

  .home-main {
    width: 90%;
    margin-top: 9.6rem;
  }

  .home-product-one {
    height: 68.9rem;
    flex-direction: column;
    gap: 6.4rem;
  }

  .home-product-one-image {
    background-image: url('/assets/home/tablet/image-speaker-zx9.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 21.7rem;
    width: 19.71rem;
    align-self: center;
    margin-bottom: -0.3rem;
    margin-top: 5.2rem;
    margin-right: 11rem;
  }

  .home-product-one-text {
    text-align: center;
  }

  .home-product-two {
    background-image: url('/assets/home/tablet/image-speaker-zx7.jpg');
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }

  .home-product-three {
    gap: 1.1rem;
  }
}

@media (max-width: 39em) {
  .home-header {
    text-align: center;
    height: 60rem;
    margin-top: -10rem;
    background-size: cover;
    background-position-x: 75%;
  }

  .home-header-text {
    width: 90%;
    margin: 0 auto;
    margin-top: 19.6rem;
  }

  .home-header-product-name {
    font-size: 3.6rem;
    line-height: 4rem;
    margin-top: 1.6rem;
  }

  .home-header-product-description {
    width: 32.8rem;
    display: inline;
  }

  .see-product-button {
    margin-top: 4rem;
  }

  .home-main {
    margin-top: -1.6rem;
    gap: 12rem;
  }

  .home-product-one-heading {
    font-size: 3.6rem;
    line-height: 4rem;
    padding: 0 6rem;
  }

  .home-product-one-image {
    background-image: url('/assets/home/mobile/image-speaker-zx9.png');
    margin-top: 5.5rem;
    height: 20.7rem;
    width: 17.72rem;
  }

  .home-product-one {
    height: 60rem;
    gap: 3.2rem;
  }

  .home-product-two {
    background-image: url('/assets/home/mobile/image-speaker-zx7.jpg');
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
  }

  .home-product-two-text {
    margin-left: 3rem;
  }

  .see-product-button {
    margin-top: 5rem;
  }

  .home-product-three {
    flex-direction: column;
    gap: 2.4rem;
  }

  .home-product-three-text {
    width: 100%;
  }

  .home-product-three {
    margin-bottom: 14rem;
  }

  .home-product-three-description {
    margin-left: 2.4rem;
    margin-top: 4.1rem;
    height: 20rem;
  }

  .home-product-three-image {
    height: 20rem;
  }
}
</style>
