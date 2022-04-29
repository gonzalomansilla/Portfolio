<template>
  <header class="relative w-full h-screen mb-12 font-header">
    <div class="header__img absolute top-0 w-full h-screen"></div>

    <div class="header__content h-screen items-center">
      <div class="content__text grid grid-flow-row gap-8 content-center">
        <h1
          class="text-5xl sm:text-6xl text-center text-white font-light tracking-wider leading-tight"
        >
          <span class="text-primary-50">Hello</span>
          <span class="">, i'm </span>
          <br class="block md:hidden" />John Doe
        </h1>

        <h1
          class="text__profession relative px-12 py-1 sm:px-16 text-2xl sm:text-3xl text-center text-white"
        >
          WEB DEVELOPER
        </h1>
      </div>

      <IconsList class="mb-12"></IconsList>
    </div>
  </header>
</template>

<script>
import IconsList from "./ui/IconsList";

export default {
  name: "Header",
  components: {
    IconsList,
  },
};
</script>

<style lang="scss" scoped>
/* DISEÑO */
.header__img {
  z-index: -10;
  background-image: url("./../../public/img/header-bg.jpg");
  background-size: theme('backgroundSize.cover');
  background-position: theme('backgroundPosition.center');
  background-repeat: no-repeat;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - theme('spacing.12')), 0 100%);
  filter: brightness(0.25);
}

.text__profession {
  &:before {
    content: "";
    background-color: theme("colors.primary-50");
    opacity: theme("opacity.85");
    clip-path: polygon(12% 0, 100% 0%, 88% 100%, 0% 100%);
  }
}

/* LAYOUT */
.header__img {
  height: calc(100% + theme('spacing.12'));
}

.header__content {
  display: grid;
  grid-template-rows: 1fr auto;

  justify-items: center;

  & .content__text {
    justify-items: center;

    .text__profession {
      min-width: 264px;
      max-width: max-content;
  
      &::before {
        position: absolute;
        display: inline-block;
        z-index: -1;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>