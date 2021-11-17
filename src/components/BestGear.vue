<template>
  <div class="best-gear-container">
    <div class="best-gear-description">
      <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
      <p class="best-gear-text">
        Located at the heart of New York City, Audiophile is the premier store for high end
        headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience a wide range of our products.
        Stop by our store to meet
      </p>
    </div>
    <img :src="bestGearPath" alt="best-gear-image" class="best-gear-image" />
  </div>
</template>

<script>
export default {
  computed: {
    bestGearPath() {
      return '/assets/shared/desktop/image-best-gear.jpg';
    },
  },
};
</script>

<style scoped>
.best-gear-container {
  display: flex;
  gap: 12.5rem;
}

.best-gear-description {
  align-self: center;
}

.best-gear-text {
  opacity: 0.5;
  margin-top: 3.2rem;
}

.best-gear-image {
  border-radius: 8px;
}

span {
  color: var(--color-orange-dark);
}
</style>
