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

@media (max-width: 52em) {
  .footer-header {
    flex-direction: column;
    padding-top: 6rem;
    gap: 3.2rem;
  }

  .logo-icon {
    width: 14.3rem;
    height: 2.5rem;
  }

  .footer-container {
    width: 90%;
  }

  .footer-text {
    width: 100%;
    margin-top: 3.2rem;
    margin-bottom: 8rem;
  }

  .footer-icons {
    margin-top: 0;
  }

  .footer {
    height: 40rem;
  }
}

@media (max-width: 39em) {
  .footer {
    overflow: hidden;
    height: 65.4rem;
  }

  .footer-header {
    gap: 4.8rem;
    padding-top: 5.2rem;
  }

  .logo-icon {
    align-self: center;
  }

  .footer-text {
    text-align: center;
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
  }

  .footer-container {
    width: 88%;
  }

  .footer-footer {
    flex-direction: column;
    align-items: center;
    gap: 4.8rem;
  }

  .orange-line {
    margin-left: 16.6rem;
  }
}
</style>
