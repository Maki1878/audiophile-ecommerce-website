<template>
  <div class="item">
    <div>
      <img :src="image" alt="product-image" class="item-image" />
    </div>
    <div class="item-details">
      <p v-if="newProduct" class="new-product">NEW PRODUCT</p>
      <h2>{{ name }}</h2>
      <p class="item-description">{{ description }}</p>
      <slot>
        <p class="item-price">$ {{ price }}</p>
        <div class="add-product">
          <ChangeQuantity />
          <BaseButton @click="$emit('add-product')" class="add-button">ADD TO CART</BaseButton>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import ChangeQuantity from '@/components/ChangeQuantity.vue';
export default {
  emits: ['add-product', 'increment-quantity', 'decrement-quantity'],
  components: {
    ChangeQuantity,
  },
  props: {
    image: {
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
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
  gap: 12.45rem;
}

.item-image {
  width: 56rem;
  height: 54rem;
  border-radius: 8px;
}
.add-product {
  display: flex;
  gap: 1.6rem;
}

.new-product {
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 1rem;
  color: var(--color-orange-dark);
  font-weight: var(--font-regular);
  margin-bottom: 1.6rem;
}

.item-details {
  align-self: center;
}

.item-description {
  margin-top: 3.2rem;
  opacity: 0.5;
}

.item-price {
  margin-top: 3.2rem;
  margin-bottom: 4.7rem;
  font-weight: var(--font-bold);
  font-size: 1.8rem;
  line-height: 2.46rem;
}

.add-button {
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
}

@media (max-width: 50em) {
  .item-details {
    margin: 0 11%;
  }

  .item-image {
    width: 100%;
    height: 35.2rem;
    object-fit: contain;
    background-color: #f1f1f1;
  }

  .item {
    gap: 5.2rem;
  }
}

@media (max-width: 50em) {
  .item {
    gap: 3.2rem;
  }

  .item-description {
    margin-top: 2.4rem;
    opacity: 0.5;
  }
}

@media (max-width: 39em) {
  .item-details {
    margin: 0 1.6%;
  }

  .new-product {
    margin-bottom: 2.4rem;
  }
}
</style>
