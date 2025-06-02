<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="brand-logo">
              <img src="/favicon.ico" alt="Restaurant Rindu Kampung" class="footer-logo" />
              <div class="brand-info">
                <h3>Restaurant Rindu Kampung</h3>
                <p class="brand-motto">Land below the wind</p>
              </div>
            </div>
            <p class="brand-description">
              Authentic Malaysian-Indonesian cuisine that brings the taste of home to your table.
            </p>
          </div>

          <div class="footer-links">
            <div class="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#hours">Hours</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div class="link-group">
              <h4>Services</h4>
              <ul>
                <li><a href="tel:+15551234567">Dine In</a></li>
                <li><a href="tel:+15551234567">Takeout</a></li>
                <li><a href="#contact">Delivery</a></li>
                <li><a href="#contact">Catering</a></li>
                <li><a href="tel:+15551234567">Reservations</a></li>
              </ul>
            </div>

            <div class="link-group">
              <h4>Contact</h4>
              <ul>
                <li>123 Heritage Street</li>
                <li>City Center, State 12345</li>
                <li><a href="tel:+15551234567">(555) 123-4567</a></li>
                <li><a href="mailto:info@rindukampung.com">info@rindukampung.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          <div class="footer-copyright">
            <p>&copy; {{ currentYear }} Restaurant Rindu Kampung. All rights reserved.</p>
            <p class="footer-note">Made with ❤️ for authentic Malaysian-Indonesian cuisine lovers</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.footer {
  background: $secondary-black;
  color: $text-on-green;
  padding: $spacing-3xl 0 $spacing-md;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-xl;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-2xl;

  @include tablet-up {
    grid-template-columns: 1fr 2fr;
    gap: $spacing-3xl;
  }
}

.footer-brand {
  max-width: 400px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  margin-bottom: $spacing-md;
}

.footer-logo {
  width: 50px;
  height: 50px;
  border-radius: $radius-md;
}

.brand-info h3 {
  color: $text-on-green;
  margin-bottom: $spacing-xs;
  font-size: $font-size-xl;
  font-family: $font-heading;
}

.brand-motto {
  color: $primary-green;
  font-style: italic;
  margin: 0;
  font-size: $font-size-sm;
  font-family: $font-heading;
}

.brand-description {
  color: rgba($text-on-green, 0.8);
  line-height: $line-height-relaxed;
  margin: 0;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: $spacing-xl;
}

.link-group h4 {
  color: $primary-green;
  margin-bottom: $spacing-md;
  font-size: $font-size-lg;
  font-family: $font-heading;
}

.link-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-group li {
  margin-bottom: $spacing-sm;
}

.link-group a {
  color: rgba($text-on-green, 0.8);
  text-decoration: none;
  transition: $transition-colors;

  &:hover {
    color: $primary-green;
  }
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
  align-items: center;
  padding-top: $spacing-xl;
  border-top: 1px solid rgba($text-on-green, 0.1);

  @include tablet-up {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-social {
  display: flex;
  gap: $spacing-md;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba($text-on-green, 0.1);
  border-radius: $radius-md;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-on-green;
  transition: $transition-all;

  &:hover {
    background: $primary-green;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

.footer-copyright {
  text-align: center;

  @include tablet-up {
    text-align: right;
  }

  p {
    color: rgba($text-on-green, 0.6);
    margin-bottom: $spacing-sm;
    font-size: $font-size-sm;
  }
}

.footer-note {
  font-size: $font-size-xs !important;
  color: rgba($text-on-green, 0.5) !important;
}

@include desktop-up {
  .footer {
    padding: $spacing-4xl 0 $spacing-lg;
  }
}
</style>
