<template>
  <div class="halal-marquee">
    <div class="marquee-content">
      <div class="marquee-text">
        <span class="halal-icon">🥩</span>
        <span class="text">CERTIFIED HALAL</span>
        <span class="separator">•</span>
        <span class="text">100% HALAL INGREDIENTS</span>
        <span class="separator">•</span>
        <span class="text">AUTHENTIC MALAYSIAN-INDONESIAN CUISINE</span>
        <span class="separator">•</span>
        <span class="text">HALAL CERTIFIED RESTAURANT</span>
        <span class="separator">•</span>
        <span class="halal-icon">🥩</span>
        <span class="text">CERTIFIED HALAL</span>
        <span class="separator">•</span>
        <span class="text">100% HALAL INGREDIENTS</span>
        <span class="separator">•</span>
        <span class="text">AUTHENTIC MALAYSIAN-INDONESIAN CUISINE</span>
        <span class="separator">•</span>
        <span class="text">HALAL CERTIFIED RESTAURANT</span>
        <span class="separator">•</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Halal certification marquee component
</script>

<style lang="scss" scoped>
.halal-marquee {
  background: linear-gradient(90deg, $primary-green 0%, $primary-green-dark 100%);
  color: $text-on-green;
  height: $marquee-height;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  position: fixed;
  top: $navbar-height;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 2px solid $primary-green-dark;
  box-shadow: 0 2px 8px rgba($primary-green-dark, 0.3);

  // Ensure it's attached to navbar on mobile
  @include mobile-only {
    top: $navbar-height-mobile; // Use mobile-specific navbar height
  }
}

.marquee-content {
  display: flex;
  animation: scroll 30s linear infinite;
}

.marquee-text {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  font-weight: $font-weight-semibold;
  font-size: $font-size-sm;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.text {
  color: $text-on-green;
  font-family: $font-heading;
  font-weight: $font-weight-bold;
}

.separator {
  color: rgba($text-on-green, 0.7);
  font-weight: $font-weight-bold;
}

.halal-icon {
  font-size: 1.2em;
  filter: brightness(1.2);
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

/* Responsive design */
@include mobile-only {
  .marquee-text {
    font-size: $font-size-xs;
    gap: $spacing-sm;
  }
}

@include tablet-up {
  .marquee-text {
    font-size: $font-size-base;
  }
}

/* Pause animation on hover */
.halal-marquee:hover .marquee-content {
  animation-play-state: paused;
}

/* Add a subtle glow effect */
.halal-marquee::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%);
  animation: shine 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shine {

  0%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>
