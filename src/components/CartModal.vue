<template>
  <div>
    <div class="backdrop" @click="$emit('close-modal')"></div>
    <dialog open class="modal">
      <div class="modal-header">
        <h6>CART ({{ cartItemsQuantity }})</h6>
        <span @click="clearCart" class="modal-remove-btn">Remove all</span>
      </div>
      <CartItem
        v-for="item in cartItems"
        :key="item.name"
        :image="`/assets/cart/image-${item.slug}.jpg`"
        :name="item.name"
        :price="item.price.toLocaleString('en-US')"
      >
        <div class="change-quantity-container">
          <button @click="decrementCartItemQuantity(item)" class="change-quantity-operator">
            -
          </button>
          <span class="change-quantity-quantity">
            {{ item.quantity }}
          </span>
          <button @click="incrementCartItemQuantity(item)" class="change-quantity-operator">
            +
          </button>
        </div>
      </CartItem>
      <div class="modal-total">
        <span class="modal-total-title">TOTAL</span>
        <h6 class="modal-total-price">$ {{ total.toLocaleString('en-US') }}</h6>
      </div>
      <BaseButton
        :disable="cartItemsQuantity > 0 ? 'not' : 'disable'"
        link
        :to="{ name: 'Checkout' }"
        mode="width"
        class="checkout-button"
        >CHECKOUT</BaseButton
      >
    </dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartItem from '@/components/CartItem.vue';
export default {
  emits: ['close-modal'],
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(['cartItems', 'total']),
    cartItemsQuantity() {
      return this.cartItems.length;
    },
  },
  methods: {
    ...mapActions([
      'emptyCart',
      'incrementCartItemQuantity',
      'decrementCartItemQuantity',
      'clearLocalStorage',
    ]),
    clearCart() {
      this.clearLocalStorage();
      this.emptyCart();
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
.modal {
  position: fixed;
  top: 13rem;
  left: 89.8rem;
  width: 37.7rem;
  z-index: 100;
  border-radius: 8px;
  border: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
  padding: 31px 31px 31px 33px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.modal-total {
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  margin-bottom: 24px;
}

.modal-total-title {
  opacity: 50%;
}

.modal-remove-btn {
  cursor: pointer;
  opacity: 50%;
}

.modal-remove-btn:hover {
  color: var(--color-orange-dark);
}

.checkout-button {
  display: flex;
  text-align: center;
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
}

.change-quantity-container {
  width: 96px;
  height: 32px;
  display: flex;
  justify-content: space-evenly;
  background-color: #f1f1f1;
  color: var(--color-black);
  align-items: center;
}

.change-quantity-quantity,
.change-quantity-operator {
  width: 16px;
  height: 18px;
  font-weight: var(--font-bold);
}

.change-quantity-operator {
  opacity: 25%;
}

.change-quantity-operator {
  border: none;
  cursor: pointer;
}

.change-quantity-operator:hover {
  color: var(--color-orange-dark);
}

.change-quantity-quantity {
  display: contents;
}

@media (max-width: 86em) {
  .modal {
    top: 12rem;
    left: auto;
    right: 4rem;
  }
}

@media (max-width: 39em) {
  .modal {
    margin: 0 auto;
    left: 2rem;
    right: 2rem;
    width: 32.7rem;
  }
}
</style>
