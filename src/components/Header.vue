<template>
  <header class="relative w-full h-screen font-header">
    <div class="header__img absolute top-0 w-full h-screen"></div>

    <div class="header__text grid grid-rows-2 gap-8 h-screen">
			<h1 class="text-5xl sm:text-6xl self-end text-center text-primary font-light tracking-wider leading-tight">
				Hello<span class="text-white">, i'm
        <br class="block md:hidden">
        Johon Doe</span>
			</h1>
			<h1 class="text__profession self-start ss:w-auto px-12 py-2 sm:px-16 text-2xl sm:text-3xl text-center text-white">WEB DEVELOPER</h1>
    </div>

    <!-- <div class="header__social-icons social-icons icons_theme-white">
      <i class="fab fa-twitter fa-2x social-icons__icon icon"></i>
      <i class="fab fa-linkedin-in fa-2x social-icons__icon icon"></i>
      <i class="fab fa-github fa-2x social-icons__icon icon"></i>
      <i class="fab fa-stack-overflow fa-2x social-icons__icon icon"><a href=""></a></i>
    </div> -->
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/* DISEÑO */
.header__img {
  z-index: -10;
  background-image: url('./../../public/img/header-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 48px), 0 100%);
  filter: brightness(.25);
}

.text__profession {
  &:before {
      content: "";
      // TODO: Investigacion -> Uso de variables (opacity)
      background-color: hsla(219, 95%, 55%, 0.8);
      clip-path: polygon(12% 0, 100% 0%, 88% 100%, 0% 100%);
  }
}


/* LAYOUT */
.header__text {
  justify-items: center;
}

.header__img {
	height: calc(100% + 48px);
}

.text__profession {
  position: relative;
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

.header__social-icons {
    // @include positioning(absolute, calc(100vh - 80px), 50%, translateX(-50%));
}
</style>