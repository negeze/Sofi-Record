<!-- components/Header.vue -->
<template>
    <header class="flex justify-between items-center p-4 bg-[#2A2727] text-white">
      <div class="logo">
        <h2 class="font-bold text-xl">LOGO</h2>
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">

      </div>
      <nav class="flex space-x-6 text-xl justify-center items-center">
        <NuxtLink to="/" class="">Home</NuxtLink>
        <NuxtLink to="/about" class="">About</NuxtLink>
        <NuxtLink to="/service" class="">Services</NuxtLink>
        <NuxtLink to="/Events" class="">Events</NuxtLink>
        <NuxtLink to="/Portfolio" class="">Portfolio</NuxtLink>
        <NuxtLink to="/Blog" class="">Blogs</NuxtLink> 
        <NuxtLink to="/Contact"><button  class="bg-[#CE253F] hover:bg-black-700 text-white font-bold py-2 px-4 rounded">Contact Me</button></NuxtLink> 
        
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  