<!-- components/SectionComponent.vue -->
<template>
    <div class="bg-gray-900 text-gray-200 p-8 lg:p-16">
      <div class="max-w-7xl mx-auto">
        <!-- Main Container -->
        <div class="lg:flex lg:space-x-8">
          
          <!-- Image Section -->
          <div class="lg:w-1/2 mb-8 lg:mb-0">
            <div :class="['relative w-full', imageHeightClass]">
              <img :src="imageSrc" :alt="altText" class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
  
          <!-- Text Section -->
          <div class="lg:w-1/2">
            <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
            <h2 class="text-xl font-light mb-8">{{ subtitle }}</h2>
          </div>
        </div>
  
        <div>
          <!-- Inception -->
          <div class="mb-8">
            <h3 class="text-2xl text-pink-300 font-semibold mb-4">{{ inceptionTitle }}</h3>
            <p class="text-lg leading-relaxed">{{ inceptionText }}</p>
          </div>
  
          <!-- Mission -->
          <div>
            <h3 class="text-2xl text-pink-300 font-semibold mb-4">{{ missionTitle }}</h3>
            <p class="text-lg leading-relaxed">{{ missionText }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  // Define props
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    imageHeight: {
      type: String,
      default: 'h-[500px]', // Default height
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    inceptionTitle: {
      type: String,
      required: true,
    },
    inceptionText: {
      type: String,
      required: true,
    },
    missionTitle: {
      type: String,
      required: true,
    },
    missionText: {
      type: String,
      required: true,
    },
  });
  
  // Compute class for image height
  const imageHeightClass = computed(() => props.imageHeight);
  </script>
  
  <style scoped>
  /* Add any component-specific styles here if needed */
  </style>
  