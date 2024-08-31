<!-- components/Header.vue -->
<template>
    <header class="flex justify-between items-center p-4 bg-zinc-900 text-white">
      <div class="logo">
        <h2 class="font-bold text-xl">LOGO</h2>
      </div>
      <nav class="flex space-x-6 text-xl justify-center">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
        <NuxtLink to="/services" class="hover:underline">Services</NuxtLink>
        <NuxtLink to="/Events" class="hover:underline">Events</NuxtLink>
        <NuxtLink to="/Portfolio" class="hover:underline">Portfolio</NuxtLink>
        <NuxtLink to="/Blogs" class="hover:underline">Blogs</NuxtLink> 
        <NuxtLink to="/Contact"><button  class="bg-red-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">Contact</button></NuxtLink> 
        
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  