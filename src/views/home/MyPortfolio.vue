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
  import {
    RouterLink
  } from 'vue-router';
  import {
    useWindowSize
  } from '@vueuse/core'

  // Get the window width
  const {
    width
  } = useWindowSize()

  // Check if screen is large
  const isLargeScreen = computed(() => width.value >= 1024) // Tailwind 'lg' breakpoint is 1024px


  const portfolioItems = ref([{
      id: 1,
      title: "Design Project",
      category: "design",
      img: "../../assets/img/p1.png"
    },
    {
      id: 2,
      title: "Web Development",
      category: "development",
      img: "../../assets/img/p2.png"
    },
    {
      id: 3,
      title: "Marketing Campaign",
      category: "marketing",
      img: "../../assets/img/p3.png"
    },
    {
      id: 4,
      title: "UX/UI Design",
      category: "design",
      img: "../../assets/img/p3.png"
    },
    {
      id: 5,
      title: "Backend System",
      category: "development",
      img: "../../assets/img/p5.png"
    },
    {
      id: 6,
      title: "SEO Optimization",
      category: "marketing",
      img: "../../assets/img/p6.png"
    }
  ]);

  const activeFilter = ref("all");
  const searchTerm = ref("");

  const filteredPortfolio = computed(() => {
    return portfolioItems.value.filter(item => {
      const matchesFilter = activeFilter.value === "all" || item.category === activeFilter.value;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.value.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  });

  const categories = ref(["all", "design", "development", "marketing"]);
</script>

<template>
  <section class="bg-gray-100 py-12 px-4 md:px-6 lg:px-12" id="portfolio">
    <div class="container mx-auto">

      <<!-- Section Title -->
      <div class="relative flex justify-center items-center text-center mb-12">
        <h1 class="text-6xl font-bold uppercase text-gray-400 absolute opacity-20">
          PORTFOLIO
        </h1>
        <h1 class="text-3xl font-bold uppercase text-teal-500 relative z-10">
          MY PORTFOLIO
        </h1>
      </div>

      <!-- Filter Buttons -->
      <div class="relative flex justify-center mb-6">
        <!-- Show normal buttons on large screens -->
        <div v-if="isLargeScreen" class="contents justify-between gap-4">
          <button v-for="category in categories" :key="category" class="px-2 border rounded-lg transition-colors"
            :class="{ 'bg-teal-600 text-white': activeFilter === category }" @click="activeFilter = category">
            {{ category.charAt(0).toUpperCase() + category.slice(1) }}
          </button>
        </div>
        <!-- Show carousel only on small and medium screens -->
        <div v-else class="w-full sm:block md:block lg:hidden justify-center">
          <Carousel :itemsToShow="3" :wrapAround="true" class="w-full px-4">
            <Slide v-for="category in categories" :key="category">
              <button class="w-24 sm:w-32 md:w-36 px-4 py-2 border rounded-lg whitespace-nowrap transition-colors gap-2 flex justify-center items-center text-sm sm:text-base"
                :class="{ 'bg-teal-400 text-white': activeFilter === category }" @click="activeFilter = category">
                {{ category.charAt(0).toUpperCase() + category.slice(1) }}
              </button>
            </Slide>
          </Carousel>
        </div>




      </div>



      <!-- Portfolio Carousel -->
      <div class="relative">
        <Carousel :itemsToShow="1" :wrapAround="true" :autoplay="3000" class="w-full">
          <Slide v-for="item in filteredPortfolio" :key="item.id">
            <RouterLink :to="`/portfolio/${item.id}`"
              class="block bg-white rounded-lg shadow-lg overflow-hidden group relative">
              <img :src="item.img" :alt="item.title"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div class="p-4">
                <h3 class="text-lg font-semibold">{{ item.title }}</h3>
              </div>
              <div
                class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
                <p class="text-white text-lg font-bold">{{ item.title }}</p>
              </div>
            </RouterLink>
          </Slide>
        </Carousel>
      </div>

    </div>
  </section>
</template>