export default {
  state() {
    return {
      products: [],
    };
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await fetch('./data.json', {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        });
        const responseData = await response.json();
        commit('setProducts', responseData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
