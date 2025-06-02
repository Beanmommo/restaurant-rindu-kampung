<template>
  <div class="homepage">
    <!-- Halal Certification Marquee -->
    <HalalMarquee />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Menu Preview -->
    <MenuPreview />

    <!-- CTA Section -->
    <CTAButtons />

    <!-- About Section -->
    <AboutSection />

    <!-- Hours and Location -->
    <HoursLocation />

    <!-- Contact Information -->
    <ContactInfo />

  </div>
</template>

<script setup lang="ts">
// Set page meta
useHead({
  title: 'Restaurant Rindu Kampung - Authentic Malaysian-Indonesian Cuisine',
  meta: [
    {
      name: 'description',
      content: 'Experience authentic Malaysian-Indonesian cuisine at Restaurant Rindu Kampung. Land below the wind - bringing the taste of home to your table.'
    }
  ]
})
</script>

<style lang="scss" scoped>
.homepage {
  min-height: 100vh;
}
</style>
