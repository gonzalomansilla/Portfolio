<template>
  <div id="app">
    <Header></Header>

    <main class="app-container font-body text-gray-dark">
      <AboutSection></AboutSection>
      
      <PortfolioSection></PortfolioSection>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import AboutSection from "./components/sections/About";
import PortfolioSection from "./components/sections/Portfolio";

export default {
  name: 'App',
  components: {
    Header,
    AboutSection,
    PortfolioSection
  },
};
</script>

<style src="./assets/tailwind.css"></style>
