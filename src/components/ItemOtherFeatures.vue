<template>
  <div class="item-features">
    <div>
      <h3>FEATURES</h3>
      <p>{{ features }}</p>
    </div>
    <div>
      <h3>IN THE BOX</h3>
      <ul class="includes-list">
        <li v-for="item in includes" :key="item.item">
          <span>{{ item.quantity }}x</span>
          <span>{{ item.item }}</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="gallery">
    <div>
      <div>
        <img :src="firstGalleryImage" alt="first-gallery-image" />
      </div>
      <div>
        <img :src="secondGalleryImage" alt="second-gallery-image" />
      </div>
    </div>
    <div>
      <img :src="thirdGalleryImage" alt="third-gallery-image" />
    </div>
  </div>
  <div class="other-products">
    <h3>YOU MAY ALSO LIKE</h3>
    <div v-for="product in otherProducts" :key="product.name">
      <div>
        <img :src="product.image[screenSize].slice(1)" alt="third-image" />
      </div>
      <h5>{{ product.name.toUpperCase() }}</h5>
      <BaseButton
        link
        :to="{ name: 'Product', params: { category: category, productSlug: product.slug } }"
        >SEE PRODUCT</BaseButton
      >
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
.item-features {
  display: flex;
}

.includes-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

.gallery {
  display: flex;
}
</style>
