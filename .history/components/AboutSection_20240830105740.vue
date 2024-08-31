<template>
  <section class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Responsive Parent Div with Shadow, Max Width, and Max Height -->
    <div
      class="flex flex-col-reverse md:flex-row items-center justify-between bg-[#2A2727] shadow-2xl rounded-lg p-10 md:p-14 mx-auto"
      style="max-width: 1315px; max-height: 635px; width: 90%; height: auto;"
    >

      <!-- About Me Content -->
      <div class="md:w-1/2 mt-6 md:mt-0">
        <h2 class="text-3xl font-bold text-white mb-4">
          About <span class="text-[#CE253F]">Me</span>
        </h2>
        <p class="text-white text-lg mb-6">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
        </p>
        <button class="bg-[#CE253F] text-white py-2 px-6 rounded-full hover:bg-[#b41f36] transition-colors duration-300">
          Read More
        </button>
      </div>

      <!-- Photo -->
      <div class="md:w-1/2 flex justify-center">
        <img src="../public/mic down.png" alt="Profile Photo" class="w-72 h-72 rounded-full object-cover shadow-lg">
      </div>
      
    </div>
  </section>
</template>

<script setup>
// Any necessary data or props can be handled here.
</script>

<style scoped>
/* Add any scoped styles here, if needed. */
</style>
