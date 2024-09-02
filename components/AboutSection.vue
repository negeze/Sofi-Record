<template>
  <section class="flex justify-center items-center h-screen">
    <!-- Parent Div with Custom Width and Height -->
    <div
      class="flex flex-col-reverse md:flex-row items-center justify-between bg-[#2A2727] shadow-2xl rounded-lg p-10 md:p-14 mx-auto w-[90%] gap-10 shadow-[#343030]">

      <!-- About Me Content -->
      <div class="md:w-1/2 mt-6 md:mt-0">
        <h2 class="text-5xl font-bold text-white mb-4 text-center">
          About <span class="text-[#CE253F]">Me</span>
          
        </h2>
        <p class="text-white text-lg mb-6">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
        </p>
       
       <NuxtLink to="/About"> <button class="py-4 m-3 px-4 md:py-3 md:px-6 text-base md:text-lg lg:text-xl font-bold bg-primary rounded-lg text-white border-none cursor-pointer transition duration-300 ease-in-out hover:bg-red-700">Read More</button>
       </NuxtLink>
      </div>

      <!-- Photo -->
      <div class="md:w-1/2 flex justify-center">
        <img src="../public/personal.jpg" alt="Profile Photo" class="w-full h-full rounded object-cover shadow-lg">
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
