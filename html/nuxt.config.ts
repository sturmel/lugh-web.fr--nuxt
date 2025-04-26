import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [    
    '@nuxt/icon',
    'nuxt-particles',
    '@nuxtjs/sitemap',
    '@nuxt/image',
    'nuxt-gtag',
  ],
  gtag: {
    id: process.env.GOOGLE_TAG
  },
  css: ['~/assets/style/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: true, 
    },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true   
    }
  },
  particles: {
    mode: 'slim',
    lazy: true
  },
  icon: {
    serverBundle: {
      collections: ['mdi'],
    }
  },
  image: {
    quality: 80, 
    format: ['avif', 'webp', 'png'], 
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536
    }
  },
  runtimeConfig: {  
    webhookUrl: process.env.WEBHOOK_URL,
    public: {
      websiteUrl: process.env.WEBSITE_URL
    }
  }
})
