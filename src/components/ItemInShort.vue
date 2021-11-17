<template>
  <div class="item">
    <div>
      <img :src="image" alt="product-image" class="item-image" />
    </div>
    <div class="item-description">
      <p v-if="newProduct">NEW PROJECT</p>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <slot>
        <p>$ {{ price }}</p>
        <div class="add-product">
          <p>quantity</p>
          <BaseButton @click="$emit('add-product')">ADD TO CART</BaseButton>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['add-product'],
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
    newProduct: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
}

.item-image {
  width: 56rem;
  height: 54rem;
}
.add-product {
  display: flex;
}
</style>
