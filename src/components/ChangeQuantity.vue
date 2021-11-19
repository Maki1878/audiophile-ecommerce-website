<template>
  <div class="container">
    <button @click="decrement" class="operator">-</button>
    <span>
      {{ itemQuantity }}
    </span>
    <button @click="increment" class="operator">+</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['itemQuantity']),
  },
  methods: {
    ...mapActions(['incrementItemQuantity', 'decrementItemQuantity']),
    decrement() {
      this.decrementItemQuantity();
    },
    increment() {
      this.incrementItemQuantity();
    },
  },
};
</script>

<style scoped>
.container {
  width: 12rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-evenly;
  background-color: #f1f1f1;
  color: var(--color-black);
  align-items: center;
}

span,
button {
  width: 16px;
  height: 18px;
}

.operator {
  opacity: 25%;
}

button {
  border: none;
  cursor: pointer;
}
</style>
