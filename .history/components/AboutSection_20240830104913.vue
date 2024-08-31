<template>
  <section class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Parent Div with Custom Background and Larger Size -->
    <div class="flex flex-col-reverse md:flex-row items-center justify-between bg-[#2A2727] shadow-lg rounded-lg p-10 md:p-14 max-w-5xl w-full mx-auto h-full md:h-auto">

      <!-- About Me Content -->
      <div class="md:w-1/2 mt-6 md:mt-0">
        <h2 class="text-3xl font-bold text-white mb-4">
          About <span class="text-[#CE253F]">Me</span>
        </h2>
        <p class="text-white text-lg mb-6">
          I'm a passionate web developer with experience in building modern web applications.
          I love coding, learning new technologies, and solving complex problems.
          My goal is to create user-friendly and efficient solutions that meet the needs of users.
        </p>
        <button class="bg-[#CE253F] text-white py-2 px-6 rounded-full hover:bg-[#b41f36] transition-colors duration-300">
          Read More
        </button>
      </div>

      <!-- Photo -->
      <div class="md:w-1/2 flex justify-center">
        <img src="~/assets/profile.jpg" alt="Profile Photo" class="w-72 h-72 rounded-full object-cover shadow-lg">
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
