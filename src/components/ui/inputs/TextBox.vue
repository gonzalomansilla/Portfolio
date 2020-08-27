<template>
  <input type="text" class="p-2 w-full h-12 text-base font-normal capitalize rounded-md shadow-md focus:outline-none" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "TextBox",
  props: {
    placeholder: {
      type: String,
      requiere: true
    }
  }
}
</script>

<style></style>