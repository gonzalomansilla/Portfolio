<template>
  <button class="w-full md:w-auto font-light px-8 py-2 rounded-md shadow-md">
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      requiere: true
    }
  }
}
</script>

<style>

</style>