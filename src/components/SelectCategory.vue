<template>
  <div class="categories" :class="modal">
    <div class="category">
      <div class="category-container">
        <div class="category-headphones-image"></div>
        <h6 class="category-headphones-name">HEADPHONES</h6>
        <BaseButton
          link
          mode="outline"
          :to="{ name: 'Category', params: { category: 'headphones' } }"
          @click="$emit('close-modal')"
          class="shop-button"
        />
      </div>
    </div>
    <div class="category">
      <div class="category-container">
        <div class="category-speakers-image"></div>
        <h6 class="category-speakers-name">SPEAKERS</h6>
        <BaseButton
          link
          mode="outline"
          :to="{ name: 'Category', params: { category: 'speakers' } }"
          @click="$emit('close-modal')"
          class="shop-button"
        />
      </div>
    </div>
    <div class="category">
      <div class="category-container">
        <div class="category-earphones-image"></div>
        <h6 class="category-earphones-name">EARPHONES</h6>
        <BaseButton
          link
          mode="outline"
          :to="{ name: 'Category', params: { category: 'earphones' } }"
          @click="$emit('close-modal')"
          class="shop-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close-modal'],
  data() {
    return {
      headphonesImagePath: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
      speakersImagePath: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
      earphonesImagePath: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    };
  },
  props: {
    modal: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style scoped>
.categories {
  display: flex;
  gap: 3rem;
}

.category {
  background-color: var(--color-grey);
  width: 35rem;
  height: 20.4rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.category-headphones-image {
  background-image: url('/assets/shared/desktop/image-category-thumbnail-headphones.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
  width: 14rem;
  margin-top: -1rem;
  margin-right: 2rem;
}
.category-speakers-image {
  background-image: url('/assets/shared/desktop/image-category-thumbnail-speakers.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
  width: 14rem;
  margin-right: 2rem;
}
.category-earphones-image {
  background-image: url('/assets/shared/desktop/image-category-thumbnail-earphones.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
  width: 17rem;
  margin-right: 1rem;
}

.category-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5rem;
}

.category-headphones-name {
  margin-top: 1rem;
}

@media (max-width: 52em) {
  .categories {
    gap: 1rem;
  }

  .category {
    width: 22.3rem;
  }

  .category-headphones-image {
    height: 12.92rem;
    width: 12.4rem;
    margin-top: 0.4rem;
    margin-left: 1rem;
  }
  .category-speakers-image {
    width: 14.4rem;
    height: 14rem;
    margin-bottom: 0.6rem;
  }
  .category-earphones-image {
    height: 13rem;
    width: 16rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .modal .category {
    width: 22.3rem;
    height: 16.5rem;
    margin-top: 5rem;
  }

  .modal .category-headphones-name,
  .modal .category-speakers-name,
  .modal .category-earphones-name {
    margin-top: 0;
  }

  .modal .category-speakers-image,
  .modal .category-earphones-image {
    margin-bottom: -0.6rem;
  }

  .modal .shop-button {
    margin-top: -1rem;
  }
}

@media (max-width: 39em) {
  .categories {
    flex-direction: column;
    gap: 7rem;
    margin-top: 5rem;
    align-items: center;
  }

  .category {
    width: 33rem;
  }
}
</style>
