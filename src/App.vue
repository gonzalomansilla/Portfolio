<template>
  <div id="app">
    <Header></Header>

    <main class="font-body text-gray-dark">
      <div class="app-container">
        <AboutSection></AboutSection>
        
        <PortfolioSection></PortfolioSection>
      </div>
      
      <ContactSection></ContactSection>
    </main>
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
