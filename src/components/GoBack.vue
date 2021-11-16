<template>
  <div>
    <button @click="$router.back()">Go Back</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  background-color: transparent;
  font: var(--font-medium);
  border: none;
  margin-top: 7.9rem;
  cursor: pointer;
}
</style>
