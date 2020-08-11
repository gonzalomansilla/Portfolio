<template>
  <header class="relative w-full h-screen mb-12 font-header">
    <div class="header__img absolute top-0 w-full h-screen"></div>

    <div class="header__content grid grid-rows-2 gap-8 h-screen">
      <h1
        class="text-5xl sm:text-6xl self-end text-center text-white font-light tracking-wider leading-tight"
      >
        <span class="text-primary">Hello</span>
        <span class="">, i'm </span>
        <br class="block md:hidden" />Johon Doe
      </h1>

      <h1
        class="text__profession relative self-start ss:w-auto px-12 py-1 sm:px-16 text-2xl sm:text-3xl text-center text-white"
      >WEB DEVELOPER</h1>

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
    background-color: theme("colors.primary");
    opacity: theme("opacity.75");
    clip-path: polygon(12% 0, 100% 0%, 88% 100%, 0% 100%);
  }
}

/* LAYOUT */
.header__content {
  justify-items: center;
}

.header__img {
  height: calc(100% + theme('spacing.12'));
}

.text__profession {
  min-width: 264px;

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
</style>