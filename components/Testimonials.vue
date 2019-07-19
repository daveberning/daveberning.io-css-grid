<template>
  <section>
    <div class="container">
      <h2>{{ pronoun }} Words, Not Mine</h2>
      <p>{{ person.testimonial }}</p>
      <img width="100" :src="`${routerBase}/${person.photo}`" alt="">
      <p><span>{{ person.name }}</span><br>{{ person.title }}</p>
    </div>
  </section>
</template>

<script>
import { routerBase } from '~/nuxt.config'

export default {
  props: {
    name: { type: String, required: false }
  },
  data() {
    return {
      routerBase: routerBase.router.base
    }
  },
  computed: {
    person() {
      if (this.name) {
        return this.$store.state.testimonials.people.filter((person) => {
          return person.name === this.name
        })[0]
      } else {
        return this.$store.state.testimonials.people[Math.floor(Math.random() * this.$store.state.testimonials.people.length)]
      }
    },
    pronoun() {
      if (this.person.gender === 'f') return 'Her'
      else if (this.person.gender === 'm') return 'His'
      else return 'Their'
    },
  }
}
</script>


<style lang="scss" scoped>
section {
  padding: 10rem 0 4rem 0 !important;
  background: #f5f5f5;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  text-align: center;

  @media screen and (min-width: $md) {
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  }

  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  h2,
  p {
    grid-column: 1 / span 12;
  }

  p:last-child {
    font-style: italic;

    span {
      font-style: normal;
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  img {
    border-radius: 50%;
    margin: 0 auto;
    grid-column: 6 / span 2;
    margin: 1rem auto 2rem auto;
    border: 7px solid $primary;
  }
}
</style>
