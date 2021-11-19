<template>
  <div>
    <div class="backdrop" @click="$emit('close-modal')"></div>
    <dialog open class="dialog">
      <button @click="emptyCart">Remove all</button>
      <div v-for="item in cartItems" :key="item.name">
        <p>{{ item.name }}</p>
        <p>${{ item.price }}</p>
        <p>{{ item.quantity }}x</p>
        <button @click="incrementCartItemQuantity(item)">+++</button>
        <button @click="decrementCartItemQuantity(item)">---</button>
      </div>
      <p>TOTAL {{ total }}</p>
      <router-link :to="{ name: 'Checkout' }">checkout</router-link>
    </dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  emits: ['close-modal'],
  computed: {
    ...mapGetters(['cartItems', 'total']),
  },
  methods: {
    ...mapActions(['emptyCart', 'incrementCartItemQuantity', 'decrementCartItemQuantity']),
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
