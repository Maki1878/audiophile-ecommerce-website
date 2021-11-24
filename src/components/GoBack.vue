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
  opacity: 0.5;
}

@media (max-width: 52em) {
  button {
    margin-top: 5.8rem;
  }
}

@media (max-width: 52em) {
  button {
    margin-top: 1.6rem;
  }
}

@media (max-width: 39em) {
  button {
    margin-left: 1rem;
  }
}
</style>
