<template>
  <div class="backdrop">
    <dialog open class="modal">
      <div class="cart-icon">
        <img :src="cartIconPath" alt="cart" />
      </div>
      <h3 class="modal-header">THANK YOU FOR YOUR ORDER</h3>
      <p class="modal-info">You will receive an email confirmation shortly.</p>
      <div class="modal-total">
        <div class="modal-total-items">
          <CartItem
            :image="`/assets/cart/image-${firstCartItem.slug}.jpg`"
            :name="firstCartItem.name"
            :price="firstCartItem.price"
            class="modal-total-item"
          >
            <span class="modal-total-item-quantity">x{{ firstCartItem.quantity }}</span>
          </CartItem>

          <p class="modal-total-other-items">and {{ cartItems.length - 1 }} other item(s)</p>
        </div>
        <div class="modal-total-amount">GRAND TOTAL {{ grandTotal }}</div>
      </div>
      <router-link :to="{ name: 'Home' }">BACK TO HOME</router-link>
    </dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartItem.vue';
export default {
  emits: ['close-modal'],
  components: {
    CartItem,
  },
  data() {
    return {
      cartIconPath: '/assets/shared/desktop/icon-cart.svg',
    };
  },
  computed: {
    ...mapGetters(['grandTotal', 'firstCartItem', 'cartItems']),
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
  position: absolute;
  top: 12rem;
  margin: auto;
  width: 54rem;
  height: 58rem;
  z-index: 100;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  background-color: white;
  padding: 48px;
}

.cart-icon {
  background-color: var(--color-orange-dark);
  height: 64px;
  width: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 33px;
}

.modal-header {
  width: 28.4rem;
  height: 7.2rem;
}

.modal-info {
  opacity: 50%;
  margin-top: 2.4rem;
  margin-bottom: 3.3rem;
}

.modal-total {
  height: 14rem;
  display: flex;
}

.modal-total-items {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  width: 55%;
  border-radius: 8px 0 0 8px;
  padding: 24px;
}

.modal-total-amount {
  background-color: var(--color-black);
  flex: 1;
  border-radius: 0 8px 8px 0;
}

.modal-total-item-quantity {
  font-weight: var(--font-bold);
  opacity: 0.5;
}

.modal-total-item {
  margin-bottom: 0;
}

.modal-total-other-items {
  text-align: center;
  font-weight: var(--font-bold);
  opacity: 50%;
  font-size: 12px;
  line-height: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 12px;
}
</style>
