<template>
  <footer class="grid gap-y-4 justify-items-center relative py-4 app-section-padding-x text-white text-center">
    <div class="footer-bg absolute inset-x-0"></div>
    <span class="text-sm lg:text-base font-light">Copyright © 2020 - Personal Portfolio HTML Template</span>
    <IconsList></IconsList>
  </footer>
</template>

<script>
import IconsList from "./../ui/IconsList";

export default {
  name: "FooterSection",
  components: {
    IconsList,
  },
};
</script>

<style lang="scss" scoped>
.footer-bg {
  z-index: -1;
  top: theme("space.-12");
  bottom: 0;
  clip-path: polygon(0 48px, 100% 0, 100% 100%, 0 100%);
  background-color: theme("colors.dark");
}
</style>