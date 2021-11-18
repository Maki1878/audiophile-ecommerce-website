<template>
  <div class="footer">
    <div class="footer-container">
      <div class="orange-line"></div>
      <div class="footer-header">
        <img :src="logoIconPath" class="logo-icon" alt="logo" />
        <Navbar />
      </div>
      <p class="footer-text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we’re open 7 days a week.
      </p>
      <div class="footer-footer">
        <p class="footer-copyright">Copyright 2021. All Rights Reserved</p>
        <div class="footer-icons">
          <img :src="facebookIconPath" class="facebook-icon" alt="facebook-icon" />
          <img :src="twitterIconPath" class="twitter-icon" alt="twitter-icon" />
          <img :src="instagramIconPath" class="instagram-icon" alt="instagram-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../Navbar.vue';
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      logoIconPath: '/assets/shared/desktop/logo.svg',
      facebookIconPath: '/assets/shared/desktop/icon-facebook.svg',
      instagramIconPath: '/assets/shared/desktop/icon-instagram.svg',
      twitterIconPath: '/assets/shared/desktop/icon-twitter.svg',
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #101010;
  height: 36.5rem;
}

.footer-container {
  width: 77%;
  margin: 0 auto;
}

.footer-header {
  display: flex;
  justify-content: space-between;
  padding-top: 7.1rem;
}

.footer-text {
  opacity: 0.5;
  color: var(--color-white);
  width: 49%;
  margin-top: 3.6rem;
  margin-bottom: 5.6rem;
}

.footer-footer {
  display: flex;
  justify-content: space-between;
}

.footer-copyright {
  color: var(--color-white);
  opacity: 0.5;
}

.footer-icons {
  margin-top: -10rem;
}

.twitter-icon {
  margin-left: 1.6rem;
  margin-right: 1.6rem;
}

.twitter-icon:hover {
  filter: invert(71%) sepia(12%) saturate(5375%) hue-rotate(326deg) brightness(90%) contrast(86%);
  cursor: pointer;
}

.facebook-icon:hover {
  filter: invert(71%) sepia(12%) saturate(5375%) hue-rotate(326deg) brightness(90%) contrast(86%);
  cursor: pointer;
}

.instagram-icon:hover {
  filter: invert(71%) sepia(12%) saturate(5375%) hue-rotate(326deg) brightness(90%) contrast(86%);
  cursor: pointer;
}

.orange-line {
  height: 4px;
  width: 10.01rem;
  background-color: var(--color-orange-dark);
}
</style>
