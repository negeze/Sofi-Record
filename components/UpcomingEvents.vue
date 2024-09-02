  <template>
    <div>
        <section id="events" class="events bg-neutral-900 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Event Card 1-->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img src="../public/Event1.png"  alt="Event" class="w-full h-40 object-cover mb-4 rounded">
              <h3 class="text-xl font-semibold mb-2">Event Title</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <NuxtLink to="/Events/3">
                    <button class="py-1 px-4 mt-4 md:py-3 md:px-6 text-base md:text-lg lg:text-xl font-bold bg-primary rounded-lg text-white border-none cursor-pointer transition duration-300 ease-in-out hover:bg-red-700">See Details</button>
              </NuxtLink>
            </div>
            <!-- Event Card 2-->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img  src="../public/Event2.png" alt="Event" class="w-full h-40 object-cover mb-4 rounded">
              <h3 class="text-xl font-semibold mb-2">Event Title</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              
              <NuxtLink to="/Events/5">
                    <button class="py-1 px-4 mt-4 md:py-3 md:px-6 text-base md:text-lg lg:text-xl font-bold bg-primary rounded-lg text-white border-none cursor-pointer transition duration-300 ease-in-out hover:bg-red-700">See Details</button>
              </NuxtLink>
            </div>
            <!-- Event Card 3-->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <img src="../public/Event3.png" alt="Event" class="w-full h-40 object-cover mb-4 rounded">
              <h3 class="text-xl font-semibold mb-2">Event Title</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
              <NuxtLink to="">
                    <button class="py-1 px-4 mt-4 md:py-3 md:px-6 text-base md:text-lg lg:text-xl font-bold bg-primary rounded-lg text-white border-none cursor-pointer transition duration-300 ease-in-out hover:bg-red-700">See Details</button>
              </NuxtLink>
            </div>
        
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>






