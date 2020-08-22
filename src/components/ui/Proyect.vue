<template>
  <div class="proyect relative h-64 shadow-sm rounded-md overflow-hidden border border-gray-200">
    <div class="proyect__img-container">
      <img
        :src="proyect.imageUrl"
        loading="lazy"
        let="Proyect image"
        class="proyect__img object-cover"
      />
    </div>

    <div class="proyect__details md:hidden absolute inset-x-0 bottom-0 h-12 sm:h-16 sm:text-lg w-full bg-primary-50 opacity-85">
      <div class="w-full h-full flex gap-4 justify-between items-center p-3 font-light text-white">
        <p>{{ proyect.title }}</p>
        <a :href="proyect.repositoryUrl">GitHub</a>
      </div>
    </div>

    <div class="my__hover hidden md:hover:block absolute inset-0 bg-primary-50 bg-opacity-90">
      <div class="w-full h-full grid grid-cols-1 items-center p-4 text-white">
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


// .proyect__details-hover {
//   opacity: 0;
//   transition: all 0.6s;
// }

// LAYOUT

// Patron de diseño
.proyect__img-container {
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  overflow: hidden;
}

.proyect__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

// .details {
//   display: grid;
//   grid-template-columns: 1fr auto;
//   grid-template-rows: 1fr 1fr 1fr;
//   grid-row-gap: 32px;
//   grid-column-gap: 32px;
//   grid-template-areas:
//     "title title"
//     "description description"
//     "labels link-github";

//   height: 100%;
//   width: 100%;
//   // height: calc(100% - 32px);
//   // width: calc(100% - 32px);
//   padding: 16px;
// }
</style>