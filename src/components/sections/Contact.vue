<template>
  <BaseSection section-title="contact me">
    <template #section-content>
      <div class="relative py-12">
        <div class="contact-bg absolute inset-0"></div>

        <div class="contact app-section-padding-x grid grid-cols-1 gap-x-16 gap-y-4 py-8">
          <div class="contact__form grid md:grid-cols-2 gap-2">
            <TextBox placeholder="full name"></TextBox>
            <TextBox placeholder="email"></TextBox>
            <TextArea class="md:col-span-2" placeholder="Message"></TextArea>
          </div>

          <div class="info-icons-container grid justify-items-center gap-y-6 mt-12 md:gap-12 md:my-auto">
            <InfoIcon faIcon="fa-phone" text="(+54) 11-12345678" ></InfoIcon>
            <InfoIcon faIcon="fa-inbox" text="johondoe@example.com" ></InfoIcon>
            <InfoIcon faIcon="fa-location-arrow" text="Buenos Aires, Argentina" ></InfoIcon>
          </div>

          <BtnSecundary class="md:row-start-2" text="Send Message"></BtnSecundary>
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

@screen ss {
  .contact {
    & .info-icons-container {
      order: 3;
    }
  }
}

@screen md {
  .contact {
    grid-template-columns: 1fr max-content;

    & .contact__form {
      grid-template-rows: max-content 1fr;
    }

    & .info-icons-container {
      justify-items: start;
      align-content: center;
    }
  }


}
</style>