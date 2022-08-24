<template>
  <div>
    <!-- <Wave /> -->
    <Header />
    <nuxt />
    <Footer />
    <ThemeChanger />
  </div>
</template>

<script>
import ThemeChanger from '~/components/ThemeChanger'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    ThemeChanger,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html {
  font-family: $font-primary;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

*,
*:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
