<template>
  <section class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Parent Div with Shadow -->
    <div class="flex flex-col-reverse md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-6xl mx-auto">

      <!-- About Me Content -->
      <div class="md:w-1/2 mt-6 md:mt-0">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <p class="text-gray-700 text-lg">
          I'm a passionate web developer with experience in building modern web applications.
          I love coding, learning new technologies, and solving complex problems.
          My goal is to create user-friendly and efficient solutions that meet the needs of users.
        </p>
      </div>

      <!-- Photo -->
      <div class="md:w-1/2 flex justify-center">
        <img src="~/assets/profile.jpg" alt="Profile Photo" class="w-64 h-64 rounded-full object-cover shadow-lg">
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
