<template>
  <section id="menu" class="section menu-preview">
    <div class="container">
      <h2 class="section-title">Our Signature Dishes</h2>
      <p class="section-subtitle">
        Discover the authentic flavors of Malaysia and Indonesia
      </p>

      <div class="menu-categories">
        <button v-for="category in categories" :key="category.id" class="category-btn"
          :class="{ 'active': activeCategory === category.id }" @click="setActiveCategory(category.id)">
          {{ category.name }}
        </button>
      </div>

      <div class="menu-items grid grid-3">
        <div v-for="item in filteredItems" :key="item.id" class="menu-item card">
          <div class="menu-item-image">
            <div class="image-container">
              <img v-if="item.image" :src="item.image" :alt="item.name" class="food-image" loading="lazy" />
              <div v-else class="image-placeholder">
                <span class="cuisine-flag">{{ item.flag }}</span>
              </div>
            </div>
            <div class="item-badge" v-if="item.isSpecial">Special</div>
          </div>

          <div class="menu-item-content">
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="item-description">{{ item.description }}</p>
            <div class="item-footer">
              <span class="item-price">${{ item.price }}</span>
              <span class="item-origin">{{ item.origin }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-cta">
        <a href="#contact" class="btn btn-primary btn-large">View Full Menu</a>
        <a href="tel:+1234567890" class="btn btn-secondary btn-large">Order Now</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  origin: string
  flag: string
  isSpecial?: boolean
  image?: string
}

interface Category {
  id: string
  name: string
}

const activeCategory = ref('all')

const categories: Category[] = [
  { id: 'all', name: 'All Dishes' },
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' }
]

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Nasi Lemak Ayam Berempah',
    description: 'Fragrant coconut rice served with sambal, anchovies, peanuts, and boiled egg',
    price: 18.90,
    category: 'mains',
    origin: 'Malaysian',
    flag: '🇲🇾',
    isSpecial: true,
    image: 'https://scontent.fmel5-1.fna.fbcdn.net/v/t39.30808-6/494738194_122128110980755045_4955128547602220690_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vzL_uIpRrUIQ7kNvwG-Ondd&_nc_oc=Adn1eYRtRmTUWx9wNMB8pM89CKtTy6Fv7OpRol24H6hecYDDgFmtCp0l1yF0SvIakZ4&_nc_zt=23&_nc_ht=scontent.fmel5-1.fna&_nc_gid=17vNx3vx8mnxi9If3ZmN3Q&oh=00_AfK8sQ5lRMQvb4Kk6zlW7oXeWgPA8GPNbtFr-Y_5CfFh_g&oe=6842D6FE'
  },
  {
    id: 2,
    name: 'Nasi Goreng Tuhau',
    description: 'Indonesian fried rice with chicken, shrimp, and vegetables, served with fried egg',
    price: 19.90,
    category: 'mains',
    origin: 'Indonesian',
    flag: '🇮🇩',
    isSpecial: true,
    image: 'https://scontent.fmel5-1.fna.fbcdn.net/v/t39.30808-6/494353296_122128142648755045_4657680409170025647_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OiY2-S0MXrgQ7kNvwGTyqAw&_nc_oc=AdmzeMpdl9Vs6QMGOA6Se8Lj8AsCseHDaUT1o0Y8tDTTKeYfSKWcmK3226ERj7CP238&_nc_zt=23&_nc_ht=scontent.fmel5-1.fna&_nc_gid=R9dmu-5_XPzYdlHoGEyw0w&oh=00_AfJnVkMgKIlmJLI5pCifkWHbiJ5i3iVq3hOzgtUqsKiK7A&oe=6842DDC1'
  },
  {
    id: 3,
    name: 'Ayam Betutu Bali',
    description: 'Grilled marinated chicken skewers with peanut sauce and cucumber salad',
    price: 16.90,
    category: 'mains',
    origin: 'Indonesian',
    flag: '🇮🇩',
    image: 'https://scontent.fmel5-1.fna.fbcdn.net/v/t39.30808-6/494545952_122128142612755045_1462193410104805287_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N17y320MErMQ7kNvwHsoiog&_nc_oc=AdmS8MMjDnYReW4BnNLIveSNbp50-FXlid9eHgZgSLRhnP_6oUda0z42qtcQf2sobFQ&_nc_zt=23&_nc_ht=scontent.fmel5-1.fna&_nc_gid=eh_8EOS7Up5XUdhRZNMSfg&oh=00_AfJ2l5tsaa-vc_8MgcaM7Y4kqyiaPa8NvImOIoMx0tiReQ&oe=6842F892'
  },
  {
    id: 4,
    name: 'Gado-Gado',
    description: 'Indonesian salad with mixed vegetables, tofu, and peanut dressing',
    price: 15.90,
    category: 'appetizers',
    origin: 'Indonesian',
    flag: '🇮🇩',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 5,
    name: 'Kewetiau Kungfu',
    description: 'Stir-fried rice noodles with prawns, and bean sprouts',
    price: 19.90,
    category: 'mains',
    origin: 'Malaysian',
    flag: '🇲🇾',
    image: 'https://scontent.fmel5-1.fna.fbcdn.net/v/t39.30808-6/494472088_122128142624755045_6255626169059163623_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YhbAKjclgGYQ7kNvwHQWjbJ&_nc_oc=Adk9ZTBOiI3LPEWTortLZKwLCddpwrw60GHRQkdSwrkwZbnUHf3LqHvvoi8xxxCTY7w&_nc_zt=23&_nc_ht=scontent.fmel5-1.fna&_nc_gid=mM_cuz3VNonfgLvuBjH4Sg&oh=00_AfJti1KP-WyEjcn8cNZZYISl1ZS0TXt8eZNt2uKeS-uDNA&oe=6842D7D5'
  },
  {
    id: 6,
    name: 'Cendol',
    description: 'Traditional dessert with pandan jelly, coconut milk, and palm sugar',
    price: 8.90,
    category: 'desserts',
    origin: 'Malaysian',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop&crop=center'
  }
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return menuItems
  }
  return menuItems.filter(item => item.category === activeCategory.value)
})

const setActiveCategory = (categoryId: string) => {
  activeCategory.value = categoryId
}
</script>

<style lang="scss" scoped>
.menu-preview {
  background: $bg-light-green;
}

.section-subtitle {
  text-align: center;
  color: $text-secondary;
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.menu-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid $border-light;
  background: white;
  color: $text-secondary;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover,
.category-btn.active {
  background: $primary-green;
  color: $text-on-green;
  border-color: $primary-green;
}

.menu-item {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.menu-item-image {
  position: relative;
  height: 200px;
  margin-bottom: 1.5rem;
}

.image-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.food-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.food-image:hover {
  transform: scale(1.05);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, $primary-green 0%, $primary-green-dark 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.image-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  background-image: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.cuisine-flag {
  font-size: 3rem;
  z-index: 1;
  position: relative;
}

.item-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: $accent-red;
  color: $text-on-green;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
}

.menu-item-content {
  padding: 0 0.5rem;
}

.item-name {
  color: $text-primary;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.item-description {
  color: $text-secondary;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-price {
  font-size: 1.25rem;
  font-weight: 600;
  color: $primary-green;
}

.item-origin {
  font-size: 0.875rem;
  color: $text-secondary;
  font-style: italic;
}

.menu-cta {
  text-align: center;
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive design */
@media (max-width: 768px) {
  .menu-categories {
    gap: 0.5rem;
  }

  .category-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .menu-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn-large {
    width: 100%;
    max-width: 250px;
  }
}
</style>
