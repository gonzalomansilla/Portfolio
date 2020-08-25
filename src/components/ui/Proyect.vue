<template>
  <div class="proyect proyect-scale relative shadow-md rounded-md overflow-hidden">
    <img
      :src="proyect.imageUrl"
      loading="lazy"
      let="Proyect image"
      class="absolute inset-0 object-cover"
    />

    <div class="proyect__details md:hidden absolute inset-x-0 bottom-0 h-12 sm:h-16 sm:text-lg w-full bg-primary-50 opacity-85">
      <div class="w-full h-full grid gap-4 grid-cols-2 items-center p-3 font-light text-white">
        <p class="font-normal tracking-wider truncate" >{{ proyect.title }}</p>
        <a class="justify-self-end" :href="proyect.repositoryUrl">View proyect</a>
      </div>
    </div>

    <div class="my__hover hidden md:hover:block absolute inset-0 bg-primary-50 bg-opacity-90">
      <!-- TODO Padding segun screen -->
      <div class="w-full h-full grid grid-cols-1 items-center p-4 text-white">
        <!-- TODO Size text segun screen -->
        <a :href="proyect.repositoryUrl" class="self-start text-lg text-center tracking-wider">{{ proyect.title }}</a>

        <p class="text-center font-light tracking-wider">{{ proyect.descript }}</p>

        <div class="flex justify-between self-end">
          <div class="flex gap-2 ">
            <ProyectTag
              v-for="(tag, index) in proyect.tecnologies"
              :key="index"
              theme="white"
              size="small"
              :text="tag"
            ></ProyectTag>
          </div>

          <a :href="proyect.repositoryUrl" class="self-end font-light">View proyect</a>
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
    ProyectTag
  },
  props: {
    proyect: {
      title: String,
      imageUrl: String,
      descript: String,
      tecnologies: [],
      repositoryUrl: String
    }
  }
};
</script>

<style lang="scss" scoped>
@screen md {
  .proyect:hover .my__hover{
    display: block;
  }
}

.proyect-scale {
  // Scale
  padding-top: 56.25%;
  width: theme('width.full');
  overflow: hidden;
}
</style>