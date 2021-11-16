<template>
  <div v-for="product in productsInCategory" :key="product.id">
    {{ product.slug }}
    <router-link :to="{ name: 'Product', params: { productSlug: product.slug } }"
      >See product</router-link
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    category: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['products']),
    productsInCategory() {
      return this.products.filter((product) => product.category === this.category);
    },
  },
  methods: {
    ...mapActions(['getProducts']),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
