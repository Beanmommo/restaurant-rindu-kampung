<template>
  <section id="hours" class="section hours-location">
    <div class="container">
      <h2 class="section-title">Visit Us</h2>

      <div class="visit-info grid grid-2">
        <!-- Operating Hours -->
        <div class="hours-card card">
          <div class="card-header">
            <div class="icon-wrapper">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <h3>Operating Hours</h3>
          </div>

          <div class="hours-list">
            <div v-for="day in operatingHours" :key="day.day" class="hours-item"
              :class="{ 'today': day.isToday, 'closed': day.isClosed }">
              <span class="day">{{ day.day }}</span>
              <span class="time">{{ day.hours }}</span>
            </div>
          </div>

          <div class="hours-note">
            <p><strong>Note:</strong> Last order 30 minutes before closing</p>
          </div>
        </div>

        <!-- Location -->
        <div class="location-card card">
          <div class="card-header">
            <div class="icon-wrapper">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Location</h3>
          </div>

          <div class="location-info">
            <div class="address">
              <h4>Restaurant Rindu Kampung</h4>
              <p>123 Heritage Street<br>
                Little Malaysia District<br>
                City Center, State 12345</p>
            </div>

            <div class="contact-details">
              <div class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(555) 123-4567</span>
              </div>

              <div class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@rindukampung.com</span>
              </div>
            </div>

            <div class="location-actions">
              <a href="https://maps.google.com" target="_blank" class="btn btn-primary">
                Get Directions
              </a>
              <a href="tel:+15551234567" class="btn btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Map placeholder -->
      <div class="map-section">
        <div class="map-placeholder">
          <div class="map-content">
            <svg class="map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h4>Find Us Here</h4>
            <p>Click to view interactive map</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface OperatingDay {
  day: string
  hours: string
  isToday: boolean
  isClosed: boolean
}

const getCurrentDay = (): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[new Date().getDay()]
}

const operatingHours = computed((): OperatingDay[] => {
  const today = getCurrentDay()

  return [
    {
      day: 'Monday',
      hours: '10:00 AM - 09:30 PM',
      isToday: today === 'Monday',
      isClosed: false
    },
    {
      day: 'Tuesday',
      hours: '10:00 AM - 09:30 PM',
      isToday: today === 'Tuesday',
      isClosed: false
    },
    {
      day: 'Wednesday',
      hours: '10:00 AM - 09:30 PM',
      isToday: today === 'Wednesday',
      isClosed: false
    },
    {
      day: 'Thursday',
      hours: '10:00 AM - 09:30 PM',
      isToday: today === 'Thursday',
      isClosed: false
    },
    {
      day: 'Friday',
      hours: '10:00 AM - 09:30 PM',
      isToday: today === 'Friday',
      isClosed: false
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 09:30 PM',
      isToday: today === 'Saturday',
      isClosed: false
    },
    {
      day: 'Sunday',
      hours: '10:00 AM - 09:30 PM',
      isToday: today === 'Sunday',
      isClosed: false
    }
  ]
})
</script>

<style lang="scss" scoped>
.hours-location {
  background: $bg-cream;
}

.visit-info {
  margin-bottom: 3rem;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border-color);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: $primary-green;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 24px;
  height: 24px;
  color: $text-on-green;
  stroke-width: 2;
}

.card-header h3 {
  margin: 0;
  color: $text-primary;
  font-size: 1.5rem;
}

.hours-list {
  margin-bottom: 1.5rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.hours-item:last-child {
  border-bottom: none;
}

.hours-item.today {
  background: rgba(212, 175, 55, 0.1);
  margin: 0 -1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-bottom: 1px solid var(--border-color);
}

.hours-item.today .day {
  font-weight: 600;
  color: $primary-green;
}

.hours-item.closed .time {
  color: $accent-red;
  font-weight: 500;
}

.day {
  font-weight: 500;
  color: $text-primary;
}

.time {
  color: $text-secondary;
  font-weight: 400;
}

.hours-note {
  background: $bg-light-green;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid $primary-green;
}

.hours-note p {
  margin: 0;
  font-size: 0.9rem;
  color: $text-secondary;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.address h4 {
  color: $text-primary;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.address p {
  color: $text-secondary;
  line-height: 1.6;
  margin: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: $primary-green;
  stroke-width: 2;
}

.contact-item span {
  color: $text-secondary;
  font-weight: 500;
}

.location-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.map-section {
  margin-top: 2rem;
}

.map-placeholder {
  height: 300px;
  background: linear-gradient(135deg, $bg-light-green 0%, #F0F0F0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed $border-light;
  cursor: pointer;
  transition: all 0.3s ease;
}

.map-placeholder:hover {
  border-color: $primary-green;
  background: linear-gradient(135deg, rgba($primary-green, 0.1) 0%, #F0F0F0 100%);
}

.map-content {
  text-align: center;
  color: $text-secondary;
}

.map-icon {
  width: 48px;
  height: 48px;
  color: $primary-green;
  margin-bottom: 1rem;
  stroke-width: 1.5;
}

.map-content h4 {
  color: $text-primary;
  margin-bottom: 0.5rem;
}

.map-content p {
  margin: 0;
  font-size: 0.9rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .location-actions {
    flex-direction: column;
  }

  .location-actions .btn {
    width: 100%;
  }

  .contact-details {
    gap: 0.75rem;
  }

  .map-placeholder {
    height: 250px;
  }
}
</style>
