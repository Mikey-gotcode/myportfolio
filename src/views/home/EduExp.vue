<template>
  <div>
    <!-- qualifications -->
    <div class="py-16 bg-gray-100" id="qualification">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Title -->
        <div class="relative flex flex-col justify-center items-center text-center mb-12">
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase text-gray-400 absolute opacity-20">
            Quality
          </h1>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-teal-500 relative z-10">
            Education & Experience
          </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6">
          <!-- Education Section -->
          <div>
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              My Education
            </h3>
            <div class="border-l-4 border-teal-500 pl-6">
              <div v-for="(edu, index) in eduExp.education" :key="index" class="relative mb-8">
                <div class="absolute -left-5 sm:-left-6 top-1 text-teal-500 text-lg">&#9679;</div>
                <h5 class="text-lg font-semibold">{{ edu.degree }}</h5>
                <p class="text-gray-700 text-sm mb-2">
                  <strong>{{ edu.institution }}</strong> | <span class="text-gray-500">{{ edu.year }}</span>
                </p>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ edu.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Experience Section -->
          <div>
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              My Experience
            </h3>
            <div class="border-l-4 border-teal-500 pl-6">
              <div v-for="(exp, index) in eduExp.experience" :key="index" class="relative mb-8">
                <div class="absolute -left-5 sm:-left-6 top-1 text-teal-500 text-lg">&#9679;</div>
                <h5 class="text-lg font-semibold">{{ exp.title }}</h5>
                <p class="text-gray-700 text-sm mb-2">
                  <strong>{{ exp.company }}</strong> | <span class="text-gray-500">{{ exp.year }}</span>
                </p>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ exp.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- qualifications -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  eduExp: {
    type: Object,
    required: true,
  }
});
</script>
