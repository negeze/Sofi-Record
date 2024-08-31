<template>
    <section id="testimonials" class="relative overflow-hidden py-16 bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8 text-white">Testimonials</h2>
        <div class="relative overflow-hidden">
          <!-- Carousel Wrapper -->
          <div class="carousel flex animate-slide">
            <!-- Testimonial Images -->
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial1.jpg" alt="Testimonial 1" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Great service, highly recommend!"</p>
                <p class="text-center text-gray-600">- Customer A</p>
              </div>
            </div>
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial2.jpg" alt="Testimonial 2" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Amazing experience, will come back again."</p>
                <p class="text-center text-gray-600">- Customer B</p>
              </div>
            </div>
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial3.jpg" alt="Testimonial 3" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Exceptional service and support."</p>
                <p class="text-center text-gray-600">- Customer C</p>
              </div>
            </div>
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial4.jpg" alt="Testimonial 4" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Very satisfied with the results."</p>
                <p class="text-center text-gray-600">- Customer D</p>
              </div>
            </div>
  
            <!-- Duplicate Images for Seamless Loop -->
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial1.jpg" alt="Testimonial 1" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Great service, highly recommend!"</p>
                <p class="text-center text-gray-600">- Customer A</p>
              </div>
            </div>
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial2.jpg" alt="Testimonial 2" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Amazing experience, will come back again."</p>
                <p class="text-center text-gray-600">- Customer B</p>
              </div>
            </div>
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial3.jpg" alt="Testimonial 3" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Exceptional service and support."</p>
                <p class="text-center text-gray-600">- Customer C</p>
              </div>
            </div>
            <div class="flex-shrink-0 w-1/2 px-2">
              <div class="bg-white p-4 rounded-lg shadow-lg">
                <img src="testimonial4.jpg" alt="Testimonial 4" class="w-full h-32 object-cover rounded-lg">
                <p class="mt-4 text-center">"Very satisfied with the results."</p>
                <p class="text-center text-gray-600">- Customer D</p>
              </div>
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
    display: flex;
    width: 200%; /* Width doubled to fit both original and duplicated images */
  }
  
  .animate-slide {
    animation: slide 20s linear infinite; /* Adjust timing for smooth sliding */
  }
  </style>
  