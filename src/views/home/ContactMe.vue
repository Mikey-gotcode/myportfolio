<template>
    <!-- Contact Start -->
<div class="w-full py-10 bg-gray-100" id="contact">
    <div class="container mx-auto px-4">
        <!-- Section Title -->
      <div class="relative flex justify-center items-center text-center mb-12">
        <h1 class="text-7xl font-bold uppercase text-gray-400 absolute opacity-20">
          CONTACT
        </h1>
        <h1 class="text-3xl font-bold uppercase text-teal-500 relative z-10">
        CONTACT ME
        </h1>
      </div>
        <div class="flex justify-center mt-8">
            <div class="w-full max-w-2xl bg-white shadow-lg p-6 rounded-lg">
                <form @submit.prevent="sendEmail"  novalidate>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="control-group">
                            <input v-model="form.name"  type="text" class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                                id="name" placeholder="Your Name" required />
                            <p class="text-red-500 text-sm mt-1 hidden">Please enter your name</p>
                        </div>
                        <div class="control-group">
                            <input v-model="form.email"  type="email" class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                                id="email" placeholder="Your Email" required />
                            <p class="text-red-500 text-sm mt-1 hidden">Please enter your email</p>
                        </div>
                    </div>
                    <div class="control-group mt-4">
                        <input v-model="form.subject"  type="text" class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                            id="subject" placeholder="Subject" required />
                        <p class="text-red-500 text-sm mt-1 hidden">Please enter a subject</p>
                    </div>
                    <div class="control-group mt-4">
                        <textarea v-model="form.message"  class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                            rows="5" id="message" placeholder="Message" required></textarea>
                        <p class="text-red-500 text-sm mt-1 hidden">Please enter your message</p>
                    </div>
                    <div class="mt-6 text-center">
                        <button class="px-6 py-3 text-lg font-semibold border bg-teal-400 text-primary rounded-md hover:bg-primary hover:bg-teal-600 hover:text-white transition-all" 
                            type="submit" id="sendMessageButton">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Contact End -->

</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});


const sendEmail = () => {
  if (!form.name || !form.email || !form.subject || !form.message) {
    alert("Please fill out all fields.");
    return;
  }

  const mailtoLink = `mailto:Michaelirungu042@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`;

  window.location.href = mailtoLink;
};
</script>