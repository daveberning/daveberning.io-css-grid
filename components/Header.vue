<template>
  <header>
    <div class="container">
      <h1>@daveberning</h1>
      <Navigation class="navigation"/>
    </div>
  </header>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: {
    Navigation
  },
  methods:{
    scrollHandler (event) {
      const header = document.querySelector('header')
      if (window.scrollY > 100 && !header.className.includes('v-toolbar--bgchange')) {
        header.classList.add('v-toolbar--bgchange')
      } else if (window.scrollY < 100) {
        header.classList.remove('v-toolbar--bgchange')
      }
    }
  },
  created () {
    if (process.browser) window.addEventListener('scroll', this.scrollHandler)
  },
  destroyed () {
    if (process.browser) window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>


<style lang="scss">
header {
  position: fixed;
  width: 100%;
  grid-column: 1 / span 12;
  background: rgba(#0F6F88, 1);
  padding: 1rem 0;
  z-index: 9999;

  &.v-toolbar--bgchange { background: darken(#0F6F88, 5%); }

  h1,
  .navigation { grid-row-start: 1; }

  h1 {
    grid-column: 1 / span 5;
    color: #fff;
    font-weight: 900;
    text-transform: lowercase;
    margin-bottom: 0;
  }

  .navigation {
    grid-column: 5 / span 7;
  }
}
</style>
