<template>
  <div class="summary">
    <p>summary</p>
    <p>TOTAL {{ total }}</p>
    <p>SHIPPING {{ shipping }}</p>
    <p>VAT {{ valueAddedTax }}</p>
    <p>GRAND TOTAL {{ grandTotal }}</p>
    <button @click="$emit('show-modal')">CONTINUE and PAY</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  emits: ['show-modal'],
  computed: {
    ...mapGetters(['total', 'grandTotal', 'valueAddedTax', 'shipping']),
  },
};
</script>

<style scoped>
.summary {
  width: 35rem;
  height: 61rem;
  background-color: var(--color-white);
}
</style>
