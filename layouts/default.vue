<template>
  <div class="app-layout">
    <!-- Navigation -->
    <NavigationBar />

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Layout component for consistent navigation and footer across pages
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
@import "~/assets/scss/mixins";

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: $navbar-height; // Account for fixed navbar
}
</style>
