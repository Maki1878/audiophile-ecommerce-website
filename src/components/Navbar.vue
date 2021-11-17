<template>
  <div class="navigation-links">
    <router-link to="/">HOME</router-link>
    <router-link to="/headphones">HEADPHONES</router-link>
    <router-link to="/speakers">SPEAKERS</router-link>
    <router-link to="/earphones">EARPHONES</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  color: var(--color-white);
}
.navigation-links {
  display: flex;
  gap: 3rem;
}
a {
  color: var(--color-white);
  text-decoration: none;
}
</style>
