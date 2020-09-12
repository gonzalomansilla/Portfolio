<template>
  <section class="grid grid-cols-1 justify-center pt-32 gap-y-12">
    <h2 class="section__title relative w-max-content mx-auto text-3xl uppercase leading-none">
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
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 2px;
    height: theme('spacing.3');
    top: 40%;
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
    top: 40%;
    transform: translateY(-50%);
    right: theme('space.-3');
    background: theme('colors.primary-50');
  }
}
</style>