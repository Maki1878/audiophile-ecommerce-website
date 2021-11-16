export default {
  state() {
    return {
      cart: [],
      shipping: 50,
    };
  },
  actions: {
    addProductToCart({ commit, state }, product) {
      const newProduct = {
        name: product.shortName,
        slug: product.slug,
        price: product.price,
        picture: `/assets/cart/image-${product.slug}.jpg`,
        quantity: 1,
      };
      const cartItem = state.cart.find((item) => item.name === newProduct.name);
      if (!cartItem) {
        commit('pushProductToCart', newProduct);
      } else {
        commit('incrementItemQuantity', cartItem);
      }
    },
    emptyCart({ commit }) {
      commit('removeAllItemsFromCart');
    },
    incrementItemQuantity({ commit, state }, product) {
      const cartItem = state.cart.find((item) => item.name === product.name);
      commit('incrementItemQuantity', cartItem);
    },
    decrementItemQuantity({ commit, state }, product) {
      const cartItem = state.cart.find((item) => item.name === product.name);
      if (cartItem.quantity === 1) {
        commit('removeItemFromCart', cartItem);
      } else {
        commit('decrementItemQuantity', cartItem);
      }
    },
  },
  mutations: {
    pushProductToCart(state, newProduct) {
      state.cart.unshift(newProduct);
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementItemQuantity(state, cartItem) {
      cartItem.quantity--;
    },
    removeAllItemsFromCart(state) {
      state.cart = [];
    },
    removeItemFromCart(state, cartItem) {
      state.cart = state.cart.filter((item) => item.name !== cartItem.name);
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    total(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    shipping(state) {
      return state.shipping;
    },
    valueAddedTax(state, getters) {
      return Math.round(getters.total * 0.2);
    },
    grandTotal(state, getters) {
      return getters.total + state.shipping + getters.valueAddedTax;
    },
  },
};
