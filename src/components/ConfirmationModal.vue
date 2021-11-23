<template>
  <div class="backdrop"></div>
  <dialog open class="modal">
    <div class="cart-icon">
      <img :src="cartIconPath" alt="cart" />
    </div>
    <h3 class="modal-header">
      THANK YOU <br />
      FOR YOUR ORDER
    </h3>
    <p class="modal-info">You will receive an email confirmation shortly.</p>
    <div class="modal-total">
      <div class="modal-total-items">
        <CartItem
          :image="`/assets/cart/image-${firstCartItem.slug}.jpg`"
          :name="firstCartItem.name"
          :price="firstCartItem.price.toLocaleString('en-US')"
          class="modal-total-item"
        >
          <span class="modal-total-item-quantity">x{{ firstCartItem.quantity }}</span>
        </CartItem>
        <template v-if="showRestItems">
          <CartItem
            v-for="item in restCartItems"
            :key="item.slug"
            :image="`/assets/cart/image-${item.slug}.jpg`"
            :name="item.name"
            :price="item.price.toLocaleString('en-US')"
            class="modal-total-item"
          >
            <span class="modal-total-item-quantity">x{{ item.quantity }}</span>
          </CartItem>
        </template>
        <p class="modal-total-other-items" @click="showRestItems = true" v-if="!showRestItems">
          and {{ restCartItems.length }} other item(s)
        </p>
        <p class="modal-total-other-items" @click="showRestItems = false" v-else>View less</p>
      </div>
      <div class="modal-total-amount">
        <div class="modal-total-amount-container">
          <span class="grand-total-title">GRAND TOTAL</span>
          <h6>$ {{ grandTotal.toLocaleString('en-US') }}</h6>
        </div>
      </div>
    </div>
    <BaseButton link :to="{ name: 'Home' }" mode="width" class="home-button" @click="clearCart"
      >BACK TO HOME</BaseButton
    >
  </dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartItem from '@/components/CartItem.vue';
export default {
  emits: ['close-modal'],
  components: {
    CartItem,
  },
  data() {
    return {
      cartIconPath: '/assets/shared/desktop/icon-cart.svg',
      showRestItems: false,
    };
  },
  computed: {
    ...mapGetters(['grandTotal', 'firstCartItem', 'restCartItems']),
  },
  methods: {
    ...mapActions(['emptyCart', 'clearLocalStorage']),
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
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  position: absolute;
  top: 12rem;
  margin: auto;
  width: 54rem;
  height: auto;
  z-index: 100;
  border-radius: 8px;
  border: none;
  overflow: hidden;
  background-color: white;
  padding: 48px;
  margin-top: 12.5rem;
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
  width: 29.4rem;
  height: 7.2rem;
}

.modal-info {
  opacity: 50%;
  margin-top: 2.4rem;
  margin-bottom: 3.3rem;
}

.modal-total {
  height: auto;
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
  color: var(--color-white);
  height: auto;
}

.modal-total-item-quantity {
  font-weight: var(--font-bold);
  opacity: 0.5;
}

.modal-total-item {
  margin-bottom: 0;
  margin-top: -5px;
}

.modal-total-other-items {
  text-align: center;
  font-weight: var(--font-bold);
  opacity: 50%;
  font-size: 12px;
  line-height: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 12px;
  cursor: pointer;
}

.home-button {
  display: flex;
  text-align: center;
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
  margin-top: 4.6rem;
}

.modal-total-amount-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 18.5rem;
  left: 33rem;
}

.grand-total-title {
  opacity: 50%;
}

.modal-total-item-quantity {
  display: inline;
}

@media (max-width: 86em) {
  .modal {
    top: 13.2rem;
  }

  .backdrop {
    top: 8.9rem;
  }
}

@media (max-width: 39em) {
  .modal {
    top: 22.4rem;
    margin: 0 auto;
    width: 32.7rem;
    height: auto;
    padding: 3.2rem;
  }

  .modal-header {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  .modal-info {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
  }

  .modal-total {
    flex-direction: column;
  }

  .modal-total-items {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  .modal-total-item-quantity {
    display: block;
    margin-top: -2rem;
  }

  .modal-total-amount {
    border-radius: 0 0 8px 8px;
    height: 9.2rem;
    flex: unset;
  }

  .home-button {
    margin-top: 3rem;
  }

  .modal-total-amount-container {
    margin-left: 2.4rem;
    margin-top: 1.5rem;
    height: 9.2rem;
    position: unset;
  }

  .cart-icon {
    margin-bottom: 2.2rem;
  }

  .backdrop {
    top: 0;
  }
}
</style>
