<template>
  <div
    class="proyect proyect-scale relative transition duration-500 shadow-sm hover:shadow-lg rounded-md overflow-hidden"
  >
    <img
      :src="proyect.imageUrl"
      loading="lazy"
      let="Proyect image"
      class="absolute inset-0 object-cover"
    />

    <div
      class="proyect__details lg:hidden absolute inset-x-0 bottom-0 h-12 sm:h-16 sm:text-lg w-full bg-primary-50 opacity-85"
    >
      <div
        class="w-full h-full grid gap-x-2 grid-cols-2 items-center p-3 text-base font-light text-white"
      >
        <p class="tracking-wider truncate">{{ proyect.title }}</p>
        <a class="justify-self-end capitalize" :href="proyect.repositoryUrl">View proyect</a>
      </div>
    </div>

    <div class="my__hover hidden absolute inset-0 bg-primary-50">
      <div class="w-full h-full grid grid-cols-1 items-center p-4 lg:p-8 text-white">
        <a
          :href="proyect.repositoryUrl"
          class="self-start text-lg xl:text-xl text-center tracking-wider"
        >{{ proyect.title }}</a>

        <p class="text-base xl:text-lg text-center font-light">{{ proyect.descript }}</p>

        <div class="flex justify-between self-end">
          <div class="flex gap-2">
            <ProyectTag
              v-for="(tag, index) in proyect.tecnologies"
              :key="index"
              theme="white"
              size="small"
              :text="tag"
            ></ProyectTag>
          </div>

          <a :href="proyect.repositoryUrl" class="self-end font-light capitalize">View proyect</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProyectTag from "./ProyectTag";

export default {
  name: "Proyect",
  components: {
    ProyectTag,
  },
  props: {
    proyect: {
      title: String,
      imageUrl: String,
      descript: String,
      tecnologies: [],
      repositoryUrl: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@screen lg {
  .proyect {
    &:hover .my__hover {
      display: block;
    }
  }
}

.proyect-scale {
  padding-top: 56.25%;
  width: theme("width.full");
  overflow: hidden;
}
</style>