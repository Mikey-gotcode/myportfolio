<template>
  <div>
    <!-- About Section -->
    <div class="py-16 bg-white flex justify-center" id="about">
      <div class="max-w-6xl w-full px-6">
        <!-- Section Title -->
        <div class="relative flex justify-center items-center text-center mb-10">
          <h1 class="absolute font-bold uppercase text-gray-400 opacity-20 text-5xl md:text-6xl lg:text-7xl">
            ABOUT
          </h1>
          <h1 class="relative z-10 font-bold uppercase text-teal-500 text-2xl md:text-3xl lg:text-4xl">
            ABOUT ME
          </h1>
        </div>

        <!-- Content Grid -->
        <div class="flex flex-col md:flex-row items-center justify-center px-6">
          <!-- Image -->
          <div class="flex justify-center">
            <img class="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full shadow-lg"
              src="/src/assets/img/about.jpeg" alt="About Me">
          </div>

          <!-- Text Content -->
          <div class="text-left max-w-lg px-5 mt-6 md:mt-0">
            <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Fullstack Developer
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
              I'm a full-stack developer with experience in MERN, Kotlin, and Laravel. I build interactive web and
              mobile applications, integrating real-time data, state management, and scalable backend services. My
              projects range from mapping applications with WebSockets to e-commerce platforms and financial transaction
              systems. I enjoy problem-solving, optimizing performance, and experimenting with new tech stacks to create
              efficient and user-friendly solutions.
            </p>

            <!-- Info Grid -->
            <div class="flex flex-col md:flex-row justify-start mt-6 text-sm md:text-base gap-y-4">
              <div class="w-full md:w-1/2">
                <h6 class="font-medium text-gray-700">Name: <span class="text-gray-600">Michael Irungu Mwangi</span>
                </h6>
                <h6 class="font-medium text-gray-700">Birthday: <span class="text-gray-600">26 February 2003</span></h6>
                <h6 class="font-medium text-gray-700">Degree: <span class="text-gray-600">Bachelor of Informatics and
                    Computer Science</span></h6>
                <h6 class="font-medium text-gray-700">Experience: <span class="text-gray-600">3 Years</span></h6>
              </div>
              <div class="w-full md:w-1/2">
                <h6 class="font-medium text-gray-700">Phone: <span class="text-gray-600">+254 710773514</span></h6>
                <h6 class="font-medium text-gray-700">Email: <span
                    class="text-gray-600">Michaelirungu042@gmailcom.</span></h6>
                <h6 class="font-medium text-gray-700">Address: <span class="text-gray-600">P.O Box 136 00621 ,
                    Kenya</span></h6>
                <h6 class="font-medium text-gray-700">Freelance: <span class="text-gray-600">Available</span></h6>
              </div>
            </div>


            <!-- Buttons -->
            <div class="mt-6 flex flex-wrap gap-4">
              <a href="#"
                class="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border border-teal-500 text-teal-500 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition">
                Hire Me
              </a>
              <a href="#"
                class="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 border border-teal-500 text-teal-500 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition">
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>