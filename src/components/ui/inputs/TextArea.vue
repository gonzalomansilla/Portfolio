<template>
  <textarea class="p-2 w-full h-32 text-base text-gray-700 font-normal capitalize rounded-md shadow-md focus:outline-none" :placeholder="placeholder"></textarea>
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