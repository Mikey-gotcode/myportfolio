<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faTwitter, faInstagram, faGithub);
</script>

<template>
  <!-- Footer Start -->
  <footer class="bg-teal-400 text-white mt-5 py-5 px-4 md:px-6">
    <div class="container text-center py-5">
      <div class="text-left pt-15 pb-32 ">
        <!-- Social Icons -->
        <ul class="flex justify-center space-x-4 text-3xl mb-6 list-none">
          <li><a class="hover:text-gray-300 px-8" href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
          <li><a class="hover:text-gray-300 px-8" href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
          <li><a class="hover:text-gray-300 px-8" href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
          <li><a class="hover:text-gray-300 px-8" href="#"><font-awesome-icon :icon="['fab', 'github']" /></a></li>
        </ul>
      </div>

      <!-- Links -->
      <div class="flex justify-center space-x-4 mb-3 text-lg md:text-base">
        <a class="hover:underline" href="#">Privacy</a>
        <span>|</span>
        <a class="hover:underline" href="#">Terms</a>
        <span>|</span>
        <a class="hover:underline" href="#">FAQs</a>
        <span>|</span>
        <a class="hover:underline" href="#">Help</a>
      </div>

      <!-- Copyright -->
      <p class="m-0 text-sm md:text-base">
        &copy; <a class="font-bold hover:underline" href="#">Domain Name</a>. All Rights Reserved. Designed by
        <a class="font-bold hover:underline" href="https://htmlcodex.com">HTML Codex</a>
      </p>
    </div>
  </footer>
  <!-- Footer End -->
</template>
