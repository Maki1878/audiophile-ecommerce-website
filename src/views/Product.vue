<template>
  <Header />
  <CartModal v-if="showModal" @close-modal="closeModal" />
  <div class="product-container">
    <GoBack class="go-back-button" />
    <div class="item">
      <div>
        <img :src="product.image[screen].slice(1)" alt="product-image" class="item-image" />
      </div>
      <div class="item-details">
        <p v-if="newProduct" class="new-product">NEW PRODUCT</p>
        <h2 class="item-title">{{ name }}</h2>
        <p class="item-description">{{ description }}</p>
        <slot>
          <p class="item-price">$ {{ price }}</p>
          <div class="add-product">
            <ChangeQuantity />
            <BaseButton @click="addToCart" class="add-button">ADD TO CART</BaseButton>
          </div>
        </slot>
      </div>
    </div>
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
import screenSize from '@/mixins/screenSize';
import ChangeQuantity from '@/components/ChangeQuantity.vue';

export default {
  mixins: [screenSize],
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
    ChangeQuantity,
  },
  data() {
    return {
      showModal: false,
      screen: 'desktop',
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
.item {
  display: flex;
  gap: 12.45rem;
}

.item-image {
  width: 56rem;
  height: 54rem;
  border-radius: 8px;
}
.add-product {
  display: flex;
  gap: 1.6rem;
}

.new-product {
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 1rem;
  color: var(--color-orange-dark);
  font-weight: var(--font-regular);
  margin-bottom: 1.6rem;
}

.item-details {
  align-self: center;
}

.item-description {
  margin-top: 3.2rem;
  opacity: 0.5;
}

.item-price {
  margin-top: 3.2rem;
  margin-bottom: 4.7rem;
  font-weight: var(--font-bold);
  font-size: 1.8rem;
  line-height: 2.46rem;
}

.add-button {
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
}

@media (max-width: 52em) {
  .item {
    gap: 6.9rem;
  }

  .product-container {
    width: 91%;
    overflow: hidden;
  }

  .item-image {
    width: 28.1rem;
    height: 48rem;
  }

  .item-details {
    align-self: center;
    width: 33.95rem;
  }

  .item-price {
    margin-bottom: 3.1rem;
  }

  .item-title {
    font-size: 2.8rem;
    line-height: 3.2rem;
  }

  .best-gear {
    margin-top: -5rem;
    margin-bottom: 12rem;
  }

  .go-back-button {
    margin-bottom: 2.4rem;
  }
}

@media (max-width: 39em) {
  .item {
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
  }

  .item-image {
    width: 32.7rem;
    height: 32.7rem;
  }

  .new-product {
    margin-bottom: 2.4rem;
  }

  .item-description {
    margin-top: 2.4rem;
  }

  .item-price {
    margin-top: 2.4rem;
    margin-bottom: 3.1rem;
  }
}
</style>
