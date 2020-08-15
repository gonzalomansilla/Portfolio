<template>
  <AppSection section-title="About Me">
    <template #section-content>
      <div class="content">
        <div class="about__img-perfil img-perfil">
          <div class="img-perfil__container hidden">
            <img src="img/optimized/perfil.jpg" alt="perfil_photo" />
          </div>
        </div>

        <!-- Text -->
        <div class="">
          <h3 class="mb-2 text-xl font-light text-primary-50 capitalize">who am i?</h3>
          <h2 class="mb-2 text-xl font-bold capitalize">i'm  john doe, a web developer and  visual ux/ui designer</h2>
          <p class="pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio
            maiores, earum cupiditate ipsa recusandae pariatur aperiam enim
            blanditiis animi iusto tempora aliquam reprehenderit eius autem.
            Veniam odit minus rerum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quidem delectus alias sit ipsum ducimus id, perspiciatis itaque
            maiores commodi.
          </p>
        </div>

        <hr class="bg-gray-400 my-8">

        <!-- TODO More info -->

        <!-- TODO Component -> Button primary -->
        <div class="about__more-info mb-12">
          <button class="bg-primary-50 w-full md:w-auto text-white font-light px-8 py-2 rounded-md shadow-md hover:bg-primary-60">
            Dowload CV
          </button>
        </div>
      </div>
    </template>
  </AppSection>
</template>

<script>
import AppSection from "./../base/BaseSection";

export default {
  name: "AboutSection",
  components: {
    AppSection,
  },
};
</script>

<style lang="scss" scoped>
.img-perfil__container {
  position: relative;
}

.img-perfil__container img{
  width: 200px;
  height: auto;
}

.img-perfil__container:before{
  z-index: -1;
  width: calc(100% + 32px);
  height: calc(100% + 32px);
  /* @include positioning(absolute, -16px, 50%, translateX(-50%)); */
}

// .about__more-info {
//   display: flex;
//   justify-self: right;
// }

/* Diseño */

.img-perfil__container img{
  object-fit: cover;
  object-position: top;
  /* box-shadow: $shadow-img; */
}

.img-perfil__container:before {
  content: "";
  /* background: $color-secundary; */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 30%);
}

.perfil__subtitle {
   /* font-size: $text-size__subtitle; */
   /* color: $color-secundary;
   font-weight: $font-weight__medium; */
   /* letter-spacing: $letter-spacing__normal; */
}

.perfil__parraf {
  /* color: $text-primary; */
}
</style>