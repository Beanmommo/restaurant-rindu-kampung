// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // App configuration
  app: {
    head: {
      title: "Restaurant Rindu Kampung - Malaysian-Indonesian Cuisine",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Restaurant Rindu Kampung - Land below the wind. Authentic Malaysian-Indonesian cuisine in a warm, welcoming atmosphere.",
        },
        {
          name: "keywords",
          content:
            "restaurant, malaysian food, indonesian food, rindu kampung, authentic cuisine",
        },
        {
          property: "og:title",
          content: "Restaurant Rindu Kampung - Malaysian-Indonesian Cuisine",
        },
        {
          property: "og:description",
          content:
            "Land below the wind. Authentic Malaysian-Indonesian cuisine.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

  // Vite configuration for SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use  "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false,
  },
});
