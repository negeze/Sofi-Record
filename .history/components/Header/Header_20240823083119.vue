<!-- components/Header.vue -->
<template>
   <!-- components/Header.vue -->
<template>
  <header class="relative flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white">
    <div class="logo mb-4 md:mb-0">
      <img alt="Logo" class="h-10" />
    </div>
    <button @click="toggleMenu" class="md:hidden text-white">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="absolute top-full left-0 w-full bg-gray-800 md:relative md:flex md:items-center md:space-x-4 md:bg-transparent">
      <NuxtLink to="/" class="block px-4 py-2 text-center md:text-left hover:bg-gray-700">Home</NuxtLink>
      <NuxtLink to="/about" class="block px-4 py-2 text-center md:text-left hover:bg-gray-700">About</NuxtLink>
      <NuxtLink to="/services" class="block px-4 py-2 text-center md:text-left hover:bg-gray-700">Services</NuxtLink>
      <NuxtLink to="/contact">
        <button class="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-auto">
          Contact
        </button>
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
/* Optional: Add custom styles for the mobile menu */
</style>

  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  