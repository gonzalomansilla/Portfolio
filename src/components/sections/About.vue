<template>
  <BaseSection section-title="about me">
    <template #section-content>
      <div class="content">
        <!-- TODO Imagen de perfil -->
        <div class="about__img-perfil img-perfil">
          <div class="img-perfil__container hidden">
            <img src="img/optimized/perfil.jpg" alt="perfil_photo" />
          </div>
        </div>

        <div class="grid gap-6">
          <div class="grid gap-3">
            <h3 class="text-xl font-light text-primary-50 capitalize">who am i?</h3>
            <h2
              class="text-xl font-bold capitalize"
            >i'm john doe, a web developer and visual ux/ui designer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odio
              maiores, earum cupiditate ipsa recusandae pariatur aperiam enim
              blanditiis animi iusto tempora aliquam reprehenderit eius autem.
              Veniam odit minus rerum.
              <br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              quidem delectus alias sit ipsum ducimus id, perspiciatis itaque
              maiores commodi.
            </p>
          </div>

          <hr class="bg-gray-400" />

          <div class="more-info__container grid gap-8">
            <div class="info__labels grid gap-2 md:gap-4">
              <InfoLabel label-title="full name" label-value="john doe"></InfoLabel>
              <InfoLabel label-title="age" label-value="23"></InfoLabel>
              <InfoLabel label-title="email">
                <template #special-text>
                  <a class="text-primary-50" href="#">johndoe@example.com</a>
                </template>
              </InfoLabel>
              <InfoLabel label-title="from" label-value="buenos aires, argentina"></InfoLabel>
            </div>

            <BtnPrimary class="self-end" text="Dowload CV"></BtnPrimary>
          </div>
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<script>
import BaseSection from "./../base/BaseSection";
import BtnPrimary from "./../ui/buttons/Primary";
import InfoLabel from "./../ui/InfoLabel";

export default {
  name: "AboutSection",
  components: {
    BaseSection,
    BtnPrimary,
    InfoLabel,
  },
};
</script>

<style lang="scss" scoped>
.img-perfil__container {
  position: relative;
}

.img-perfil__container img {
  width: 200px;
  height: auto;
}

.img-perfil__container:before {
  z-index: -1;
  width: calc(100% + 32px);
  height: calc(100% + 32px);
}

/* Diseño */

.img-perfil__container img {
  object-fit: cover;
  object-position: top;
}

.img-perfil__container:before {
  content: "";
  /* background: $color-secundary; */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 30%);
}

@screen md {
  .more-info__container {
    grid-template: 1fr / auto 1fr;

    & button {
      justify-self: end;
    }
  }

  .info__labels {
    grid-template: 1fr 1fr / 1fr 1fr;
  }
}
</style>