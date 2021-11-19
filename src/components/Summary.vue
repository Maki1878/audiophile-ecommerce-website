<template>
  <div class="summary">
    <h6 class="summary-header">summary</h6>
    <CartItem
      v-for="item in cartItems"
      :key="item.slug"
      :image="`/assets/cart/image-${item.slug}.jpg`"
      :name="item.name"
      :price="item.price"
    >
      <span class="item-quantity">x{{ item.quantity }}</span>
    </CartItem>
    <div class="d-flex">
      <span class="title">TOTAL</span>
      <span class="amount">$ {{ total }}</span>
    </div>
    <div class="d-flex">
      <span class="title">SHIPPING</span>
      <span class="amount">$ {{ shipping }}</span>
    </div>
    <div class="d-flex">
      <span class="title" n>VAT</span>
      <span class="amount">$ {{ valueAddedTax }}</span>
    </div>
    <div class="d-flex grand-total">
      <span class="title">GRAND TOTAL</span>
      <span class="grand-total-amount amount">$ {{ grandTotal }}</span>
    </div>
    <BaseButton @click="$emit('show-modal')" mode="width" class="pay-button"
      >COUNTINUE &#38; PAY</BaseButton
    >
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapGetters } from 'vuex';
export default {
  emits: ['show-modal'],
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(['total', 'grandTotal', 'valueAddedTax', 'shipping', 'cartItems']),
  },
};
</script>

<style scoped>
.summary {
  width: 35rem;
  background-color: var(--color-white);
  padding: 3.2rem 3.3rem;
  border-radius: 8px;
}

.summary-header {
  margin-bottom: 3.1rem;
}

.item-quantity {
  font-weight: var(--font-bold);
  opacity: 0.5;
}

.d-flex {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.title {
  opacity: 0.5;
}

.amount {
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: var(--font-bold);
}

.grand-total {
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
}

.grand-total-amount {
  color: var(--color-orange-dark);
}

.pay-button {
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
}
</style>
