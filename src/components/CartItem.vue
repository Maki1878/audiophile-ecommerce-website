<template>
  <div class="item">
    <div class="item-container">
      <div>
        <img :src="image" alt="cart-item-image" class="item-image" />
      </div>
      <div class="item-name-price">
        <p class="item-name">{{ name }}</p>
        <p class="item-price">$ {{ price }}</p>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
}

.item-image {
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 8px;
}

.item-container {
  display: flex;
  gap: 1.6rem;
}

.item-name {
  font-weight: var(--font-bold);
}

.item-price {
  font-size: 1.4rem;
  line-height: 2.5rem;
  opacity: 0.5;
  font-weight: var(--font-bold);
}
</style>
