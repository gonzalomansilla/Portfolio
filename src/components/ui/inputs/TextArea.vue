<template>
  <textarea class="pl-4 w-full h-32 font-normal capitalize rounded-md shadow-md focus:outline-none" :placeholder="placeholder"></textarea>
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