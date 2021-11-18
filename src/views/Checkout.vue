<template>
  <Header />
  <div v-if="showConfirmationModal" class="backdrop" @click="closeModal">
    <dialog open class="dialog">
      <p>GRAND TOTAL {{ grandTotal }}</p>
      <router-link :to="{ name: 'Home' }">BACK TO HOME</router-link>
    </dialog>
  </div>
  <div class="background">
    <div class="checkout">
      <GoBack />

      <div class="checkout-container">
        <div class="checkout-form">
          <h3>CHECKOUT</h3>
          <form>
            <div class="billing-details">
              <p class="subtitle">BILLING DETAILS</p>
              <div class="billing-name-email">
                <div class="billing-name form-input" :class="{ invalid: !name.isValid }">
                  <div class="d-flex">
                    <label for="name">Name</label>
                    <span v-if="!name.isValid">Wrong format</span>
                  </div>
                  <input type="text" id="name" placeholder="Alexei Ward" v-model.trim="name.val" />
                </div>
                <div class="billing-email form-input" :class="{ invalid: !email.isValid }">
                  <div class="d-flex">
                    <label for="email">Email Address</label>
                    <span v-if="!email.isValid">Wrong format</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="alexei@mail.com"
                    v-model.trim="email.val"
                  />
                </div>
              </div>
              <div
                class="billing-phone-number form-input"
                :class="{ invalid: !phoneNumber.isValid }"
              >
                <div class="d-flex">
                  <label for="phone-number">Phone Number</label>
                  <span v-if="!phoneNumber.isValid">Wrong format</span>
                </div>
                <input
                  type="number"
                  id="phone-number"
                  placeholder="38763444555"
                  v-model.trim="phoneNumber.val"
                />
              </div>
            </div>
            <div class="shipping-info form-input">
              <p class="subtitle">SHIPPING INFO</p>
              <div class="shipping-address" :class="{ invalid: !address.isValid }">
                <div class="d-flex">
                  <label for="address">Address</label>
                  <span v-if="!address.isValid">Wrong format</span>
                </div>
                <input
                  type="text"
                  id="address"
                  placeholder="1137 Williams Avenue"
                  class="address-input"
                  v-model.trim="address.val"
                />
              </div>
              <div class="shipping-zip-code-city">
                <div class="shipping-zip-code form-input" :class="{ invalid: !zipCode.isValid }">
                  <div class="d-flex">
                    <label for="zip-code">ZIP Code</label>
                    <span v-if="!zipCode.isValid">Wrong format</span>
                  </div>
                  <input
                    type="number"
                    id="zip-code"
                    placeholder="10001"
                    v-model.number="zipCode.val"
                  />
                </div>
                <div class="shipping-city form-input" :class="{ invalid: !city.isValid }">
                  <div class="d-flex">
                    <label for="city">City</label>
                    <span v-if="!city.isValid">Wrong format</span>
                  </div>
                  <input type="text" id="city" placeholder="New York" v-model.trim="city.val" />
                </div>
              </div>
              <div class="shipping-country form-input" :class="{ invalid: !country.isValid }">
                <div class="d-flex">
                  <label for="country">Country</label>
                  <span v-if="!country.isValid">Wrong format</span>
                </div>
                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                  v-model.trim="country.val"
                />
              </div>
            </div>
            <div class="payment-details">
              <p class="subtitle">Payment DETAILS</p>
              <div class="payment-method">
                <label class="payment-method-title">Payment Method</label>
                <div class="radio-buttons" :class="{ unselected: !payment.isValid }">
                  <div class="radio-button">
                    <input
                      type="radio"
                      id="e-money"
                      name="payment"
                      value="e-money"
                      class="radio-input"
                      v-model="payment.val"
                    />
                    <label for="e-money" class="payment-option">e-Money</label>
                  </div>
                  <div class="radio-button">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      class="radio-input"
                      v-model="payment.val"
                    />
                    <label for="cash" class="payment-option">Cash on delivery</label>
                  </div>
                </div>
              </div>
              <div class="cash-delivery-description" v-if="showCashDeliveryDescription">
                <div>
                  <img :src="cartIconPath" class="cash-delivery-icon" alt="cash-delivery-icon" />
                </div>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                  arrives at your residence. Just make sure your address is correct so that your
                  order will not be cancelled.
                </p>
              </div>
              <div class="emoney-info">
                <div class="emoney-number form-input" :class="{ invalid: !emoneyNumber.isValid }">
                  <div class="d-flex">
                    <label for="emoney-number">e-Money Number</label>
                    <span v-if="!emoneyNumber.isValid">Wrong format</span>
                  </div>
                  <input
                    type="number"
                    id="emoney-number"
                    placeholder="238521993"
                    v-model.number="emoneyNumber.val"
                  />
                </div>
                <div class="emoney-pin form-input" :class="{ invalid: !emoneyPin.isValid }">
                  <div class="d-flex">
                    <label for="emoney-pin">e-Money PIN</label>
                    <span v-if="!emoneyPin.isValid">Wrong format</span>
                  </div>
                  <input
                    type="number"
                    id="emoney-pin"
                    placeholder="6891"
                    v-model.number="emoneyPin.val"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <Summary @show-modal="submitForm" />
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '@/components/Summary.vue';
import Header from '@/components/layout/Header.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    Summary,
    Header,
  },
  data() {
    return {
      showConfirmationModal: false,
      cartIconPath: '/assets/shared/desktop/icon-cart.svg',
      name: {
        val: '',
        isValid: true,
      },
      email: {
        val: '',
        isValid: true,
      },
      phoneNumber: {
        val: '',
        isValid: true,
      },
      address: {
        val: '',
        isValid: true,
      },
      zipCode: {
        val: null,
        isValid: true,
      },
      city: {
        val: '',
        isValid: true,
      },
      country: {
        val: '',
        isValid: true,
      },
      payment: {
        val: null,
        isValid: true,
      },
      emoneyNumber: {
        val: null,
        isValid: true,
      },
      emoneyPin: {
        val: null,
        isValid: true,
      },
      formIsValid: true,
    };
  },
  computed: {
    ...mapGetters(['grandTotal']),
    showCashDeliveryDescription() {
      return this.payment.val === 'cash' ? true : false;
    },
  },
  methods: {
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      this.showConfirmationModal = true;
    },
    validateEMoney() {
      if (!this.emoneyNumber.val || this.emoneyNumber.val.toString().length !== 9) {
        this.emoneyNumber.isValid = false;
        this.formIsValid = false;
      }
      if (!this.emoneyPin.val || this.emoneyPin.val.toString().length !== 4) {
        this.emoneyPin.isValid = false;
        this.formIsValid = false;
      }
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === '') {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === '' || !this.email.val.includes('@')) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (
        !(
          this.phoneNumber.val.search(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im
          ) > -1
        )
      ) {
        this.phoneNumber.isValid = false;
        this.formIsValid = false;
      }
      if (this.address.val === '') {
        this.address.isValid = false;
        this.formIsValid = false;
      }
      if (!this.zipCode.val || this.zipCode.val.toString().length !== 5) {
        this.zipCode.isValid = false;
        this.formIsValid = false;
      }
      if (this.city.val === '') {
        this.city.isValid = false;
        this.formIsValid = false;
      }
      if (this.country.val === '') {
        this.country.isValid = false;
        this.formIsValid = false;
      }
      if (!this.payment.val) {
        this.payment.isValid = false;
        this.formIsValid = false;
      }
      if (this.payment.val === 'e-money') {
        this.validateEMoney();
      }
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #f2f2f2;
}

.checkout {
  max-width: 111rem;
  margin: 0 auto;
}

.checkout-container {
  display: flex;
  gap: 3rem;
  margin-top: 3.8rem;
  align-items: flex-start;
}

.checkout-form {
  flex: 1;
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 5.4rem 4.8rem 4.8rem 4.8rem;
  margin-bottom: 14.1rem;
}

.subtitle {
  font-weight: var(--font-bold);
  font-size: 1.3rem;
  line-height: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-orange-dark);
  margin-bottom: 1.6rem;
}

.billing-details {
  margin-top: 4.1rem;
}

.shipping-info {
  margin-top: 5.3rem;
}

.payment-details {
  margin-top: 6.1rem;
}

.form-input {
  width: 31rem;
  margin-top: 2.4rem;
}

input {
  border-radius: 8px;
  width: 31rem;
  height: 5.6rem;
  padding-left: 2.4rem;
  margin-top: 0.9rem;
  border: 1px solid #cfcfcf;
}

.address-input {
  width: 100%;
}

.radio-buttons {
  width: 31rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.radio-button {
  border-radius: 8px;
  border: 1px solid black;
  padding-left: 2.4rem;
  display: flex;
  align-items: center;
  gap: 2.1rem;
  height: 5.6rem;
  border: 1px solid #cfcfcf;
}
.radio-input {
  width: 1.8rem;
  margin-top: 0;
}

.payment-method-title {
  flex: 1;
}

.cash-delivery-description {
  display: flex;
  gap: 2rem;
}

.cash-delivery-icon {
  filter: invert(72%) sepia(10%) saturate(4998%) hue-rotate(324deg) brightness(88%) contrast(91%);
}

.billing-name-email,
.shipping-zip-code-city,
.emoney-info,
.payment-method {
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
}

.d-flex {
  display: flex;
  justify-content: space-between;
}

.invalid label,
.invalid span {
  color: #cd2c2c;
}

.invalid input,
.invalid .radio-button {
  border: 2px solid #cd2c2c;
}

.unselected .radio-button {
  border: 2px solid #cd2c2c;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.dialog {
  position: absolute;
  top: 12rem;
  margin: auto;
  width: 54rem;
  height: 58rem;
  z-index: 100;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  background-color: white;
}

label {
  font-weight: var(--font-bold);
  font-size: 1.2rem;
  line-height: 1.64rem;
}

::placeholder {
  font-weight: var(--font-bold);
  font-size: 1.4rem;
  opacity: 0.4;
}

.payment-option {
  font-weight: var(--font-bold);
  font-size: 1.4rem;
}

/* input[type='radio']:after {
  width: 10px;
  height: 10px;
  border-radius: 15px;
  top: 21px;
  left: 3.1px;
  position: relative;
  background-color: var(--color-orange-dark);
  content: '';
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
} */
</style>
