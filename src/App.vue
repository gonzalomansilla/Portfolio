<template>
  <div id="app">
    <!-- Header -->
    <Header></Header>

    <div class="app-container font-body">
      <AboutSection></AboutSection>
      <PortfolioSection></PortfolioSection>
    </div>
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
