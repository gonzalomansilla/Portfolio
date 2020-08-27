<template>
   <BaseButton class="text-primary-50 bg-white active:bg-gray-200">
    <template #text>
      {{ text }}
    </template>
  </BaseButton>
</template>

<script>
import BaseButton from "./../../base/BaseButton";

export default {
  name: 'BtnSecundary',
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