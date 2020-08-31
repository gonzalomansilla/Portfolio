<template>
  <input type="text" class="app-input focus:outline-none" :placeholder="placeholder" />
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