<template>
  <input type="text" class="app-input xl:h-14 focus:outline-none" :placeholder="placeholder" />
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