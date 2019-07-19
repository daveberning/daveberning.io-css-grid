<template>
  <div class="wrapper">
    <section class="welcome">
      <div class="container">
        <Code :code="pJSON" language="json" />
        <div class="intro">
          <p>I'm a developer, designer, and author from Cincinnati, OH</p>
          <button class="button">Contact Me</button>
        </div>
      </div>
    </section>

    <section>
      <div class="container works">
        <Card v-for="company in $store.state.companies.companies" :key="company.image" :bkg-color="company.bkgColor"
              :image="company.image" :link="company.link" class="card" />
      </div>
    </section>

    <Testimonials name="Brett Valls" />
  </div>
</template>

<script>
import pJSON from '~/snippets/package-json.js'
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card'
import Code from '~/components/Code'
import Testimonials from '~/components/Testimonials'

export default {
  components: {
    Logo,
    Card,
    Code,
    Testimonials
  },
  data() {
    return {
      pJSON,
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper,
.container {
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  display: grid;
}

.welcome {
  margin: 4.25rem 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: 1 / span 12;
  font-family: $font-primary;
  background: $primary;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
  padding: 0 0 4rem 0;
  height: 90%;

  p {
    line-height: 2.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: $lg) {
    clip-path: polygon(0 0, 100% 0, 100% 89%, 0 100%);
  }
}

.code {
  background: #020202;
  grid-column: 1 / span 12;
  padding: 0 2rem;
  border-radius: 6px;
  color: #fff;
  margin-top: 1rem;
  display: none;

  @media screen and (min-width: $sm) {
    display: block;
  }

  @media screen and (min-width: $md) {
    grid-column: 1 / span 6;
    grid-row: 2 / span 3;
    margin-top: 1rem;
    height: 110%;
  }

  p { margin: 0; }
}

.intro {
  grid-column: 1 / span 12;
  grid-row: 3;
  color: #fff;
  font-weight: 900;
  text-align: center;

  p {
    font-size: 2rem;
  }

  @media screen and (min-width: $md) {
    grid-column: 8 / span 6;
    text-align: left;
  }
}

.card {
  grid-column: span 12;

  @media screen and (min-width: $md) {
    grid-column: span 4;
  }
}

.container.works {
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.clients {
  margin-top: -2rem;
  grid-column: 5 / span 7;
  border-radius: 4px;
  width:100%;
  height: auto;

  h2 { text-align: center; font-weight: 400; }
}

section {
  padding: 4rem 0;
  grid-column: 1 / span 12;
}
</style>
