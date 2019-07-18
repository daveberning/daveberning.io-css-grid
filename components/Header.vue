<template>
  <header>
    <div class="container">
      <h1><nuxt-link to="/">@daveberning</nuxt-link></h1>
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
}
</script>


<style lang="scss">
header {
  position: fixed;
  width: 100%;
  grid-column: 1 / span 12;
  background: #0F6F88;
  padding: 1rem 0;
  z-index: 9999;

  h1,
  .navigation { grid-row-start: 1; }

  a {
    color: #fff;
    text-decoration: none;
  }

  h1 {
    grid-column: 1 / span 12;
    color: #fff;
    font-weight: 900;
    text-transform: lowercase;
    margin-bottom: 0;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (min-width: 768px) {
      grid-column: 1 / span 5;
      font-size: 2rem;
      text-align: left;
    }
  }

  .navigation {
    grid-column: 1 / span 12;
    margin-top: .5rem;
    grid-row-start: 2;

    @media screen and (min-width: 768px) {
      grid-row-start: 1;
      grid-column: 5 / span 7;
    }
  }
}
</style>
