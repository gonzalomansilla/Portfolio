<template>
  <a
    class="font-light bg-gray-400 rounded-full"
    :class="[this.getTheme, this.getSize]"
    href="#"
  >{{ text }}</a>
</template>

<script>
export default {
  name: "ProyectTag",
  props: {
    text: {
      type: String,
      default: "Text",
    },
    theme: {
      type: String,
      validator: (theme) => ["blue", "white"].includes(theme),
    },
    size: {
      type: String,
      validator: (size) => ["small", "medium"].includes(size),
    },
  },
  computed: {
    getTheme() {
      let theme = "theme--";

      if (this.theme == "blue") theme += this.theme;
      else if (this.theme == "white") theme += this.theme;

      return theme;
    },
    getSize() {
      let size = "size--";

      if (this.size == "small") size += this.size;
      else if (this.size == "medium") size += this.size;

      return size;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  height: max-content;
  width: max-content;
}

// Themes
.theme--white {
  background: theme("colors.white");
  color: theme("colors.primary-50");
}

.theme--blue {
  background: theme("colors.primary-50");
  color: theme("colors.white");
}

// Sizes
.size--small {
  font-size: theme("fontSize.sm");
  font-weight: theme("fontWeight.normal");
  padding: theme("spacing.1") theme("spacing.4");
}

.size--medium {
  font-size: theme("fontSize.base");
  padding: theme("spacing.1") theme("spacing.6");
}
</style>