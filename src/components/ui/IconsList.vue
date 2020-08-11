<template>
  <div
    :class="{'text-gray-900': darkIcons, 'text-white': !darkIcons}"
    class="grid grid-flow-col gap-4 text-3xl"
  >
    <i class="fab fa-twitter fa-fw p-2"></i>
    <a href="https://www.linkedin.com/in/gonzalomansilla" target="_blank" rel="external">
      <i class="fab fa-linkedin-in p-2"></i>
    </a>
    <a href="https://github.com/NewtonGrav" target="_blank" rel="external">
      <i class="fab fa-github p-2"></i>
    </a>
    <a href="https://es.stackoverflow.com/users/83332/gonzalom" target="_blank" rel="external">
      <i class="fab fa-stack-overflow p-2"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "IconsList",
  props: {
    darkIcons: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
};
</script>

<style>

</style>