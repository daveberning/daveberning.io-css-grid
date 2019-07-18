<template>
  <div>
    <div class="themes">
      <div class="theme-buttons" :class="{ expanded: expanded }">
        <button v-for="(theme, i) in themes" :key="i" @click="changeTheme(theme)" :class="{ selected: $store.state.code.theme === theme }">
          {{ theme }}
        </button>
      </div>
      <button @click="expanded = !expanded">{{ text }}</button>
    </div>
    <div class="overlay" @click="expanded = !expanded" v-if="expanded" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [ 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight' ],
      expanded: false
    }
  },
  computed: {
    text() {
      if (this.expanded) return 'Close'
      else return 'Code Theme'
    }
  },
  methods: {
    changeTheme(theme) {
      this.$store.dispatch('code/setCodeTheme', theme)
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 9998;
}

.themes {
  position: fixed;
  bottom: 15px;
  left: 15px;
  z-index: 9999;
  background: #252525;
  padding: 1rem;
  border-radius: 6px;
  display: none;

  & > button {
    position: relative;
    z-index: 9999;
  }

  @media screen and (min-width: 576px) {
    display: block;
  }
}

.themes > .theme-buttons {
  border-radius: 6px;
  height: 0;
  opacity: 0;
  transition: all .25s ease;
}

.themes > div.expanded {
  height: 100%;
  opacity: 1;
  padding-bottom: 1rem;
  transition: all .25s ease;
}

button {
  display: block;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  background: lighten(#252525, 10%);
  border: 0;
  border-radius: 6px;
  font-weight: 1.25rem;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all .25s ease;

  &:last-child { margin-bottom: 0; }

  &.selected,
  &:hover {
    cursor: pointer;
    background: lighten(#252525, 30%);
    transition: all .25s ease;
  }

  &:active,
  &:focus {
    outline: none;
  }
}
</style>

