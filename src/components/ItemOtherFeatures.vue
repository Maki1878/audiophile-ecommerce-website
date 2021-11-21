<template>
  <div class="item-container">
    <div class="item-details">
      <div class="item-features">
        <h3 class="item-features-title">FEATURES</h3>
        <p class="item-features-text">{{ features }}</p>
      </div>
      <div class="in-the-box">
        <h3 class="in-the-box-title">IN THE BOX</h3>
        <div class="includes-list">
          <div v-for="item in includes" :key="item.item" class="includes-list-item">
            <span class="includes-list-item-quantity">{{ item.quantity }}x</span>
            <span class="includes-list-item-text">{{ item.item }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery">
      <div class="d-flex">
        <img
          :src="gallery.first[screen].slice(1)"
          alt="first-gallery-image"
          class="gallery-image-one"
        />
        <img
          :src="gallery.second[screen].slice(1)"
          alt="second-gallery-image"
          class="gallery-image-two"
        />
      </div>
      <div>
        <img
          :src="gallery.third[screen].slice(1)"
          alt="third-gallery-image"
          class="gallery-image-three"
        />
      </div>
    </div>
    <div class="other-products">
      <h3>YOU MAY ALSO LIKE</h3>
      <div class="other-products-items">
        <div v-for="product in otherProducts" :key="product.name" class="other-product-item">
          <div class="other-product-image-container">
            <img
              :src="product.image[screen].slice(1)"
              alt="other-product-image"
              class="other-product-image"
            />
          </div>
          <h5 class="other-product-name">{{ product.name.toUpperCase() }}</h5>
          <BaseButton
            link
            :to="{ name: 'Product', params: { category: category, productSlug: product.slug } }"
            class="other-product-button"
            >SEE PRODUCT</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenSize from '@/mixins/screenSize';

export default {
  mixins: [screenSize],
  props: {
    features: {
      type: String,
      required: true,
    },
    includes: {
      type: Array,
      required: true,
    },
    gallery: {
      type: Object,
      required: true,
    },
    otherProducts: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  gap: 16rem;
  margin-top: 16rem;
}

.item-details {
  display: flex;
  gap: 12.5rem;
}

.item-features {
  width: 57%;
}

.item-features-text {
  width: 100%;
  opacity: 0.5;
}

h3 {
  margin-bottom: 3.2rem;
}

.includes-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.includes-list-item {
  display: flex;
  gap: 2.4rem;
}

.includes-list-item-quantity {
  font-weight: var(--font-bold);
  color: var(--color-orange-dark);
}

.includes-list-item-text {
  opacity: 0.5;
}

.includes-list-item {
  gap: 2.4rem;
}

.gallery {
  display: flex;
  gap: 3rem;
}

.d-flex {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

img {
  border-radius: 8px;
}

.other-products h3 {
  text-align: center;
  margin-bottom: 6.4rem;
}
.other-product-image {
  width: 34rem;
}

.other-products-items {
  display: flex;
  gap: 3rem;
  margin-bottom: 16rem;
}

.other-product-image-container {
  width: 35rem;
  height: 31.8rem;
  background-color: #f1f1f1;
  border-radius: 8px;
  text-align: center;
}

.other-product-name {
  margin-top: 4rem;
  margin-bottom: 5rem;
}

.other-product-button {
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
}

.other-product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 50em) {
  .item-container {
    margin-top: 12rem;
    gap: 12rem;
  }

  .item-details {
    flex-direction: column;
    gap: 12rem;
  }

  .item-features {
    width: 100%;
  }

  .in-the-box {
    display: flex;
    gap: 1.1rem;
  }

  .in-the-box-title {
    width: 33.9rem;
  }

  .gallery-image-one {
    width: 27.7rem;
  }

  .gallery-image-two {
    width: 27.7rem;
  }

  .gallery-image-three {
    width: 39.5rem;
  }

  .gallery {
    gap: 1.8rem;
  }

  .d-flex {
    gap: 2rem;
  }

  .other-product-image {
    width: 21.8rem;
    height: 27.3rem;
    margin-top: 9%;
  }

  .other-products-items {
    gap: 1.1rem;
    margin-bottom: 14rem;
  }

  .other-products h3 {
    margin-bottom: 5.6rem;
  }

  .other-product-image-container {
    width: 22.3rem;
    background-color: #f1f1f1;
    height: 31.8rem;
    border-radius: 8px;
    text-align: center;
  }

  .other-product-name {
    margin-top: 4rem;
    margin-bottom: 5rem;
  }
}

@media (max-width: 39em) {
  .item-container {
    margin-top: 8.8rem;
  }

  .item-features-title {
    margin-bottom: 2.4rem;
  }

  .item-details {
    gap: 8.8rem;
  }

  .in-the-box {
    flex-direction: column;
  }

  .in-the-box-title {
    margin-bottom: 2.4rem;
  }

  .includes-list-item {
    gap: 0.8rem;
  }

  .item-container {
    gap: 8.8rem;
    margin-bottom: -4rem;
  }

  .gallery {
    flex-direction: column;
    margin: 0 auto;
  }

  .gallery-image-one {
    width: 34rem;
    height: 17.4rem;
  }

  .gallery-image-two {
    width: 34rem;
    height: 17.4rem;
  }

  .gallery-image-three {
    width: 34rem;
  }

  .other-products {
    margin-top: 3.2rem;
  }

  .other-products h3 {
    margin-bottom: 4rem;
  }

  .other-products-items {
    flex-direction: column;
  }

  .other-product-image-container {
    width: 34rem;
    height: 12rem;
    margin-top: 3.2rem;
  }

  .other-product-image {
    width: 33.3rem;
    height: 11.5rem;
    margin-top: 1%;
  }

  .other-products {
    margin-top: 0;
  }

  .other-products h3 {
    margin-bottom: 1.8rem;
  }

  .other-product-name {
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
  }
}
</style>
