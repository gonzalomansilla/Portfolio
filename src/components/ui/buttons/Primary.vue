<template>
  <BaseButton class="text-white bg-primary-50 hover:bg-primary-60">
    <template #text>
      {{ text }}
    </template>
  </BaseButton>
</template> 

<script>
import BaseButton from "./../../base/BaseButton";

export default {
  name: 'BtnPrimary',
  components: {
    BaseButton
  },
  props: {
    text: String
  }
}
</script>

<style>

</style>
