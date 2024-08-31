<template>
  <section class="hero-section">
    <div class="content">
      <h1 class="hero-heading">Crafting
        <br /> Soundscapes That Elevate Your Music Experience
      </h1>
      <p class="hero-paragraph">
        Discover the artistry and innovation behind sound—where every beat tells a story and every track is a masterpiece.
      </p>
      <button class="hero-button">Learn More</button>
    </div>
    <img src="../public/mic down.png" alt="Mic Image" class="mic-image" />
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
.hero-section {
  @apply relative flex items-center justify-start h-screen px-4 md:px-8 bg-cover bg-center bg-no-repeat;
  background-image: url('../public/hero-img.jpg');
}

.content {
  @apply max-w-full md:max-w-xl lg:max-w-2xl text-white z-20;
}

.hero-heading {
  @apply text-4xl md:text-4xl lg:text-7xl font-bold mb-4;
}

.hero-paragraph {
  @apply text-base md:text-lg lg:text-xl mb-6 text-gray-300;
}

.hero-button {
  @apply py-2 px-4 md:py-3 md:px-6 text-base md:text-lg lg:text-xl font-bold bg-red-600 rounded-lg text-white border-none cursor-pointer transition duration-300 ease-in-out hover:bg-red-700;
}

.mic-image {
  @apply fixed top-[-70px] right-[-3rem] w-24 h-[400px] md:w-32 lg:w-40 z-10;
}

.hero-section::before {
  @apply absolute inset-0 bg-black bg-opacity-50 z-10;
}
</style>
