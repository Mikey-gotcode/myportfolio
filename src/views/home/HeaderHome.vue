<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted, ref } from 'vue';
import Typed from 'typed.js';
import HeaderBackground from '../../assets/img/header-bg.jpeg';
//import HeaderBackground from '../../assets/img/header-bg.jpeg'

library.add(faLinkedin, faTwitter, faInstagram, faGithub);

const typedRef = ref(null);

// Function to download the resume
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Michael irungu CV copy.docx"; // Ensure the resume is placed in the public folder
  link.download = "Michael_Irungu_Resume.pdf"; // Rename the file on download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

onMounted(() => {
  if (typedRef.value) {
    const typed_strings = "Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer";

    new Typed(typedRef.value, {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }
});
</script>

<template>
  <header 
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white "
    :style="{ backgroundImage: `url(${HeaderBackground})` }"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <div class="container relative z-10 text-left pt-15 pb-32">
      <!-- Social Icons -->
      <div class="flex justify-center md:justify-start space-x-4 text-2xl md:text-3xl mb-6 gap-4">
        <a class="hover:text-gray-300 px-6" href="https://www.linkedin.com/in/michael-mwangi-2245892b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        <a class="hover:text-gray-300 px-6" href="https://x.com/michael59710573?s=11"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a class="hover:text-gray-300 px-6" href="https://www.instagram.com/hii.rungu?igsh=MTl3MXp4MmJ4YXJsbQ%3D%3D&utm_source=qr"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a class="hover:text-gray-300 px-6" href="https://github.com/Mikey-gotcode"><font-awesome-icon :icon="['fab', 'github']" /></a>
      </div>

      <!-- Header Content -->
      <div class="flex flex-col text-center md:text-left mt-9 gap-3">
        <h4 class="text-4xl sm:text-5xl md:text-6xl pb-3">Hello, I am</h4>
        <h1 class="text-5xl sm:text-6xl md:text-8xl font-bold my-3">Michael Irungu Mwangi</h1>
        
        <div class="overflow-hidden whitespace-nowrap w-full">
          <h1 ref="typedRef" class="text-3xl sm:text-4xl md:text-5xl font-light text-white w-full">|</h1>
        </div>

        <button @click="downloadResume" class="mt-6 px-6 py-3 bg-teal-400 text-white rounded-full shadow-lg hover:bg-teal-700 hover:cursor-pointer transition">
          <i class="ti-printer mr-2"></i> Downolad Resume
        </button>
      </div>
    </div>
  </header>
</template>
