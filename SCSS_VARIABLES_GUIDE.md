# Restaurant Rindu Kampung - SCSS Variables Guide

## 🎨 **New Green & Black Color Scheme**

The website now uses a sophisticated green and black color palette that reflects the natural, earthy tones of Malaysian-Indonesian cuisine.

## 📁 **SCSS File Structure**

```
assets/scss/
├── _variables.scss    # All color, spacing, typography variables
├── _mixins.scss      # Reusable SCSS mixins and functions
├── _components.scss  # Component-specific styles
├── _utilities.scss   # Utility classes
└── main.scss        # Main entry point that imports everything
```

## 🎨 **Color Variables**

### Primary Colors (Green Theme)
```scss
$primary-green: #2D5016;        // Dark Forest Green - Main brand color
$primary-green-light: #4A7C59;  // Medium Green - Hover states
$primary-green-lighter: #6B8E5A; // Light Green - Accents
$primary-green-dark: #1A3009;   // Very Dark Green - Active states
```

### Secondary Colors (Black Theme)
```scss
$secondary-black: #1A1A1A;      // Pure Black - Text and backgrounds
$secondary-charcoal: #2C2C2C;   // Charcoal - Secondary backgrounds
$secondary-gray: #4A4A4A;       // Dark Gray - Secondary text
$secondary-gray-light: #6B6B6B; // Medium Gray - Muted text
```

### Accent Colors
```scss
$accent-gold: #D4AF37;          // Gold - Special highlights
$accent-red: #DC143C;           // Crimson - Alerts/special items
$accent-orange: #FF8C00;        // Dark Orange - CTAs
```

### Background Colors
```scss
$bg-primary: #FFFFFF;           // White - Main background
$bg-secondary: #F8F9FA;         // Light gray - Secondary background
$bg-light: #F5F7F5;            // Very light green tint
$bg-dark: $secondary-black;     // Dark background
$bg-green: $primary-green;      // Green background
$bg-green-light: rgba($primary-green-light, 0.1); // Light green overlay
```

## 📏 **Spacing Variables**

```scss
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
$spacing-2xl: 3rem;     // 48px
$spacing-3xl: 4rem;     // 64px
$spacing-4xl: 5rem;     // 80px
```

## 🔤 **Typography Variables**

### Font Families
```scss
$font-primary: 'Inter', sans-serif;           // Body text
$font-heading: 'Playfair Display', serif;     // Headings
```

### Font Sizes
```scss
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-2xl: 1.5rem;    // 24px
$font-size-3xl: 1.875rem;  // 30px
$font-size-4xl: 2.25rem;   // 36px
$font-size-5xl: 3rem;      // 48px
```

### Font Weights
```scss
$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

## 📱 **Responsive Breakpoints**

```scss
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;
$breakpoint-2xl: 1536px;
```

## 🎯 **Using Mixins**

### Responsive Mixins
```scss
@include mobile-only { /* styles for mobile only */ }
@include tablet-up { /* styles for tablet and up */ }
@include desktop-up { /* styles for desktop and up */ }
```

### Button Mixins
```scss
.my-button {
  @include button-primary;  // Green button with hover effects
}

.my-secondary-button {
  @include button-secondary; // Outlined green button
}
```

### Card Mixins
```scss
.my-card {
  @include card-with-hover; // Card with shadow and hover lift effect
}
```

### Flexbox Mixins
```scss
.my-container {
  @include flex-center;    // Center items horizontally and vertically
  @include flex-between;   // Space between items
  @include flex-column;    // Flex direction column
}
```

## 🛠 **Utility Classes**

### Text Utilities
```scss
.text-primary     // Green color
.text-secondary   // Gray color
.text-accent      // Red color
.text-center      // Center align
.text-lg          // Large font size
.text-bold        // Bold font weight
```

### Spacing Utilities
```scss
.m-md             // Margin medium
.p-lg             // Padding large
.mt-xl            // Margin top extra large
.mb-sm            // Margin bottom small
.gap-md           // Grid/flex gap medium
```

### Background Utilities
```scss
.bg-primary       // White background
.bg-green         // Green background
.bg-light         // Light green tinted background
.bg-gradient-green // Green gradient background
```

### Flexbox Utilities
```scss
.flex             // Display flex
.flex-center      // Center items
.flex-between     // Space between
.flex-col         // Column direction
.flex-wrap        // Allow wrapping
```

## 🎨 **How to Use Variables in Components**

### In Vue Component Styles
```vue
<style lang="scss" scoped>
.my-component {
  background: $primary-green;
  color: $text-white;
  padding: $spacing-lg;
  border-radius: $radius-md;
  
  @include tablet-up {
    padding: $spacing-xl;
  }
  
  &:hover {
    background: $primary-green-dark;
    @include button-hover-lift;
  }
}
</style>
```

### Creating Custom Components
```scss
.restaurant-card {
  @include card-base;
  background: $bg-light;
  border: 2px solid $primary-green-light;
  
  .card-title {
    @include heading-3;
    color: $primary-green;
    margin-bottom: $spacing-md;
  }
  
  .card-content {
    @include body-text;
    color: $text-secondary;
  }
  
  @include mobile-only {
    padding: $spacing-md;
  }
}
```

## 🌟 **Key Benefits**

1. **Consistent Design**: All colors, spacing, and typography are centralized
2. **Easy Theming**: Change the entire color scheme by updating variables
3. **Responsive Design**: Built-in responsive mixins for all breakpoints
4. **Maintainable**: Organized file structure with clear separation of concerns
5. **Reusable**: Mixins and utilities reduce code duplication
6. **Professional**: Green and black theme reflects the restaurant's natural, authentic brand

## 🚀 **Quick Start Examples**

### Creating a Green Button
```scss
.order-button {
  @include button-primary;
  font-size: $font-size-lg;
  padding: $spacing-lg $spacing-xl;
}
```

### Creating a Card Component
```scss
.menu-item-card {
  @include card-with-hover;
  background: $bg-light;
  border-left: 4px solid $primary-green;
  
  .item-name {
    color: $primary-green;
    font-size: $font-size-xl;
    font-weight: $font-weight-semibold;
  }
  
  .item-price {
    color: $accent-gold;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }
}
```

The new SCSS system provides a robust foundation for maintaining and extending the Restaurant Rindu Kampung website with consistent, professional styling that reflects the authentic Malaysian-Indonesian dining experience.
