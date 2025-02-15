<script setup>
  import {
    ref,
    computed
  } from 'vue';
  import {
    Carousel,
    Slide
  } from 'vue3-carousel/dist/carousel.mjs';
  import 'vue3-carousel/dist/carousel.css';
  import { useWindowSize } from '@vueuse/core'


  const services = ref([{
      "title": "Web Design",
      "icon": "fa-laptop",
      "description": "Creating visually appealing and user-friendly web designs tailored to your brand.",
      "link": "#"
    },
    {
      "title": "Web Development",
      "icon": "fa-laptop-code",
      "description": "Building responsive, scalable, and high-performance web applications.",
      "link": "#"
    },
    {
      "title": "Apps Design",
      "icon": "fab fa-android",
      "description": "Designing engaging mobile applications with intuitive user experiences.",
      "link": "#"
    },
    {
      "title": "Apps Development",
      "icon": "fab fa-apple",
      "description": "Developing high-quality mobile applications for iOS and Android platforms.",
      "link": "#"
    },
    {
      "title": "SEO",
      "icon": "fa-search",
      "description": "Optimizing your website to rank higher in search engine results and increase traffic.",
      "link": "#"
    },
    {
      "title": "Content Creating",
      "icon": "fa-edit",
      "description": "Crafting compelling and engaging content for blogs, websites, and social media.",
      "link": "#"
    }
  ]);

  // Get the window width
const { width } = useWindowSize()

// Check if screen is large
const isLargeScreen = computed(() => width.value >= 1024) // Tailwind 'lg' breakpoint is 1024px

  
  // Split services into groups of 3
  const groupedServices = computed(() => {
    const chunks = [];
    for (let i = 0; i < services.value.length; i += 3) {
      chunks.push(services.value.slice(i, i + 3));
    }
    return chunks;
  });
</script>


<template>
  <section id="services" class="bg-gray-100 py-12">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center">

      <!-- Section Title -->
      <div class="relative flex justify-center items-center text-center mb-12">
        <h1 class="text-7xl font-bold uppercase text-gray-400 absolute opacity-20">
          SERVICES
        </h1>
        <h1 class="text-3xl font-bold uppercase text-teal-500 relative z-10">
          MY SERVICES
        </h1>
      </div>

      <!-- Grid Layout (ONLY for lg and above) -->
      <div v-if="isLargeScreen" class="contents lg:flex flex-wrap justify-between">
        <div v-for="(group, index) in groupedServices" :key="index" class="w-full flex justify-center py-3 gap-8">
          <div v-for="service in group" :key="service.title"
            class="bg-white p-6 w-1/4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105">
            <div class="flex items-center justify-center mb-4">
              <i :class="`fa ${service.icon} text-4xl bg-primary text-white p-4 rounded-full`"></i>
            </div>
            <h4 class="text-xl font-semibold mb-3">{{ service.title }}</h4>
            <p class="text-gray-600">{{ service.description }}</p>
            <!-- <a :href="service.link"
              class="text-blue-600 font-medium border-b-2 border-blue-600 mt-4 inline-block hover:text-blue-800">
              Read More
            </a> -->
          </div>
        </div>
      </div>

      <!-- Carousel (ONLY for md and smaller screens) -->
      <div v-else class="lg:hidden">
        <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="3000" class="w-full">
          <Slide v-for="service in services" :key="service.title">
            <div class="flex justify-center w-full">
              <div class="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div class="flex items-center justify-center mb-4">
                  <i :class="`fa ${service.icon} text-4xl bg-primary text-white p-4 rounded-full`"></i>
                </div>
                <h4 class="text-xl font-semibold mb-3">{{ service.title }}</h4>
                <p class="text-gray-600">{{ service.description }}</p>
                <!-- <a :href="service.link"
                  class="text-blue-600 font-medium border-b-2 border-blue-600 mt-4 inline-block hover:text-blue-800">
                  Read More
                </a> -->
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>

    </div>
  </section>
</template>
