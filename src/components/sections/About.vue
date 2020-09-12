<template>
  <BaseSection section-title="about me">
    <template #section-content>
      <div class="about-container lg:grid lg:gap-x-10">
        <div class="hidden lg:block w-full my-auto">
          <img src="/img/perfil.png" alt="Foto de perfil" />
        </div>

        <div class="grid gap-6">
          <div class="grid gap-3">
            <h3 class="text-xl md:text-2xl font-light text-primary-50 capitalize">who am i?</h3>
            <h2
              class="text-lg  md:text-xl font-bold capitalize"
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
            <div class="info__labels grid gap-2 md:gap-4 items-end">
              <InfoLabel label-title="full name" label-value="john doe"></InfoLabel>
              <InfoLabel label-title="age" label-value="23"></InfoLabel>
              <InfoLabel label-title="email">
                <template #special-text>
                  <a class="text-primary-50" href="#">johndoe@example.com</a>
                </template>
              </InfoLabel>
              <InfoLabel label-title="from" label-value="buenos aires, argentina"></InfoLabel>
            </div>

            <BtnPrimary class="self-end lg:mb-2" text="Dowload CV"></BtnPrimary>
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
@screen md {
  .more-info__container {
    grid-template: max-content / 1fr max-content;

    & button {
      justify-self: end;
    }
  }

  .info__labels {
    grid-template: 1fr 1fr / 1fr 1fr;
  }
}

@screen lg {
  .about-container {
    grid-template-columns: 20% 1fr;
  }
}
</style>