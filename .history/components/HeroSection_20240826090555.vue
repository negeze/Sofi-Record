<template>
    <section class="hero-section">
      <div class="content">
        <h1 class="hero-heading">Crafting Soundscapes That Elevate Your Music Experience</h1>
        <p class="hero-paragraph">
          Discover the artistry and innovation behind  sound—where every beat tells a story and every track is a masterpiece.
        </p>
        <button class="hero-button">Call to Action</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  }
  </script>
  
  <style scoped>
  .hero-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh; /* Full viewport height */
    padding: 0 2rem;
    background-image: url('../public/hero-img.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .content {
    max-width: 600px;
    color: white;
    z-index: 2; /* Ensure content is above background */
  }
  
  .hero-heading {
    font-size: 58px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .hero-paragraph {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  
  .hero-button {
    padding: 1rem 2rem;
    font-size: 1rem;
    background-color: #CE253F;
    border
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .hero-button:hover {
    background-color: #CE253F;
    
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: rgba(0, 0, 0, 0.5); Dark overlay */
    z-index: 1; /* Below content but above background */
  }
  </style>
  