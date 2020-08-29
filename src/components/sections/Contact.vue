<template>
  <BaseSection section-title="contact me">
    <template #section-content>
      <div class="relative px-4 py-12">
        <div class="contact-bg absolute inset-0"></div>

        <div class="grid grid-cols-1 grid-rows-content gap-y-12 py-8">
          <div class="grid gap-y-4">
            <div class="grid gap-y-2">
              <TextBox placeholder="full name"></TextBox>
              <TextBox placeholder="email"></TextBox>
              <TextArea placeholder="Message"></TextArea>
            </div>

            <BtnSecundary text="Send Message"></BtnSecundary>
          </div>

          <div class="contact-options grid grid-rows-content justify-items-center gap-y-6">
            <InfoIcon faIcon="fa-phone" text="(+54) 11-12345678" ></InfoIcon>
            <InfoIcon faIcon="fa-inbox" text="johondoe@example.com" ></InfoIcon>
            <InfoIcon faIcon="fa-location-arrow" text="Buenos Aires, Argentina" ></InfoIcon>
          </div>
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<script>
import BaseSection from "./../base/BaseSection";
import BtnSecundary from "./../ui/buttons/Secundary";
import TextBox from "./../ui/inputs/TextBox";
import TextArea from "./../ui/inputs/TextArea";
import InfoIcon from "./../ui/InfoIcon";

export default {
  name: "ContactSection",
  components: {
    BaseSection,
    BtnSecundary,
    TextBox,
    TextArea,
    InfoIcon
  },
};
</script>

<style lang="scss" scoped>
.contact-bg {
  z-index: -1;
  clip-path: polygon(0 48px, 100% 0, 100% calc(100% - 48px), 0 100%);
  background: theme("colors.primary-50");
}

@screen md {
  .contact-options {
    grid-template-columns: repeat(3, minmax(0, max-content));
    grid-gap: theme('gap.6');
    justify-content: center;
  }
  }
</style>