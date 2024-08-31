<!-- pages/index.vue -->
<template>
    <Header/>
    <div>
      <!-- Hero Section -->
      <section class="hero bg-gray-800 text-white text-center py-16">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p class="text-lg mb-8">Your success is our priority</p>
        <a href="#services" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</a>
      </section>
  
      <!-- Services Section -->
      <section id="services" class="services py-60">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div class="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service Card -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Service 1</h3>
              <p class="text-gray-600">Description of service 1.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Service 1</h3>
              <p class="text-gray-600">Description of service 1.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Service 1</h3>
              <p class="text-gray-600">Description of service 1.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Service 1</h3>
              <p class="text-gray-600">Description of service 1.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Service 1</h3>
              <p class="text-gray-600">Description of service 1.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Service 1</h3>
              <p class="text-gray-600">Description of service 1.</p>
            </div>
            <!-- Repeat for other services -->
          </div>
        </div>
      </section>
  
      <!-- About Section -->
      <section id="about" class="about bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">About Us</h2>
          <p class="text-center">Information about the company.</p>
        </div>
      </section>
  
      <!-- Clients Section -->
      <section id="clients" class="clients py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Our Clients</h2>
          <!-- Client logos or content -->
        </div>
      </section>
  
      <!-- Portfolio Section -->
      <section id="portfolio" class="portfolio py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Portfolio</h2>
          <!-- Portfolio items -->
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section id="testimonials" class="testimonials bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <!-- Testimonial content -->
        </div>
      </section>
  
      <!-- Latest Blog Posts Section -->
      <section id="blog" class="latest-blog py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Blog Card -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img  alt="Blog Post" class="w-full h-40 object-cover mb-4 rounded">
              <h3 class="text-xl font-semibold mb-2">Blog Title</h3>
              <p class="text-gray-600">Highlight of the blog post.</p>
              <p class="text-gray-400">Date | 5 min read</p>
            </div>
            <!-- Repeat for other blog posts -->
          </div>
          <!-- Subscribe Blog Button -->
          <div class="text-center mt-8">
            <h3 class="text-xl font-semibold mb-4">Subscribe to Our Blog</h3>
            <form class="flex justify-center">
              <input type="email" placeholder="Enter your email" class="p-2 border border-gray-300 rounded-l-lg">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">Subscribe</button>
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
  
      <!-- Footer Section -->
      <footer class="footer bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  /* Optional: Add custom styles for your sections */
  </style>
  