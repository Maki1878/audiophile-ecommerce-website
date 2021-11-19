export default {
  state() {
    return {
      cart: [],
      shipping: 50,
      itemQuantity: 1,
    };
  },
  actions: {
    addProductToCart({ commit, state }, product) {
      const newProduct = {
        name: product.shortName,
        slug: product.slug,
        price: product.price,
        picture: `/assets/cart/image-${product.slug}.jpg`,
        quantity: state.itemQuantity,
      };
      const cartItem = state.cart.find((item) => item.name === newProduct.name);
      if (!cartItem) {
        commit('pushProductToCart', newProduct);
        commit('resetQuantity');
      } else {
        commit('incrementItemQuantity', cartItem);
        commit('resetQuantity');
      }
    },
    emptyCart({ commit }) {
      commit('removeAllItemsFromCart');
    },
    incrementItemQuantity({ commit }) {
      commit('increment');
    },
    decrementItemQuantity({ commit }) {
      commit('decrement');
    },
    incrementCartItemQuantity({ commit, state }, product) {
      const cartItem = state.cart.find((item) => item.name === product.name);
      commit('incrementCartItemQuantity', cartItem);
    },
    decrementCartItemQuantity({ commit, state }, product) {
      const cartItem = state.cart.find((item) => item.name === product.name);
      if (cartItem.quantity === 1) {
        commit('removeItemFromCart', cartItem);
      } else {
        commit('decrementCartItemQuantity', cartItem);
      }
    },
  },
  mutations: {
    increment(state) {
      state.itemQuantity++;
      console.log(state.itemQuantity);
    },
    decrement(state) {
      if (state.itemQuantity === 1) {
        return;
      }
      state.itemQuantity--;
      console.log(state.itemQuantity);
    },
    resetQuantity(state) {
      state.itemQuantity = 1;
    },
    pushProductToCart(state, newProduct) {
      state.cart.unshift(newProduct);
    },
    incrementItemQuantity(state, product) {
      product.quantity += state.itemQuantity;
    },
    incrementCartItemQuantity(state, item) {
      item.quantity++;
    },
    decrementCartItemQuantity(state, item) {
      item.quantity--;
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
    itemQuantity(state) {
      return state.itemQuantity;
    },
  },
};
