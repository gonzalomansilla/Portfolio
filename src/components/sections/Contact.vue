<template>
  <BaseSection section-title="Contact Me">
    <template #section-content>
      <div class="relative px-4 py-12">
        <div class="contact-bg absolute inset-0"></div>

        <div class="grid grid-cols-1 grid-rows-2 gap-y-12 pt-8">
          <div class="grid gap-y-4">
            <div class="grid gap-y-2">
              <TextBox placeholder="full name"></TextBox>
              <TextBox placeholder="email"></TextBox>
              <TextArea placeholder="Message"></TextArea>
            </div>

            <BtnSecundary text="Send Message"></BtnSecundary>
          </div>

          <!-- TODO fix -->
          <div class="contact__contact-options contact-options icons_theme-white">
            <!-- TODO Componente InfoIcon  -->
            <div class="contact-option">
              <i class="fas fa-phone contact-option__icon icon"></i>
              <span class="contact-option__title">Phone</span>
              <span class="contact-option__text">(+54) 11-34563422</span>
            </div>
            <div class="contact-option">
              <i class="fas fa-inbox contact-option__icon icon"></i>
              <span class="contact-option__title">Email</span>
              <span class="contact-option__text">johondoe@gmail.com</span>
            </div>
            <div class="contact-option">
              <i class="fas fa-location-arrow contact-option__icon icon"></i>
              <span class="contact-option__title">Location</span>
              <span class="contact-option__text">Argentina, Buenos Aires</span>
            </div>
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

export default {
  name: "ContactSection",
  components: {
    BaseSection,
    BtnSecundary,
    TextBox,
    TextArea
  },
};
</script>

<style lang="scss" scoped>
/* Design */
.contact-bg {
  z-index: -1;
  clip-path: polygon(0 48px, 100% 0, 100% calc(100% - 48px), 0 100%);
  background: theme("colors.primary-50");
}

.contact-option__text {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  font-size: 16px;
}

.contact-option__title {
  font-weight: 300;
  color: white;
}

/* Layout */
.contact-options {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 16px;
  justify-content: flex-start;
  align-self: center;
}

.contact-option {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "contact-icon contact-title"
    ".            contact-text";
  grid-column-gap: 16px;
  justify-self: left;
}

.contact-option__icon {
  grid-area: contact-icon;
}

.contact-option__title {
  grid-area: contact-title;
}

.contact-option__text {
  grid-area: contact-text;
}
</style>