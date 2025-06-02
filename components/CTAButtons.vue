<template>
  <section class="section cta-section">
    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2 class="cta-title">Ready to Experience Authentic Flavors?</h2>
          <p class="cta-description">
            Book your table now or order online for pickup and delivery.
            Let us bring the taste of Malaysia and Indonesia to you.
          </p>
        </div>

        <div class="cta-actions">
          <div class="cta-buttons">
            <!-- Call to Book -->
            <div class="cta-button-group">
              <a href="tel:+15551234567" class="btn btn-primary btn-large cta-btn" @click="trackCTAClick('call')">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Book
              </a>
              <span class="cta-subtitle">Reservations & Inquiries</span>
            </div>

            <!-- Order Online -->
            <div class="cta-button-group">
              <a href="#contact" class="btn btn-accent btn-large cta-btn" @click="trackCTAClick('order')">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Order Online
              </a>
              <span class="cta-subtitle">Pickup & Delivery</span>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="cta-info">
            <div class="info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <div class="info-text">
                <span class="info-label">Quick Service</span>
                <span class="info-value">15-20 min pickup</span>
              </div>
            </div>

            <div class="info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div class="info-text">
                <span class="info-label">Free Delivery</span>
                <span class="info-value">Orders over $30</span>
              </div>
            </div>

            <div class="info-item">
              <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <div class="info-text">
                <span class="info-label">Group Bookings</span>
                <span class="info-value">Call for parties 8+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Track CTA button clicks for analytics
const trackCTAClick = (action: string) => {
  // In a real app, you would send this to your analytics service
  console.log(`CTA clicked: ${action}`)

  // Example: Google Analytics event tracking
  // gtag('event', 'cta_click', {
  //   'event_category': 'engagement',
  //   'event_label': action
  // })
}
</script>

<style lang="scss" scoped>
.cta-section {
  background: linear-gradient(135deg, $primary-green 0%, $primary-green-dark 100%);
  color: $text-on-green;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="pattern" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23pattern)"/></svg>');
  opacity: 0.3;
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: $text-on-green;
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 3rem;
  color: rgba($text-on-green, 0.95);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.cta-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  min-width: 200px;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.btn-icon {
  width: 20px;
  height: 20px;
  stroke-width: 2;
}

.cta-subtitle {
  font-size: 0.875rem;
  opacity: 0.8;
  font-weight: 500;
}

.cta-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 600px;
  width: 100%;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.info-icon {
  width: 24px;
  height: 24px;
  stroke-width: 2;
  color: $text-on-green;
  flex-shrink: 0;
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: $text-on-green;
}

.info-value {
  font-size: 0.8rem;
  color: rgba($text-on-green, 0.9);
}

/* Responsive design */
@media (min-width: 768px) {
  .cta-info {
    grid-template-columns: repeat(3, 1fr);
  }

  .info-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .info-text {
    align-items: center;
  }
}

@media (max-width: 767px) {
  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  .cta-btn {
    width: 100%;
    max-width: 300px;
  }

  .cta-info {
    gap: 1rem;
  }

  .info-item {
    padding: 0.75rem 1rem;
  }
}

@media (max-width: 480px) {
  .cta-title {
    font-size: 1.75rem;
  }

  .cta-btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    min-width: auto;
  }
}
</style>
