<template>
  <div class="category-header">
    <h2>{{ categoryNameUpper }}</h2>
  </div>
  <div class="category-main">
    <div v-for="product in productsInCategory" :key="product.id">
      <ItemInShort
        :image="product.image.desktop.slice(1)"
        :newProduct="product.new"
        :name="product.name.toUpperCase()"
        :description="product.description"
        :price="product.price"
      >
        <BaseButton
          link
          class="see-product-button"
          :to="{ name: 'Product', params: { productSlug: product.slug } }"
          >SEE PRODUCT</BaseButton
        >
      </ItemInShort>
    </div>
    <SelectCategory class="select-category" />
    <BestGear class="best-gear" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ItemInShort from '@/components/ItemInShort.vue';
import SelectCategory from '@/components/SelectCategory.vue';
import BestGear from '@/components/BestGear.vue';

export default {
  components: {
    ItemInShort,
    SelectCategory,
    BestGear,
  },
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
    categoryNameUpper() {
      return this.category.toUpperCase();
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

<style scoped>
.category-header {
  display: grid;
  place-items: center;
  height: 239px;
  background-color: var(--color-black);
  color: var(--color-white);
  margin-bottom: 16rem;
}

.category-main {
  width: 77%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16rem;
}

.see-product-button {
  margin-top: 4rem;
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
}

.best-gear {
  margin-bottom: 16rem;
}
</style>
