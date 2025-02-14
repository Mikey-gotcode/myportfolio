<script setup>
import AboutMe from './AboutMe.vue';
import HeaderHome from './HeaderHome.vue';
import SkillsMe from './SkillsMe.vue';
import EduExp from './EduExp.vue'
import FooterMain from './FooterMain.vue';
import MyPortfolio from './MyPortfolio.vue'
import MyServices from './MyServices.vue'
import ContactMe from './ContactMe.vue';
</script>


<template>
  <div class="Home">
    <HeaderHome/>
    <AboutMe/>
    <EduExp/>
    <SkillsMe class="px-15"/>
    <MyServices/>
    <MyPortfolio/>
    <ContactMe/>
    <FooterMain/>
  </div>
</template>
