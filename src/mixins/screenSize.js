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
  created() {
    if (window.innerWidth <= 500) {
      this.screen = 'mobile';
      return;
    } else if (window.innerWidth <= 800) {
      this.screen = 'tablet';
      return;
    } else {
      this.screen = 'desktop';
    }
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
        return;
      } else if (window.innerWidth <= 800) {
        this.screen = 'tablet';
        return;
      } else {
        this.screen = 'desktop';
      }
    },
  },
};
