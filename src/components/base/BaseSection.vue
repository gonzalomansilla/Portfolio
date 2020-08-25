<template>
  <section class="pt-32 text-gray-dark">
    <h2 class="section__title w-max-content mx-auto mb-12 text-3xl text-center uppercase">
      {{ sectionTitle }}
    </h2>

    <slot name="section-content">

    </slot>
  </section>
</template>

<script>
export default {
  name: "BaseSection",
  props: {
    sectionTitle: {
      type: String,
      default: 'Section Title'
    }
  }
};
</script>

<style lang="scss" scoped>
.section__title {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 2px;
    height: theme('spacing.3');
    top: 45%;
    transform: translateY(-50%);
    left: theme('space.-3');
    background: theme('colors.primary-50');
  }

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 2px;
    height: theme('spacing.3');
    top: 45%;
    transform: translateY(-50%);
    right: theme('space.-3');
    background: theme('colors.primary-50');
  }
}
</style>