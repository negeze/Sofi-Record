<!-- components/Header.vue -->
<template>
    <header class="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div class="logo">
        <img alt="Logo" class="h-10" /><
      </div>
      <nav class="flex space-x-4">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
        <NuxtLink to="/services" class="hover:underline">Services</NuxtLink>
        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  