<template>
  <Header class="header" mode="top" />
  <ConfirmationModal v-if="showConfirmationModal"></ConfirmationModal>
  <div class="background">
    <div class="checkout">
      <GoBack class="go-back-button" />

      <div class="checkout-container">
        <div class="checkout-form">
          <h3>CHECKOUT</h3>
          <form>
            <div class="billing-details">
              <p class="subtitle">BILLING DETAILS</p>
              <div class="billing-name-email">
                <div
                  class="billing-name form-input"
                  :class="{ invalid: !name.isValid, active: name.isActive }"
                >
                  <div class="d-flex">
                    <label for="name">Name</label>
                    <span v-if="!name.isValid">Wrong format</span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Alexei Ward"
                    v-model.trim="name.val"
                    @focus="name.isActive = true"
                    @blur="name.isActive = false"
                  />
                </div>
                <div
                  class="billing-email form-input"
                  :class="{ invalid: !email.isValid, active: email.isActive }"
                >
                  <div class="d-flex">
                    <label for="email">Email Address</label>
                    <span v-if="!email.isValid">Wrong format</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="alexei@mail.com"
                    v-model.trim="email.val"
                    @focus="email.isActive = true"
                    @blur="email.isActive = false"
                  />
                </div>
              </div>
              <div
                class="billing-phone-number form-input"
                :class="{ invalid: !phoneNumber.isValid, active: phoneNumber.isActive }"
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
                  @focus="phoneNumber.isActive = true"
                  @blur="phoneNumber.isActive = false"
                />
              </div>
            </div>
            <div class="shipping-info form-input">
              <p class="subtitle">SHIPPING INFO</p>
              <div
                class="shipping-address"
                :class="{ invalid: !address.isValid, active: address.isActive }"
              >
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
                  @focus="address.isActive = true"
                  @blur="address.isActive = false"
                />
              </div>
              <div class="shipping-zip-code-city">
                <div
                  class="shipping-zip-code form-input"
                  :class="{ invalid: !zipCode.isValid, active: zipCode.isActive }"
                >
                  <div class="d-flex">
                    <label for="zip-code">ZIP Code</label>
                    <span v-if="!zipCode.isValid">Wrong format</span>
                  </div>
                  <input
                    type="number"
                    id="zip-code"
                    placeholder="10001"
                    v-model.number="zipCode.val"
                    @focus="zipCode.isActive = true"
                    @blur="zipCode.isActive = false"
                  />
                </div>
                <div
                  class="shipping-city form-input"
                  :class="{ invalid: !city.isValid, active: city.isActive }"
                >
                  <div class="d-flex">
                    <label for="city">City</label>
                    <span v-if="!city.isValid">Wrong format</span>
                  </div>
                  <input
                    type="text"
                    id="city"
                    placeholder="New York"
                    v-model.trim="city.val"
                    @focus="city.isActive = true"
                    @blur="city.isActive = false"
                  />
                </div>
              </div>
              <div
                class="shipping-country form-input"
                :class="{ invalid: !country.isValid, active: country.isActive }"
              >
                <div class="d-flex">
                  <label for="country">Country</label>
                  <span v-if="!country.isValid">Wrong format</span>
                </div>
                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                  v-model.trim="country.val"
                  @focus="country.isActive = true"
                  @blur="country.isActive = false"
                />
              </div>
            </div>
            <div class="payment-details">
              <p class="subtitle">Payment DETAILS</p>
              <div class="payment-method">
                <label class="payment-method-title">Payment Method</label>
                <div class="radio-buttons">
                  <div class="radio-button" :class="{ active: emoney }">
                    <input
                      type="radio"
                      id="e-money"
                      name="payment"
                      value="e-money"
                      class="radio-input"
                      v-model="payment.val"
                      @click="emoney = true"
                      checked
                    />
                    <label for="e-money" class="payment-option">e-Money</label>
                  </div>
                  <div class="radio-button" :class="{ active: !emoney }">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      class="radio-input"
                      v-model="payment.val"
                      @click="emoney = false"
                    />
                    <label for="cash" class="payment-option">Cash on delivery</label>
                  </div>
                </div>
              </div>
              <div class="cash-delivery-description" v-if="!emoney">
                <div>
                  <img :src="cartIconPath" class="cash-delivery-icon" alt="cash-delivery-icon" />
                </div>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                  arrives at your residence. Just make sure your address is correct so that your
                  order will not be cancelled.
                </p>
              </div>
              <div class="emoney-info" v-if="emoney">
                <div
                  class="emoney-number form-input"
                  :class="{ invalid: !emoneyNumber.isValid, active: emoneyNumber.isActive }"
                >
                  <div class="d-flex">
                    <label for="emoney-number">e-Money Number</label>
                    <span v-if="!emoneyNumber.isValid">Wrong format</span>
                  </div>
                  <input
                    type="number"
                    id="emoney-number"
                    placeholder="238521993"
                    v-model.number="emoneyNumber.val"
                    @focus="emoneyNumber.isActive = true"
                    @blur="emoneyNumber.isActive = false"
                  />
                </div>
                <div
                  class="emoney-pin form-input"
                  :class="{ invalid: !emoneyPin.isValid, active: emoneyPin.isActive }"
                >
                  <div class="d-flex">
                    <label for="emoney-pin">e-Money PIN</label>
                    <span v-if="!emoneyPin.isValid">Wrong format</span>
                  </div>
                  <input
                    type="number"
                    id="emoney-pin"
                    placeholder="6891"
                    v-model.number="emoneyPin.val"
                    @focus="emoneyPin.isActive = true"
                    @blur="emoneyPin.isActive = false"
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
import { mapActions } from 'vuex';
import Summary from '@/components/Summary.vue';
import ConfirmationModal from '@/components/ConfirmationModal.vue';
import Header from '@/components/layout/Header.vue';

export default {
  components: {
    Summary,
    Header,
    ConfirmationModal,
  },
  data() {
    return {
      showConfirmationModal: false,
      emoney: true,

      cartIconPath: '/assets/shared/desktop/icon-cart.svg',
      name: {
        val: '',
        isValid: true,
        isActive: false,
      },
      email: {
        val: '',
        isValid: true,
        isActive: false,
      },
      phoneNumber: {
        val: '',
        isValid: true,
        isActive: false,
      },
      address: {
        val: '',
        isValid: true,
        isActive: false,
      },
      zipCode: {
        val: null,
        isValid: true,
        isActive: false,
      },
      city: {
        val: '',
        isValid: true,
        isActive: false,
      },
      country: {
        val: '',
        isValid: true,
        isActive: false,
      },
      payment: {
        val: null,
        isValid: true,
        isActive: false,
      },
      emoneyNumber: {
        val: null,
        isValid: true,
        isActive: false,
      },
      emoneyPin: {
        val: null,
        isValid: true,
        isActive: false,
      },
      formIsValid: true,
    };
  },

  methods: {
    ...mapActions(['getCartItems', 'emptyCart']),
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      this.showConfirmationModal = true;
    },
    isValid() {
      this.formIsValid = true;
      this.name.isValid = true;
      this.email.isValid = true;
      this.phoneNumber.isValid = true;
      this.address.isValid = true;
      this.zipCode.isValid = true;
      this.city.isValid = true;
      this.country.isValid = true;
      this.emoneyNumber.isValid = true;
      this.emoneyPin.isValid = true;
    },
    validateEMoney() {
      if (!this.emoneyNumber.val || this.emoneyNumber.val.toString().length !== 9) {
        this.emoneyNumber.isValid = false;
        this.formIsValid = false;
        return;
      }
      if (!this.emoneyPin.val || this.emoneyPin.val.toString().length !== 4) {
        this.emoneyPin.isValid = false;
        this.formIsValid = false;
        return;
      }
      this.formIsValid = true;
    },
    validateForm() {
      this.isValid();
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
      if (this.emoney) {
        this.validateEMoney();
      }
    },
  },
  created() {
    this.emptyCart();
    this.getCartItems();
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
  margin-top: 3rem;
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
  height: 2rem;
}

.invalid label,
.invalid span {
  color: #cd2c2c;
}

.invalid input {
  border: 2px solid #cd2c2c;
}

.active input,
.radio-button.active {
  outline: 0;
  border: 2px solid var(--color-orange-dark);
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

@media (max-width: 75em) {
  .checkout-container {
    flex-direction: column;
    align-items: center;
  }

  .checkout {
    padding-top: 3.2rem;
    width: 90%;
    margin: auto;
  }

  .go-back-button {
    margin-bottom: 2.4rem;
    margin-left: 5%;
  }

  .subtitle {
    margin-bottom: -1rem;
  }

  .checkout-form {
    padding: 3rem 2.7rem;
    margin-bottom: 0;
  }

  .shipping-info {
    margin-top: 5.3rem;
  }

  .shipping-address {
    margin-top: 1.6rem;
  }

  .form-input {
    margin-top: 1.6rem;
  }

  .payment-method {
    margin-top: 1.6rem;
  }

  .summary {
    width: 100%;
    margin-bottom: 11.6rem;
  }
}

@media (max-width: 43em) {
  .checkout {
    padding-top: 0;
  }

  .billing-name-email {
    flex-direction: column;
    gap: 0;
  }

  .checkout-container {
    width: 100%;
    margin: 0 auto;
  }

  .checkout-form {
    padding: 2.4rem 2.4rem 3.1rem 2.3rem;
    width: 90%;
  }

  input,
  .address-input {
    width: 100%;
  }

  .billing-details {
    margin-top: 3.2rem;
  }

  .form-input {
    margin-top: 2.4rem;
    width: 100%;
  }

  .shipping-info {
    margin-top: 3.2rem;
  }
  .shipping-zip-code-city {
    flex-direction: column;
    gap: 0;
  }

  .payment-details {
    margin-top: 3.2rem;
  }

  .payment-method {
    flex-direction: column;
  }

  .emoney-info {
    flex-direction: column;
    gap: 0;
  }

  .emoney-number {
    margin-top: 3.2rem;
  }

  .emoney-pin {
    margin-top: 3.2rem;
  }

  .go-back-button {
    padding-left: 5%;
  }

  .summary {
    padding: 3.2rem 2.4rem;
    width: 90%;
    margin-bottom: 9.7rem;
  }

  .checkout {
    width: 100%;
  }

  .checkout-container {
    gap: 3.2rem;
  }

  .radio-buttons {
    width: 100%;
  }
}
</style>
