<template>
  <button class="w-full md:w-auto px-8 py-2 tracking-wide font-light rounded-md shadow-md">
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped>
button {
  height: max-content;
}
</style>