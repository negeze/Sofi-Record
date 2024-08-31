<template>
    <section class="relative overflow-hidden h-32 bg-gray-800"> <!-- Set the height to be low -->
      <div class="carousel flex animate-slide">
        <!-- Carousel Images -->
        <div class="flex-shrink-0 w-64 h-32"> <!-- Adjust the width and height accordingly -->
          <img src="../public/hero-img.jpg" alt="Image 1" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/mic down.png" alt="Image 2" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/mic.png" alt="Image 3" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="image4.jpg" alt="Image 4" class="object-cover w-full h-full">
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // If you have any necessary JavaScript, you can add it here.
  </script>
  
  <style scoped>
  /* Add custom CSS for continuous sliding animation */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .carousel {
    width: 400%; /* The carousel should be 4 times the width of a single image */
    display: flex;
  }
  
  .animate-slide {
    animation: slide 15s linear infinite; /* Adjust timing as needed */
  }
  </style>
  