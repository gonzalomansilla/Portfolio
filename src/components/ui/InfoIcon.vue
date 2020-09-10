<template>
  <div class="info-icons grid grid-rows-2 gap-y-2 gap-x-4 justify-items-center  full-max-content text-white">
    <i class="fas icon text-xl md:text-2xl" :class="faIcon"></i>
    <span class="text-base font-light">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "InfoIcon",
  props: {
    faIcon: {
      type: String,
      requiere: true
    },
    text: {
      type: String,
      requiere: true
    }
  }
}
</script>

<style lang="scss" scoped>

@screen md {
  .info-icons {
    display: flex;
  }
}
</style>