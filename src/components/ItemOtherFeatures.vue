<template>
  <div class="item-container">
    <div class="item-details">
      <div class="item-features">
        <h3>FEATURES</h3>
        <p class="item-features-text">{{ features }}</p>
      </div>
      <div>
        <h3>IN THE BOX</h3>
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
        <img :src="firstGalleryImage" alt="first-gallery-image" />
        <img :src="secondGalleryImage" alt="second-gallery-image" />
      </div>
      <div>
        <img :src="thirdGalleryImage" alt="third-gallery-image" />
      </div>
    </div>
    <div class="other-products">
      <h3>YOU MAY ALSO LIKE</h3>
      <div class="other-products-items">
        <div v-for="product in otherProducts" :key="product.name" class="other-product-item">
          <div>
            <img
              :src="product.image[screenSize].slice(1)"
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
export default {
  data() {
    return {
      screenSize: 'desktop',
    };
  },
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
  computed: {
    firstGalleryImage() {
      return this.gallery.first.desktop.slice(1);
    },
    secondGalleryImage() {
      return this.gallery.second.desktop.slice(1);
    },
    thirdGalleryImage() {
      return this.gallery.third.desktop.slice(1);
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

.other-products-items {
  display: flex;
  gap: 3rem;
  margin-bottom: 16rem;
}

.other-product-image {
  width: 35rem;
}

.other-product-name {
  margin-top: 4rem;
  margin-bottom: 3.2rem;
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
</style>
