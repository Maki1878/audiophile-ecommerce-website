<template>
  <Header />
  <div class="category-header">
    <h2 class="category-header-title">{{ categoryNameUpper }}</h2>
  </div>
  <div class="category-main">
    <div class="category-items">
      <div v-for="(product, index) in productsInCategory" :key="index">
        <ItemInShort
          :image="product.image[screen].slice(1)"
          :newProduct="product.new"
          :name="product.name.toUpperCase()"
          :description="product.description"
          :class="{ 'item-in-short': index % 2 !== 0 }"
          class="d-flex-column"
        >
          <BaseButton
            link
            class="see-product-button"
            :to="{ name: 'Product', params: { productSlug: product.slug } }"
            >SEE PRODUCT</BaseButton
          >
        </ItemInShort>
      </div>
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
import Header from '@/components/layout/Header.vue';
import screenSize from '@/mixins/screenSize';

export default {
  mixins: [screenSize],

  components: {
    ItemInShort,
    SelectCategory,
    BestGear,
    Header,
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
  width: 100%;
}

.category-main {
  width: 77%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16rem;
}

.category-items {
  display: flex;
  flex-direction: column-reverse;
  gap: 16rem;
}

.item-in-short {
  flex-direction: row-reverse;
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

@media (max-width: 73em) {
  .item-in-short {
    flex-direction: row;
  }

  .category-header {
    margin-bottom: 12rem;
  }

  .category-items {
    gap: 12rem;
  }

  .category-main {
    gap: 12rem;
  }

  .category-main {
    text-align: center;
    width: 89%;
  }

  .best-gear {
    margin-bottom: 12rem;
  }
}

@media (max-width: 72em) {
  .d-flex-column {
    flex-direction: column;
  }
}

@media (max-width: 39em) {
  .category-header {
    height: 10rem;
    margin-bottom: 6.4rem;
  }
}
</style>
