<template>
  <div class="footer">
    <div>
      <div class="logo" v-if="logoIconPath">
        <img :src="logoIconPath" class="logo-icon" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoIconPath: '/assets/shared/desktop/logo.svg',
    };
  },
};
</script>

<style>
.footer {
  background-color: var(--color-black);
  height: 36.5rem;
}
</style>
