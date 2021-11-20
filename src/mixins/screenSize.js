export default {
  data() {
    return {
      screen: 'desktop',
    };
  },
  beforeMount() {
    window.addEventListener('resize', this.boundOnResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.boundOnResize);
  },

  computed: {
    boundOnResize() {
      return this.onResize.bind(this);
    },
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 500) {
        this.screen = 'mobile';
      } else if (window.innerWidth <= 785) {
        this.screen = 'tablet';
      } else {
        this.screen = 'desktop';
      }
    },
  },
};
