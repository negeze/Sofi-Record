<template>
    <section class="relative overflow-hidden h-32 bg-gray-800">
        <h2 class="text-3xl font-bold text-center mb-8">Our Clients</h2>

      <div class="carousel flex animate-slide">
        <!-- Carousel Images -->
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/hero-img.jpg" alt="Image 1" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/mic down.png" alt="Image 2" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/mic.png" alt="Image 3" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/personal.jpg" alt="Image 4" class="object-cover w-full h-full">
        </div>
  
        <!-- Duplicate Images for Seamless Loop -->
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/hero-img.jpg" alt="Image 1" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/mic down.png" alt="Image 2" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/mic.png" alt="Image 3" class="object-cover w-full h-full">
        </div>
        <div class="flex-shrink-0 w-64 h-32">
          <img src="../public/personal.jpg" alt="Image 4" class="object-cover w-full h-full">
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Any necessary data or props can be handled here.
  </script>
  
  <style scoped>
  /* Add custom CSS for continuous sliding animation */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Slide by half to loop back seamlessly */
    }
  }
  
  .carousel {
    display: flex;
    width: 200%; /* The width is doubled to accommodate the duplicate set of images */
  }
  
  .animate-slide {
    animation: slide 15s linear infinite; /* Adjust timing as needed */
  }
  </style>
  <!--  -->
  <!--  -->
  <!--  -->

  <template>
  <section id="carousel" class="relative overflow-hidden py-16 bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8 text-white">Image Carousel</h2>
      <div class="relative overflow-hidden">
        <!-- Carousel Wrapper -->
        <div class="carousel flex animate-slide">
          <!-- Carousel Images -->
          <div class="flex-shrink-0 w-64 h-40 mx-2"> <!-- Adjust width and height -->
            <img src="image1.jpg" alt="Image 1" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-shrink-0 w-64 h-40 mx-2">
            <img src="image2.jpg" alt="Image 2" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-shrink-0 w-64 h-40 mx-2">
            <img src="image3.jpg" alt="Image 3" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-shrink-0 w-64 h-40 mx-2">
            <img src="image4.jpg" alt="Image 4" class="object-cover w-full h-full rounded-lg">
          </div>

          <!-- Duplicate Images for Seamless Loop -->
          <div class="flex-shrink-0 w-64 h-40 mx-2">
            <img src="image1.jpg" alt="Image 1" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-shrink-0 w-64 h-40 mx-2">
            <img src="image2.jpg" alt="Image 2" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-shrink-0 w-64 h-40 mx-2">
            <img src="image3.jpg" alt="Image 3" class="object-cover w-full h-full rounded-lg">
          </div>
          <div class="flex-shrink-0 w-64 h-40 mx-2">
            <img src="image4.jpg" alt="Image 4" class="object-cover w-full h-full rounded-lg">
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
  animation: slide 20s linear infinite; /* Adjust timing for smooth sliding */
}
</style>
