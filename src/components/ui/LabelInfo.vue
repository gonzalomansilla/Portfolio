<template>
  <p class="align-middle">
    <span class="font-bold capitalize">{{ labelTitle }}: </span>
    <span class="pl-1 capitalize opacity-75">{{ labelValue }}</span>
    <slot name="special-text"></slot>
  </p>
</template>

<script>
export default {
  name: 'LabelInfo',
  props: {
    labelTitle: {
      type: String,
      requiere: true,
      default: 'Title'
    },
    labelValue: {
      type: String,
      requiere: true
    }
  }
}
</script>

<style scoped>
p {
  width: max-content;
}
</style>