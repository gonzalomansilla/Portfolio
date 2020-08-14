<template>
  <div id="app">
    <!-- Header -->
    <Header></Header>

    <div class="app-container font-body">
      <AboutSection></AboutSection>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import AboutSection from "./components/sections/AboutSection";

export default {
  name: 'App',
  components: {
    Header,
    AboutSection
  },
};
</script>

<style src="./assets/tailwind.css"></style>
