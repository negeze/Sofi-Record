<!-- Awards Section -->
<template>
  <section id="awards" class="relative overflow-hidden py-16 bg-zinc-300">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-white">Awards & Recognitions</h2>
      <div class="relative overflow-hidden">
        <!-- Carousel Wrapper -->
        <div class="carousel flex gap-4 animate-slide">
          <!-- Award Images -->
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/AdwaAward.png" alt="Award 1" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award1</p>
          </div>
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/GummaAward.png" alt="Award 2" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award2</p>
          </div>
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/AfrimaAward.png" alt="Award 3" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award3</p>
          </div>
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/GummaAward.png" alt="Award 4" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award4</p>
          </div>

          <!-- Duplicate Images for Seamless Loop -->
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/AdwaAward.png" alt="Award 1" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award1</p>
          </div>
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/AfrimaAward.png" alt="Award 2" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award2</p>
          </div>
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/GummaAward.png" alt="Award 3" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award3</p>
          </div>
          <div class="flex-shrink-0 w-full md:w-1/4 lg:w-1/6 h-40 mx-2 flex items-center justify-center">
            <img src="../public/AdwaAward.png" alt="Award 4" class="object-contain w-full h-full rounded">
            <p class="text-center text-white mt-2">Gumma Award4</p>
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
    width: 200%; /* Width is doubled to fit both original and duplicated images */
    display: flex;
  }

  .animate-slide {
    animation: slide 20s linear infinite; /* Adjust timing for smooth sliding */
  }

  /* Responsive design adjustments */
  @media (max-width: 768px) {
    .carousel {
      width: 400%; /* Adjust for smaller screens */
    }
  }

  @media (max-width: 480px) {
    .carousel {
      width: 800%; /* Further adjust for very small screens */
    }
  }
</style>
