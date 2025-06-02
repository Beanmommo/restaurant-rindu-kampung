<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <div class="navbar-brand">
          <img src="/favicon.ico" alt="Restaurant Rindu Kampung" class="logo" />
          <span class="brand-text">Rindu Kampung</span>
        </div>

        <!-- Desktop Menu -->
        <div class="navbar-menu" :class="{ 'navbar-menu-open': isMenuOpen }">
          <a href="#home" class="navbar-link" @click="closeMenu">Home</a>
          <a href="#menu" class="navbar-link" @click="closeMenu">Menu</a>
          <a href="#about" class="navbar-link" @click="closeMenu">About</a>
          <a href="#hours" class="navbar-link" @click="closeMenu">Hours</a>
          <a href="#contact" class="navbar-link" @click="closeMenu">Contact</a>
          <a href="tel:+1234567890" class="btn btn-primary navbar-cta">Call Now</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="navbar-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu">
          <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.98);
  border-bottom-color: $border-light;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: $text-primary;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.brand-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: $text-primary;
}

.navbar-menu {
  display: none;
  align-items: center;
  gap: 2rem;
}

.navbar-link {
  text-decoration: none;
  color: $text-primary;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.navbar-link:hover {
  color: $primary-green;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: $primary-green;
  transition: width 0.3s ease;
}

.navbar-link:hover::after {
  width: 100%;
}

.navbar-cta {
  margin-left: 1rem;
}

.navbar-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  gap: 4px;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: $text-primary;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile menu */
@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .navbar-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar-cta {
    margin-left: 0;
    margin-top: 1rem;
  }
}

/* Desktop menu */
@media (min-width: 769px) {
  .navbar-menu {
    display: flex;
  }

  .navbar-toggle {
    display: none;
  }
}
</style>
