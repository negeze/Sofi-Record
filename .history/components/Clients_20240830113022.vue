<template>
    <section id="carousel" class="relative overflow-hidden py-16 bg-zinc-300">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold  mb-8 text-white">Our Clients</h2>
        <div class="relative overflow-hidden">
          <!-- Carousel Wrapper -->
          <div class="carousel flex animate-slide">
            <!-- Carousel Images -->
            <div class="flex-shrink-0 w-64 h-40 mx-2"> <!-- Adjust width and height -->
              <img src="../public/hero-img.jpg" alt="Image 1" class="object-cover w-full h-full rounded-lg">
            </div>
            <div class="flex-shrink-0 w-64 h-40 mx-2">
              <img src="../public/mic down.png" alt="Image 2" class="object-cover w-full h-full rounded-lg">
            </div>
            <div class="flex-shrink-0 w-64 h-40 mx-2">
              <img src="../public/mic.png" alt="Image 3" class="object-cover w-full h-full rounded-lg">
            </div>
            <div class="flex-shrink-0 w-64 h-40 mx-2">
              <img src="../public/personal.jpg" alt="Image 4" class="object-cover w-full h-full rounded-lg">
            </div>
  
            <!-- Duplicate Images for Seamless Loop -->
            <div class="flex-shrink-0 w-64 h-40 mx-2">
              <img src="../public/hero-img.jpg" alt="Image 1" class="object-cover w-full h-full rounded-lg">
            </div>
            <div class="flex-shrink-0 w-64 h-40 mx-2">
              <img src="../public/mic down.png" alt="Image 2" class="object-cover w-full h-full rounded-lg">
            </div>
            <div class="flex-shrink-0 w-64 h-40 mx-2">
              <img src="../public/personal.jpg " alt="Image 3" class="object-cover w-full h-full rounded-lg">
            </div>
            <div class="flex-shrink-0 w-64 h-40 mx-2">
              <img src="../public/mic.png" alt="Image 4" class="object-cover w-full h-full rounded-lg">
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Any necessary JavaScript can be added here.
  </script>
  
  <style scoped>
  /* Custom CSS for continuous sliding animation */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .carousel {
    width: 200%; /* Width doubled to fit both original and duplicated images */
    display: flex;
  }
  
  .animate-slide {
    animation: slide 15s linear infinite; /* Adjust timing for smooth sliding */
  }
  </style>
  