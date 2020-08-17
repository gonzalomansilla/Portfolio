<template>
  <BaseSection section-title="my portfolio">
    <template #section-content>
      <section class="grid gap-8">
        <div class="flex gap-2 flex-wrap justify-center">
          <!-- TODO Crear ciclo for -->
          <ProyectTag theme="blue" size="small" text="JavaScript"></ProyectTag>
          <ProyectTag theme="blue" size="small" text="Vue"></ProyectTag>
          <ProyectTag theme="blue" size="small" text="c#"></ProyectTag>
          <ProyectTag theme="blue" size="small" text=".NET Core"></ProyectTag>
          <ProyectTag theme="blue" size="small" text="Entity Framework"></ProyectTag>
          <ProyectTag theme="blue" size="small" text="Java"></ProyectTag>
          <ProyectTag theme="blue" size="small" text="Spring Boot"></ProyectTag>
          <ProyectTag theme="blue" size="small" text="SQL Server"></ProyectTag>
        </div>

        <div class="proyects grid gap-4">
          <!-- TODO Proyectos -->
          <div>
            PROYECTS CONTAINER
            <!-- 
            <div class="proyect">
              <div class="proyect__img-container">
                <img
                  src="img/optimized/proyect-img.jpg"
                  loading="lazy"
                  lt="Proyect image"
                  class="proyect__img center-img"
                />
              </div>

              <div class="proyect__details details">
                <h3 class="details__title">Proyect Title</h3>
                <p class="details__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
                  dolorum voluptas, amet consectetur adipisicing elit
                </p>
                <div class="details__labels labels">
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>HTML</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>CSS</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>JavaScript</a>
                  </div>
                </div>
                <a href class="details__link-github">GitHub</a>
              </div>
            </div>

            <div class="proyect">
              <div class="proyect__img-container">
                <img
                  src="img/optimized/proyect-img2.jpg"
                  loading="lazy"
                  alt="Proyect image"
                  class="proyect__img center-img"
                />
              </div>
              <div class="proyect__details details">
                <h3 class="details__title">Proyect Title</h3>
                <p class="details__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
                  dolorum voluptas.
                </p>
                <div class="details__labels labels">
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>HTML</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>CSS</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>JavaScript</a>
                  </div>
                </div>
                <a href class="details__link-github">GitHub</a>
              </div>
            </div>

            <div class="proyect">
              <div class="proyect__img-container">
                <img
                  src="img/optimized/proyect-img7.jpg"
                  loading="lazy"
                  alt="Proyect image"
                  class="proyect__img center-img"
                />
              </div>
              <div class="proyect__details details">
                <h3 class="details__title">Proyect Title</h3>
                <p class="details__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
                  dolorum voluptas.
                </p>
                <div class="details__labels labels">
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>HTML</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>CSS</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>JavaScript</a>
                  </div>
                </div>
                <a href class="details__link-github">GitHub</a>
              </div>
            </div>

            <div class="proyect">
              <div class="proyect__img-container">
                <img
                  src="img/optimized/proyect-img4.jpg"
                  loading="lazy"
                  alt="Proyect image"
                  class="proyect__img center-img"
                />
              </div>
              <div class="proyect__details details">
                <h3 class="details__title">Proyect Title</h3>
                <p class="details__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
                  dolorum voluptas.
                </p>
                <div class="details__labels labels">
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>HTML</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>CSS</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>JavaScript</a>
                  </div>
                </div>
                <a href class="details__link-github">GitHub</a>
              </div>
            </div>

            <div class="proyect">
              <div class="proyect__img-container">
                <img
                  src="img/optimized/proyect-img5.jpg"
                  loading="lazy"
                  alt="Proyect image"
                  class="proyect__img center-img"
                />
              </div>
              <div class="proyect__details details">
                <h3 class="details__title">Proyect Title</h3>
                <p class="details__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
                  dolorum voluptas.
                </p>
                <div class="details__labels labels">
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>HTML</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>CSS</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>JavaScript</a>
                  </div>
                </div>
                <a href class="details__link-github">GitHub</a>
              </div>
            </div>

            <div class="proyect">
              <div class="proyect__img-container">
                <img
                  src="img/optimized/proyect-img6.jpg"
                  loading="lazy"
                  alt="Proyect image"
                  class="proyect__img center-img"
                />
              </div>
              <div class="proyect__details details">
                <h3 class="details__title">Proyect Title</h3>
                <p class="details__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia
                  dolorum voluptas.
                </p>
                <div class="details__labels labels">
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>HTML</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>CSS</a>
                  </div>
                  <div class="labels__label label label_size_small label_theme_white">
                    <a href>JavaScript</a>
                  </div>
                </div>
                <a href class="details__link-github">GitHub</a>
              </div>
            </div>-->
          </div>

          <a class="uppercase">view more</a>
        </div>
      </section>
    </template>
  </BaseSection>
</template>

<script>
import BaseSection from "./../base/BaseSection";
import ProyectTag from "./../ui/ProyectTag"

export default {
  name: "PortfolioSection",
  components: {
    BaseSection,
    ProyectTag
  },
};
</script>

<style lang="scss" scoped>
.proyect {
  &:hover > .proyect__details {
    opacity: 1;
  }
}

.proyect__img-container {
  object-fit: cover;
}

.proyect__details {
  opacity: 0;
  transition: all 0.6s;
}

.details {
  text-align: center;
}

.details__title {
  text-transform: uppercase;
}

.center-img {
  object-fit: cover;
  height: 100%;
}


// LAYOUT
.portfolio__title {
  grid-area: title;
}

.proyect {
  position: relative;
}

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

.details {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 32px;
  grid-column-gap: 32px;
  grid-template-areas:
    "title title"
    "description description"
    "labels link-github";

  height: 100%;
  width: 100%;
  // height: calc(100% - 32px);
  // width: calc(100% - 32px);
  padding: 16px;
}

.details__title {
  grid-area: title;
  align-self: center;
}

.details__description {
  grid-area: description;
}

.details__labels {
  grid-area: labels;
  justify-content: left;
  align-self: flex-end;
  // Parche: soluciona alineamiento con respecto al link de GitHub
  margin-bottom: -4px;
}

.details__link-github {
  align-self: flex-end;
}
</style>