<template>
  <div class="best-gear-container">
    <div class="best-gear-description">
      <h2 class="best-gear-header">BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
      <p class="best-gear-text">
        Located at the heart of New York City, Audiophile is the premier store for high end
        headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience a wide range of our products.
        Stop by our store to meet some of the fantastic people who make Audiophile the best place to
        buy your portable audio equipment.
      </p>
    </div>
    <img :src="bestGearPath" alt="best-gear-image" class="best-gear-image" />
  </div>
</template>

<script>
import screenSize from '@/mixins/screenSize';
export default {
  mixins: [screenSize],
  computed: {
    bestGearPath() {
      return `/assets/shared/${this.screen}/image-best-gear.jpg`;
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

@media (max-width: 68em) {
  .best-gear-container {
    flex-direction: column-reverse;
    gap: 6.1rem;
  }

  .best-gear-description {
    margin: 0 9%;
  }
}

@media (max-width: 39em) {
  .best-gear-description {
    margin: 0 2%;
  }

  .best-gear-container {
    gap: 4rem;
  }

  .best-gear-header {
    margin-bottom: -8px;
  }
}
</style>
