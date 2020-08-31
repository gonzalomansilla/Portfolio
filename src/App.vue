<template>
  <div id="app">
    <Header></Header>

    <main class="font-body text-gray-dark">
      <div class="app-section-padding-x">
        <AboutSection></AboutSection>
        <PortfolioSection></PortfolioSection>
      </div>
      
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import AboutSection from "./components/sections/About";
import PortfolioSection from "./components/sections/Portfolio";
import ContactSection from "./components/sections/Contact";
import FooterSection from "./components/sections/Footer";

export default {
  name: 'App',
  components: {
    Header,
    AboutSection,
    PortfolioSection,
    ContactSection,
    FooterSection
  },
};
</script>

<style src="./assets/tailwind.css"></style>
