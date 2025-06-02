<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title fade-in-up">
            Restaurant <span class="text-primary">Rindu Kampung</span>
          </h1>
          <p class="hero-motto fade-in-up">Land below the wind</p>
          <p class="hero-description fade-in-up">
            Experience the authentic flavors of Malaysian-Indonesian cuisine in a warm,
            welcoming atmosphere that brings the taste of home to your table.
          </p>
          <div class="hero-actions fade-in-up">
            <a href="#menu" class="btn btn-primary btn-large">View Menu</a>
            <a href="tel:+1234567890" class="btn btn-secondary btn-large">Make Reservation</a>
          </div>
        </div>

        <div class="hero-image">
          <div class="hero-image-placeholder">
            <div class="image-content">
              <img src="/rindu-kampung.jpg" alt="Restaurant Rindu Kampung" />
              <!-- <span class="image-text">Delicious Malaysian-Indonesian Cuisine</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive data needed for this component
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: calc(100vh - #{$navbar-height} - #{$marquee-height});
  display: flex;
  align-items: center;
  overflow: hidden;

  // Adjust for mobile navbar height
  @include mobile-only {
    min-height: calc(100vh - #{$navbar-height-mobile} - #{$marquee-height});
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, $bg-cream 0%, $bg-light 100%);
  z-index: -2;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba($primary-green, 0.1) 0%, transparent 50%);
  z-index: -1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-2xl;
  align-items: center;
  min-height: calc(100vh - #{$navbar-height} - #{$marquee-height} - #{$spacing-2xl});

  // Adjust for mobile navbar height
  @include mobile-only {
    min-height: calc(100vh - #{$navbar-height-mobile} - #{$marquee-height} - #{$spacing-2xl});
  }
}

.hero-text {
  text-align: center;
}

.hero-title {
  font-size: $font-size-5xl;
  font-weight: $font-weight-bold;
  color: $text-primary;
  margin-bottom: $spacing-md;
  line-height: $line-height-tight;
}

.hero-motto {
  font-size: $font-size-2xl;
  color: $text-secondary;
  font-style: italic;
  margin-bottom: $spacing-lg;
  font-family: $font-heading;
}

.hero-description {
  font-size: $font-size-lg;
  color: $text-secondary;
  max-width: 600px;
  margin: 0 auto $spacing-xl;
  line-height: $line-height-relaxed;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
  align-items: center;
}

.btn-large {
  padding: $spacing-md $spacing-xl;
  font-size: $font-size-lg;
  min-width: 200px;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-placeholder {
  width: 100%;
  max-width: 500px;
  height: 400px;
  border-radius: $radius-2xl;
  display: flex;
  align-items: center;
  justify-content: center;
  @include shadow-medium;
  position: relative;
  overflow: hidden;
}

.image-content {
  text-align: center;
  color: $text-on-green;
  z-index: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: $radius-2xl;
  }
}

.image-text {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  text-shadow: 0 2px 4px rgba($secondary-black, 0.3);
}

.scroll-indicator {
  position: absolute;
  bottom: $spacing-xl;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid $primary-green;
  border-bottom: 2px solid $primary-green;
  transform: rotate(45deg);
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  40% {
    transform: translateX(-50%) translateY(-10px);
  }

  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Responsive design */
@include tablet-up {
  .hero-content {
    grid-template-columns: 1fr 1fr;
    gap: $spacing-3xl;
  }

  .hero-text {
    text-align: left;
  }

  .hero-actions {
    flex-direction: row;
    justify-content: flex-start;
  }

  .hero-title {
    font-size: 3.5rem;
  }
}

@include desktop-up {
  .hero-title {
    font-size: 4rem;
  }

  .hero-description {
    font-size: $font-size-xl;
  }
}

@include mobile-only {
  .hero-title {
    font-size: $font-size-4xl;
  }

  .hero-motto {
    font-size: $font-size-xl;
  }

  .hero-description {
    font-size: $font-size-base;
  }

  .btn-large {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-base;
    min-width: 180px;
  }

  .hero-image-placeholder {
    height: 300px;
  }
}
</style>
