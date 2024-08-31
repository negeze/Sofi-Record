<template>
  <section class="relative flex items-center justify-start h-screen px-4 md:px-8 bg-cover bg-center bg-no-repeat" style="background-image: url('../public/hero-img.jpg');">
    <div class="max-w-full md:max-w-xl lg:max-w-2xl text-white z-20">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Crafting <br /> Soundscapes That Elevate Your Music Experience
      </h1>
      <p class="text-base md:text-lg lg:text-xl mb-6 text-gray-300">
        Discover the artistry and innovation behind sound—where every beat tells a story and every track is a masterpiece.
      </p>
      <button class="py-2 px-4 md:py-3 md:px-6 text-base md:text-lg lg:text-xl font-bold bg-red-600 rounded-lg text-white border-none cursor-pointer transition duration-300 ease-in-out hover:bg-red-700">
        Learn More
      </button>
    </div>
    <img src="../public/mic down.png" alt="Mic Image" class="fixed top-[-70px] right-[-4.5rem] w-24 md:w-32 lg:w-40 z-10" />
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>
