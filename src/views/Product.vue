<template>
  <Header />
  <CartModal v-if="showModal" @close-modal="closeModal" />
  <div class="product-container">
    <GoBack class="go-back-button" />

    <ItemInShort
      :image="image"
      :newProduct="newProduct"
      :name="name"
      :description="description"
      :price="price"
      @add-product="addToCart"
    >
    </ItemInShort>
    <ItemOtherFeatures
      :features="features"
      :includes="includes"
      :gallery="gallery"
      :otherProducts="others"
      :category="category"
    ></ItemOtherFeatures>
    <SelectCategory class="select-category" />
    <BestGear class="best-gear" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ItemInShort from '@/components/ItemInShort.vue';
import ItemOtherFeatures from '@/components/ItemOtherFeatures.vue';
import SelectCategory from '@/components/SelectCategory.vue';
import BestGear from '@/components/BestGear.vue';
import CartModal from '@/components/CartModal.vue';
import Header from '@/components/layout/Header.vue';

export default {
  props: {
    category: {
      type: String,
      required: true,
      default: '',
    },
    productSlug: {
      type: String,
      required: true,
      default: '',
    },
  },
  components: {
    ItemInShort,
    ItemOtherFeatures,
    SelectCategory,
    BestGear,
    Header,
    CartModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(['products', 'cartItems', 'total']),
    product() {
      return this.products.find((product) => product.slug === this.productSlug);
    },
    productName() {
      return this.product.name.toUpperCase();
    },
    image() {
      return this.product.image.desktop.slice(1);
    },
    newProduct() {
      return this.product.new;
    },
    name() {
      return this.product.name.toUpperCase();
    },
    description() {
      return this.product.description;
    },
    price() {
      return this.product.price;
    },
    cartItem() {
      return this.product;
    },
    features() {
      return this.product.features;
    },
    includes() {
      return this.product.includes;
    },
    gallery() {
      return this.product.gallery;
    },
    others() {
      return this.product.others;
    },
  },
  methods: {
    ...mapActions([
      'addProductToCart',
      'emptyCart',
      'incrementItemQuantity',
      'decrementItemQuantity',
      'incrementCartItemQuantity',
      'decrementCartItemQuantity',
    ]),
    closeModal() {
      this.showModal = false;
    },
    addToCart() {
      this.addProductToCart(this.product);
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.product-container {
  width: 77%;
  margin: 0 auto;
}

.go-back-button {
  margin-bottom: 5.6rem;
}

.select-category {
  margin-bottom: 16rem;
  margin-top: 4rem;
}

.best-gear {
  margin-bottom: 16rem;
}
</style>
