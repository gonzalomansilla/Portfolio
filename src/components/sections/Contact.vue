<template>
  <BaseSection section-title="contact me">
    <template #section-content>
      <div class="relative py-12 app-section-padding-x">
        <div class="contact-bg absolute inset-0"></div>

        <div class="contact__inner grid grid-cols-1 grid-rows-content gap-12 py-8">
          <div class="grid gap-y-4">
            <div class="contact__form grid md:grid-cols-2 gap-2">
              <TextBox placeholder="full name"></TextBox>
              <TextBox placeholder="email"></TextBox>
              <TextArea class="md:col-span-2" placeholder="Message"></TextArea>
            </div>

            <!-- TODO Responsive en md (Observer)-->
            <BtnSecundary text="Send Message"></BtnSecundary>
          </div>

          <div class="contact-options grid grid-rows-content justify-items-center gap-6">
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
  .contact__inner {
    grid-template-columns: 2fr 1fr;
  }

  .contact__form {
    grid-template-rows: max-content 1fr;
  }
}
</style>