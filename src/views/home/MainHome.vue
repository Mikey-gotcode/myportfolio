<script setup>
import AboutMe from './AboutMe.vue';
import HeaderHome from './HeaderHome.vue';
import SkillsMe from './SkillsMe.vue';
import EduExp from './EduExp.vue'
import FooterMain from './FooterMain.vue';
import MyPortfolio from './MyPortfolio.vue'
import MyServices from './MyServices.vue'
import ContactMe from './ContactMe.vue';


const eduExp={
  "education": [
    {
      "degree": "Bachelor of Informatics and Computer Science",
      "institution": "Strathmore University",
      "year": "2022 - CURRENT",
      "description": "Studying software engineering, data structures, and system design with hands-on projects."
    },
    {
      "degree": "High School KCSE",
      "institution": "Damacrest Group of School",
      "year": "2018 - 2022",
      "description": "Completed high school with a B(65)."
    }
  ],
  "experience": [
    {
      "title": "Full Stack Developer",
      "company": "Freelance",
      "year": "2022 - Present",
      "description": "Developing web and mobile applications using MERN, Kotlin, and Laravel with real-time data processing."
    },
    {
      "title": "Software Engineering Intern",
      "company": "Xtranet Communications",
      "year": "2025 - CURRENT",
      "description": "Worked on API development, database optimization, and UI/UX improvements for enterprise applications."
    }
  ]
}


const aboutData = {
  name: "Michael Irungu Mwangi",
  birthday: "26 February 2003",
  degree: "Bachelor of Informatics and Computer Science",
  experience: 3,
  phone: "+254 710773514",
  email: "Michaelirungu042@gmail.com",
  address: "P.O Box 136 00621, Kenya",
  freelance: "Available",
  role: "Fullstack Developer",
  bio: "I'm a full-stack developer with experience in MERN, Kotlin, and Laravel. I build interactive web and mobile applications, integrating real-time data, state management, and scalable backend services. My projects range from mapping applications with WebSockets to e-commerce platforms and financial transaction systems. I enjoy problem-solving, optimizing performance, and experimenting with new tech stacks to create efficient and user-friendly solutions.",
  image: "/src/assets/img/about.jpeg",
  hireMeLink: "#",
  learnMoreLink: "#"
};
</script>


<template>
  <div class="Home">
    <HeaderHome />
    <AboutMe :aboutData="aboutData"/>
    <EduExp :eduExp="eduExp"/>
    <SkillsMe class="px-15"/>
    <MyServices/>
    <MyPortfolio/>
    <ContactMe/>
    <FooterMain/>
  </div>
</template>
