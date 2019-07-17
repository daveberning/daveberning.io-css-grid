<template>
  <div class="wrapper">
    <section class="welcome">
      <div class="container">
        <Code :code="pJSON" language="json" />
        <div class="intro">
          <p>I'm a developer, designer, and author from Cincinnati, OH</p>
          <button>Contact Me</button>
        </div>
      </div>
    </section>

    <section>
      <div class="container works">
        <Card v-for="company in companies" :key="company.image" :lum="company.lum" :bkg-color="company.bkgColor"
              :image="company.image" class="card" />
      </div>
    </section>

    <Testimonials />
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
      companies: [
        { image: 'drees-homes', bkgColor: '#bae0d3', lum: 0 },
        { image: 'kroger-wireless', bkgColor: '#c4e4f9', lum: 0 },
        { image: 'm80', bkgColor: '#f3f5c3', lum: 0 },
        { image: 'bearcast', bkgColor: '#000000', lum: 0 },
        { image: 'caldwell', bkgColor: '#ffccd5', lum: 0 },
        { image: 'idd', bkgColor: '#c4e4f9', lum: 0 },
      ]
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
  font-family: 'Roboto', sans-serif;
  background: rgba(#0F6F88, 1);
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
  padding: 0 0 4rem 0;
  height: 90%;

  p { line-height: 2.5rem; }

  @media screen and (min-width: 992px) {
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

  @media screen and (min-width: 576px) {
    display: block;
  }


  @media screen and (min-width: 768px) {
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
  font-size: 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-column: 8 / span 6;
    text-align: left;
  }

  button {
    background: #41B883;
    color: #fff;
    padding: .75rem 1.5rem;
    border: 1px solid darken(#41B883, 10%);
    font-style: italic;
    font-size: 1.25rem;
    margin-top: 1rem;
    border-radius: 6px;
  }
}

.card {
  grid-column: span 12;

  @media screen and (min-width: 768px) {
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
