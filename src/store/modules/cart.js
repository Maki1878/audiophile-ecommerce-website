export default {
  state() {
    return {
      cart: [],
      shipping: 50,
      itemQuantity: 1,
    };
  },
  actions: {
    getCartItems({ commit }) {
      let items = { ...localStorage };
      commit('setCartItems', items);
    },
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
        localStorage.setItem(`${newProduct.name}`, JSON.stringify(newProduct));
        commit('pushProductToCart', newProduct);
        commit('resetQuantity');
      } else {
        localStorage.removeItem(`${cartItem.name}`);

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
      localStorage.removeItem(`${cartItem.name}`);
      commit('incrementCartItemQuantity', cartItem);
    },
    decrementCartItemQuantity({ commit, state }, product) {
      const cartItem = state.cart.find((item) => item.name === product.name);
      if (cartItem.quantity === 1) {
        localStorage.removeItem(`${cartItem.name}`);
        commit('removeItemFromCart', cartItem);
      } else {
        localStorage.removeItem(`${cartItem.name}`);
        commit('decrementCartItemQuantity', cartItem);
      }
    },
    clearLocalStorage() {
      localStorage.clear();
    },
  },
  mutations: {
    increment(state) {
      state.itemQuantity++;
    },
    decrement(state) {
      if (state.itemQuantity === 1) {
        return;
      }
      state.itemQuantity--;
    },
    resetQuantity(state) {
      state.itemQuantity = 1;
    },
    pushProductToCart(state, newProduct) {
      state.cart.unshift(newProduct);
    },
    incrementItemQuantity(state, product) {
      product.quantity += state.itemQuantity;
      localStorage.setItem(`${product.name}`, JSON.stringify(product));
    },
    incrementCartItemQuantity(state, item) {
      item.quantity++;
      localStorage.setItem(`${item.name}`, JSON.stringify(item));
    },
    decrementCartItemQuantity(state, item) {
      item.quantity--;
      localStorage.setItem(`${item.name}`, JSON.stringify(item));
    },
    removeAllItemsFromCart(state) {
      state.cart = [];
    },
    removeItemFromCart(state, cartItem) {
      state.cart = state.cart.filter((item) => item.name !== cartItem.name);
    },
    setCartItems(state, items) {
      for (var a in items) {
        if (a !== 'loglevel:webpack-dev-server') {
          state.cart.push(JSON.parse(items[a]));
        }
      }
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
    firstCartItem(state, getters) {
      let [firstItem] = getters.cartItems;
      return firstItem;
    },
    restCartItems(state) {
      return state.cart.slice(1);
    },
  },
};
