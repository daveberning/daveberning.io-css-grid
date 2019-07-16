<template>
  <div>
    <!-- <Wave /> -->
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Wave from '~/components/Wave'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Wave,
    Header,
    Footer
  }
}
</script>

<style>
html {
  font-family: Roboto, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
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
