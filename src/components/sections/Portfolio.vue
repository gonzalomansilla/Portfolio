<template>
  <BaseSection section-title="my portfolio">
    <template #section-content>
      <section class="grid gap-8">
        <div class="flex gap-2 flex-wrap justify-center">
          <ProyectTag
            v-for="(tag, index) in proyectTags"
            :key="index"
            theme="blue"
            :size="isScreenXL ? 'medium' : 'small'"
            :text="tag"
          ></ProyectTag>
        </div>

        <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
          <!-- TODO feat: Ocultar proyectos que NO coninciden con el tag seleccionado -->
          <Proyect v-for="(proyect, index) in proyects" :key="index" :proyect="proyect"></Proyect>
        </div>

        <p class="text-2xl text-center">
          <i class="fas fa-chevron-down p-2 animate-pulse"></i>
        </p>
      </section>
    </template>
  </BaseSection>
</template>

<script>
import BaseSection from "./../base/BaseSection";
import ProyectTag from "./../ui/ProyectTag";
import Proyect from "./../ui/Proyect";

export default {
  name: "PortfolioSection",
  components: {
    BaseSection,
    ProyectTag,
    Proyect,
  },
  data: function () {
    return {
      isScreenXL: false,
      proyectTags: [
        "JavaScript",
        "Vue",
        "C#",
        ".NET Core",
        "Entity Framework",
        "Java",
        "Spring Boot",
        "SQL Server",
      ],
      proyects: [
        {
          title: "Proyect Title",
          imageUrl: "/img/proyect-img.jpg",
          descript:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia dolorum voluptas, amet consectetur adipisicing elit.",
          tecnologies: ["Vue", "C#"],
          repositoryUrl: "https://github.com/NewtonGrav",
        },
        {
          title: "Proyect Title",
          imageUrl: "/img/proyect-img2.jpg",
          descript:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia dolorum voluptas, amet consectetur adipisicing elit.",
          tecnologies: ["JavaScript"],
          repositoryUrl: "https://github.com/NewtonGrav",
        },
        {
          title: "Proyect Title",
          imageUrl: "/img/proyect-img4.jpg",
          descript:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia dolorum voluptas, amet consectetur adipisicing elit.",
          tecnologies: ["Java", "Spring Boot"],
          repositoryUrl: "https://github.com/NewtonGrav",
        },
        {
          title: "Proyect Title",
          imageUrl: "/img/proyect-img5.jpg",
          descript:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia dolorum voluptas, amet consectetur adipisicing elit.",
          tecnologies: ["C#", ".NET Core"],
          repositoryUrl: "https://github.com/NewtonGrav",
        },
        {
          title: "Proyect Title",
          imageUrl: "/img/proyect-img6.jpg",
          descript:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia dolorum voluptas, amet consectetur adipisicing elit.",
          tecnologies: ["Vue", ".NET Core"],
          repositoryUrl: "https://github.com/NewtonGrav",
        },
        {
          title: "Proyect Title",
          imageUrl: "/img/proyect-img7.jpg",
          descript:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia dolorum voluptas, amet consectetur adipisicing elit.",
          tecnologies: ["Java"],
          repositoryUrl: "https://github.com/NewtonGrav",
        },
      ],
    };
  },
  mounted () {
    const mediaQueryXL = window.matchMedia("(min-width: 1280px)");

    mediaQueryXL.addListener(this.machScreen);

    this.machScreen(mediaQueryXL);
  },
  methods: {
    machScreen (e) {
      if (e.matches) this.isScreenXL = true
      else this.isScreenXL = false
    }
  },
};
</script>

<style lang="scss" scoped></style>