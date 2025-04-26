import { defineNuxtRouteMiddleware, navigateTo, useRuntimeConfig } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()
  if (process.env.NODE_ENV === 'production' && to.fullPath && !window.location.protocol.startsWith('https')) {
    const httpsUrl = config.public.websiteUrl + to.fullPath;
    return navigateTo(httpsUrl, { external: true, redirectCode: 301 })
  }
})