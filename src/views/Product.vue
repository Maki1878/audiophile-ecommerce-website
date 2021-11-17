<template>
  <div v-if="showModal" class="backdrop" @click="closeModal"></div>
  <dialog open class="dialog" v-if="showModal">
    <button @click="emptyCart">Remove all</button>
    <div v-for="item in cartItems" :key="item.name">
      <p>{{ item.name }}</p>
      <p>${{ item.price }}</p>
      <p>{{ item.quantity }}x</p>
      <button @click="incrementItemQuantity(item)">+++</button>
      <button @click="decrementItemQuantity(item)">---</button>
    </div>
    <p>TOTAL {{ total }}</p>
    <router-link :to="{ name: 'Checkout' }">checkout</router-link>
  </dialog>

  <div>
    <button @click="$router.back()">Go Back</button>
  </div>

  <ItemInShort
    :image="image"
    :newProduct="newProduct"
    :name="name"
    :description="description"
    :price="price"
    @add-product="(showModal = true), addProductToCart(product)"
  >
    <!-- <BaseButton link :to="{ name: 'Product', params: { productSlug: product.slug } }"
      >SEE PRODUCT</BaseButton
    > -->
  </ItemInShort>
  <ItemOtherFeatures
    :features="features"
    :includes="includes"
    :gallery="gallery"
    :otherProducts="others"
    :category="category"
  ></ItemOtherFeatures>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ItemInShort from '@/components/ItemInShort.vue';
import ItemOtherFeatures from '@/components/ItemOtherFeatures.vue';
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
    ]),
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
.dialog {
  position: fixed;
  top: 3.2rem;
  left: 89.8rem;
  width: 38rem;
  height: 48rem;
  z-index: 100;
  border-radius: 12px;
  border: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
</style>
