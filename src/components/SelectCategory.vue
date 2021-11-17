<template>
  <div class="categories">
    <div class="category"></div>
    <div class="category"></div>
    <div class="category"></div>
  </div>
</template>

<script>
export default {};
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
}
</style>
