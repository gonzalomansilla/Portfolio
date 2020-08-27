<template>
  <div id="app">
    <Header></Header>

    <main class="app-container font-body text-gray-dark">
      <AboutSection></AboutSection>
      
      <PortfolioSection></PortfolioSection>
    </main>
    
    <ContactSection></ContactSection>
  </div>
</template>

<script>
import Header from "./components/Header";
import AboutSection from "./components/sections/About";
import PortfolioSection from "./components/sections/Portfolio";
import ContactSection from "./components/sections/Contact";

export default {
  name: 'App',
  components: {
    Header,
    AboutSection,
    PortfolioSection,
    ContactSection
  },
};
</script>

<style src="./assets/tailwind.css"></style>
