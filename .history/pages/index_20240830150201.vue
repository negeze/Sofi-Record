<!-- pages/index.vue -->
<template>
    <div>
      <!-- Hero Section -->
     <Header/>
      <HeroSection/>
  
      <ServiceSection/>
      <!-- About Section -->
    <<AboutSection/>
  
      <!-- Clients Section -->
    <Clients/>
  
      <!-- Portfolio Section -->
      <section id="portfolio" class="portfolio py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Portfolio</h2>
          <!-- Portfolio items -->
        </div>
      </section>
  
      <!-- Testimonials Section -->
<TestimonialSection/>
  
    <!-- Latest Blog Posts Section -->

<section id="blog" class="latest-blog py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Blog Card 1-->

      <a href="/blog/specific-blog-page.html" class="bg-white p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300" aria-label="Read More about Blog Title"> 
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col">
        <img src="../pub" alt="Blog Post" class="w-full h-48 object-cover mb-4 rounded">
        <div class="flex-grow">
          <h3 class="text-xl font-semibold mb-2 text-gray-800">Blog Title</h3>
          <p class="text-gray-600 mb-4">This is a short paragraph about the blog post. It gives a brief overview or a teaser of the content to entice readers to click and read more.</p>
          <div class="text-gray-400 text-sm">Date | 5 min read</div>
        </div>
      </div>
    </a>

      <!-- Blog Card 2-->

    <a href="/blog/specific-blog-page.html" class="bg-white p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300" aria-label="Read More about Blog Title"> 
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col">

        <img src="../public/hero-img.jpg" alt="Blog Post" class="w-full h-48 object-cover mb-4 rounded">
        <div class="flex-grow">
          <h3 class="text-xl font-semibold mb-2 text-gray-800 ">Blog Title</h3>
          <p class="text-gray-600 mb-4">This is a short paragraph about the blog post. It gives a brief overview or a teaser of the content to entice readers to click and read more.</p>
          <div class="text-gray-400 text-sm">Date | 5 min read</div>
        </div>
      </div>
    </a>

      <!-- Blog Card 3-->

    <a href="/blog/specific-blog-page.html" class="bg-white p-6 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300" aria-label="Read More about Blog Title"> 
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col">
        <img src="../public/hero-img.jpg" alt="Blog Post" class="w-full h-48 object-cover mb-4 rounded">
        <div class="flex-grow">
          <h3 class="text-xl font-semibold mb-2 text-gray-800 ">Blog Title</h3>
          <p class="text-gray-600 mb-4">This is a short paragraph about the blog post. It gives a brief overview or a teaser of the content to entice readers to click and read more.</p>
          <div class="text-gray-400 text-sm">Date | 5 min read</div>
        </div>
      </div>
    </a>
    </div>
    <!-- Subscribe Blog Button -->
    <div class="text-center mt-8">
      <h3 class="text-xl font-semibold mb-4">Subscribe to Our Blog</h3>
      <form class="flex flex-col sm:flex-row justify-center gap-2">
        <input type="email" placeholder="Enter your email" class="p-2 border border-gray-300 rounded-l-lg max-w-xs flex-1">
        
  <button type="submit" class="py-2 px-4 md:py-3 md:px-6 text-base md:text-lg lg:text-xl font-bold bg-primary rounded-lg text-white border-none cursor-pointer transition duration-300 ease-in-out">Subscribe</button>
      </form>
    </div>
  </div>
</section>


      <!-- Awards Section -->
      <section id="awards" class="awards py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Awards</h2>
          <!-- Awards Carousel -->
          <div class="carousel">
            <!-- Implement carousel here -->
          </div>
        </div>
      </section>
  
      <!-- Events Section -->
      <section id="events" class="events bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Event Card -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img  alt="Event" class="w-full h-40 object-cover mb-4 rounded">
              <h3 class="text-xl font-semibold mb-2">Event Title</h3>
              <p class="text-gray-600">Event description goes here.</p>
              <a href="#" class="text-blue-500 hover:underline">See Details</a>
            </div>
            <!-- Repeat for other events -->
          </div>
        </div>
      </section>
  
      <Footer/>

    </div>
  </template>
  
  <script>
import AboutSection from '~/components/AboutSection.vue';
import Clients from '~/components/Clients.vue';
import ServiceSection from '~/components/ServiceSection.vue';

  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>

  </style>
  