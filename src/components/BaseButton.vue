<template>
  <div>
    <button v-if="!link" :class="[mode, disable]">
      <slot>
        <div>
          <span>SHOP</span>
          <img :src="iconArrowRight" alt="arrow-right-icon" />
        </div>
      </slot>
    </button>
    <router-link v-else :to="to" :class="[mode, disable]">
      <slot>
        <div>
          <span>SHOP</span>
          <img :src="iconArrowRight" alt="arrow-right-icon" />
        </div>
      </slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    width: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    disable: {
      type: [String, Boolean],
      required: false,
      default: '',
    },
    to: {
      type: [Object, String],
      required: false,
      default: '/',
    },
  },
  data() {
    return {
      iconArrowRight: '/assets/shared/desktop/icon-arrow-right.svg',
    };
  },
};
</script>

<style scoped>
button,
a {
  background-color: var(--color-orange-dark);
  color: var(--color-white);
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
  padding: 1.5rem 2.95rem 1.5rem 3.15rem;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
  font: inherit;
  width: 16rem;
  height: 4.8rem;
  text-decoration: none;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: var(--color-orange-light);
}

.black {
  background-color: var(--color-black);
  color: var(--color-white);
  border: 1px solid var(--color-black);
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
  width: 17rem;
  height: 4.8rem;
}

.black:hover,
.black:active {
  background-color: #4c4c4c;
  color: var(--color-white);
}

.transparent {
  background-color: transparent;
  color: var(--color-black);
  border: 2px solid var(--color-black);
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
  width: 17rem;
  height: 4.8rem;
}

.transparent:hover,
.transparent:active {
  background-color: var(--color-black);
  color: var(--color-white);
}

.outline {
  background-color: transparent;
  color: var(--color-black);
  opacity: 0.5;
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 1.78rem;
  width: 16rem;
  height: 4.8rem;
}

.outline:hover,
.outline:active {
  color: var(--color-orange-dark);
  background-color: transparent;
}

span {
  margin-right: 1.33rem;
}

.width:first-child {
  width: 100%;
}

.disable:first-child {
  pointer-events: none;
}
</style>
