<template>
  <textarea class="h-24 app-input focus:outline-none" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    placeholder: {
      type: String,
      requiere: true,
    },
  },
};
</script>

<style></style>