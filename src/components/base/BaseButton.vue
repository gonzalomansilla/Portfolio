<template>
  <button class="w-full px-12 py-2 tracking-wider font-medium rounded-md shadow-md hover:shadow focus:outline-none">
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

@screen md {
  button {
    width: max-content;
  }
}
</style>