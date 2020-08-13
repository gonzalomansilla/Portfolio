<template>
  <section class="pt-32 text-gray-dark">
    <h2 class="mb-12 text-3xl text-center capitalize">{{ sectionTitle }}</h2>

    <slot name="section-content">

    </slot>
  </section>
</template>

<script>
export default {
  name: "AppSection",
  props: {
    sectionTitle: {
      type: String,
      default: 'Section Title'
    }
  }
};
</script>

<style lang="scss" scoped></style>