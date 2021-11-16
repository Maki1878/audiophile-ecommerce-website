<template>
  <div>
    <div>
      <img :src="image" alt="product-image" />
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

<style></style>
