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
/* .navigation {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  color: var(--color-white);
  font-weight: var(--font-bold);
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  gap: 3.4rem;
} */
.navigation-links {
  display: flex;
  color: var(--color-white);
  font-weight: var(--font-bold);
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  gap: 3.4rem;
}
a {
  color: var(--color-white);
  text-decoration: none;
}

a:hover,
a:active {
  color: var(--color-orange-dark);
}

@media (max-width: 39em) {
  .navigation-links {
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
}
</style>
