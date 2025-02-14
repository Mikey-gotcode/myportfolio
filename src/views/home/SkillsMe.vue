<template>
  <!-- Skills Section -->
  <div class="py-16 bg-gray-100" id="skill">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Title -->
      <div class="relative flex justify-center items-center text-center mb-12">
        <h1 class="text-7xl font-bold uppercase text-gray-400 absolute opacity-20">
          Skills
        </h1>
        <h1 class="text-3xl font-bold uppercase text-teal-500 relative z-10">
          My Skills
        </h1>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(skill, index) in skills" :key="index" class="mb-6">
          <div class="flex justify-between items-center mb-2">
            <h6 class="font-semibold text-gray-800">{{ skill.name }}</h6>
            <h6 class="font-semibold text-gray-600">{{ skill.percentage }}%</h6>
          </div>
          <!-- Progress Bar Wrapper -->
          <div
            class="w-full bg-gray-300 rounded-full h-2 overflow-hidden"
            role="progressbar"
            :aria-valuenow="skill.percentage"
            aria-valuemin="0"
            aria-valuemax="100">
            <!-- Progress Bar -->
            <div
              class="h-2 rounded-full transition-all duration-500"
              :style="{ width: skill.percentage + '%', backgroundColor: skill.color }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define skills with their percentage & dynamic colors
const skills = ref([
  { name: "HTML", percentage: 95, color: "#3B82F6" },  // bg-blue-500
  { name: "CSS", percentage: 85, color: "#EAB308" },   // bg-yellow-500
  { name: "PHP", percentage: 90, color: "#EF4444" },   // bg-red-500
  { name: "JavaScript", percentage: 90, color: "#EF4444" }, // bg-red-500
  { name: "Angular JS", percentage: 95, color: "#1F2937" }, // bg-gray-800
  { name: "WordPress", percentage: 85, color: "#60A5FA" }   // bg-blue-400
]);
</script>
