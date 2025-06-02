<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="about-content">
        <!-- Main About Content -->
        <div class="about-main">
          <div class="about-text">
            <h2 class="section-title">About Restaurant Rindu Kampung</h2>
            <div class="about-story">
              <p class="lead">
                "Rindu Kampung" means "longing for home" in Bahasa, and that's exactly what we bring to your table –
                the authentic taste of home from Indonesia and Malaysia.
              </p>

              <p>
                Founded in 2018 by Chef Siti Rahman, our restaurant was born from a deep passion for preserving
                and sharing the rich culinary traditions of Southeast Asia. Having grown up in Kuala Lumpur and
                later trained in Jakarta, Chef Siti brings decades of experience and family recipes passed down
                through generations.
              </p>

              <p>
                Every dish we serve tells a story – from our signature Nasi Lemak that takes you to the bustling
                streets of Malaysia, to our slow-cooked Rendang that captures the essence of Indonesian home cooking.
                We source our spices directly from local farmers in Southeast Asia, ensuring every bite is as
                authentic as it would be in our homeland.
              </p>
            </div>
          </div>

          <div class="about-image">
            <div class="image-placeholder">
              <div class="image-content">
                <span class="chef-emoji">👨‍🍳</span>
                <p>Chef Siti Rahman</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Values & Features -->
        <div class="about-features">
          <h3 class="features-title">What Makes Us Special</h3>
          <div class="features-grid grid grid-3">
            <div class="feature-card card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h4>Authentic Recipes</h4>
              <p>Traditional family recipes passed down through generations, prepared with love and respect for
                heritage.</p>
            </div>

            <div class="feature-card card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z" />
                  <path d="M3.29 7L12 12l8.71-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <h4>Fresh Ingredients</h4>
              <p>We source the finest spices and ingredients directly from Southeast Asia to ensure authentic flavors.
              </p>
            </div>

            <div class="feature-card card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Family Atmosphere</h4>
              <p>A warm, welcoming environment where every guest is treated like family, just like back home.</p>
            </div>
          </div>
        </div>

        <!-- Awards & Recognition -->
        <div class="about-awards">
          <h3 class="awards-title">Recognition & Awards</h3>
          <div class="awards-list">
            <div class="award-item">
              <div class="award-icon">🏆</div>
              <div class="award-text">
                <h4>Best Southeast Asian Restaurant 2023</h4>
                <p>City Food & Wine Awards</p>
              </div>
            </div>

            <div class="award-item">
              <div class="award-icon">⭐</div>
              <div class="award-text">
                <h4>4.8/5 Customer Rating</h4>
                <p>Based on 500+ reviews</p>
              </div>
            </div>

            <div class="award-item">
              <div class="award-icon">📰</div>
              <div class="award-text">
                <h4>Featured in Local Food Magazine</h4>
                <p>"Hidden Gems of the City" - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive data needed for this component
</script>

<style lang="scss" scoped>
.about-section {
  background: $bg-cream;
}

.about-content {
  max-width: 1000px;
  margin: 0 auto;
}

.about-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.about-story .lead {
  font-size: 1.25rem;
  font-weight: 500;
  color: $primary-green;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.about-story p {
  color: $text-secondary;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 400px;
  height: 300px;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--border-color) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 3px solid var(--primary-color);
}

.image-content {
  text-align: center;
  color: var(--text-dark);
}

.chef-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
}

.image-content p {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-dark);
}

.about-features {
  margin-bottom: 4rem;
}

.features-title,
.awards-title {
  text-align: center;
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-size: 1.75rem;
}

.features-grid {
  margin-bottom: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem 1.5rem;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: $primary-green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.feature-icon svg {
  width: 28px;
  height: 28px;
  color: $text-on-green;
  stroke-width: 2;
}

.feature-card h4 {
  color: $text-primary;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.feature-card p {
  color: $text-secondary;
  line-height: 1.6;
  margin: 0;
}

.about-awards {
  background: $bg-light-green;
  padding: 3rem 2rem;
  border-radius: 20px;
  border: 2px solid $border-light;
}

.awards-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.award-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.award-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.award-text h4 {
  color: $text-primary;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.award-text p {
  color: $text-secondary;
  margin: 0;
  font-size: 0.9rem;
}

/* Responsive design */
@media (min-width: 768px) {
  .about-main {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .awards-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .about-main {
    gap: 5rem;
  }
}

@media (max-width: 767px) {
  .about-awards {
    padding: 2rem 1.5rem;
  }

  .award-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .feature-card {
    padding: 1.5rem 1rem;
  }

  .features-title,
  .awards-title {
    font-size: 1.5rem;
  }
}
</style>
