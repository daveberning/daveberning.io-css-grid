<template>
  <div>
    <Header />
    <div class="wrapper">
      <section class="welcome" />

      <section>
        <div class="container">
          <div class="info">
            <div>
              <slot name="tldr" />
            </div>
            <slot name="code" />
          </div>
          <div class="content">
            <slot name="content" />
          </div>
          <div class="container">
            <slot name="full-width-content" />
          </div>
        </div>
      </section>
      <slot name="testimonial" />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Testimonials from '~/components/Testimonials'
import Footer from '~/components/Footer'
import ThemeChanger from '~/components/ThemeChanger'
import pJSON from '~/snippets/package-json.js'

export default {
  components: {
    Header,
    Footer,
    Testimonials,
    ThemeChanger,
  },
}
</script>

<style lang="scss" scoped>
.wrapper,
.container {
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  display: grid;
  grid-column-gap: 30px;
  grid-template-rows: min-content;
}

.welcome {
  margin: 1.25rem 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: 1 / span 12;
  font-family: $font-primary;
  background: $primary;
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
  padding: 0 0 4rem 0;
  height: 90%;

  p { line-height: 2.5rem; }

  @media screen and (min-width: $lg) {
    margin: 4.25rem 0 4rem 0;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  }
}

section {
  padding: 4rem 0;
  grid-column: 1 / span 12;
}

.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-column: 1 / span 12;
  grid-row: 1;
  position: relative;
  top: -100px;

  @media screen and (min-width: $lg) {
    grid-column: 1 / span 5;
  }

  & > div:first-child {
    background: $primary-dark;
    color: #fff;
    padding: 2rem;
    border-radius: 6px;
    align-self: start;
    margin-bottom: 1rem;
  }

  * { grid-column: 1 / span 2; }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-transform: uppercase;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 1rem;
      line-height: 1.5rem;
    }
  }

  a {
    grid-column: span 2;
    background: $cta;
    color: #fff;
    padding: .75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    margin-top: 1rem;
    display: block;
  }
}

.content{
  grid-column: 1 / span 12;

  @media screen and (min-width: $lg) { grid-column: 6 / span 7; }
}

img {
  grid-row: 2;
  grid-column: 1 / span 12;
}
</style>
