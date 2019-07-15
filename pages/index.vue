<template>
  <div class="wrapper">
    <Header />

    <section class="welcome">
      <div class="container">
        <Code :code="pJSON" />
        <div class="intro">
          <p>I'm a developer, designer, and writer from Cincinnati, OH</p>
          <button>Contact Me</button>
        </div>
      </div>
    </section>

    <section class="work">
      <div class="container works">
        <Card v-for="company in companies" :key="company.image" :lum="company.lum" :bkg-color="company.bkgColor"
              :image="company.image" class="card" />
      </div>
    </section>

    <section class="about">
      <div class="container">
        <h1>About Dave</h1>
        <img src="~/assets/dave.jpg" alt="">
        <div>
          <p>I'm Dave Berning, a web developer and designer from Cincinnati, OH. I specialize in front-end web development that adapts to all mobile and desktop devices. I graduated from the University of Cincinnati with a Bachelor's Degree of Fine Arts with certifications in web production, video production, and electronic design.</p>

          <p>I have worked with several companies over the years, each one giving me valuable experience and new skills. Some of these companies include KalioCommerce, Hobsons Educational Solutions, Upright Communications, and Drees Homes. My philosophy is that every great website should have a simple UI and be written with clean code.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import pJSON from '~/snippets/package-json.js'
import Card from '~/components/Card'
import Header from '~/components/Header'
import Code from '~/components/Code'

export default {
  components: {
    Logo,
    Card,
    Header,
    Code
  },
  data() {
    return {
      pJSON,
      companies: [
        { image: 'm80', bkgColor: '#f3f5c3', lum: 0 },
        { image: 'drees-homes', bkgColor: '#bae0d3', lum: 0 },
        { image: 'caldwell', bkgColor: '#ffccd5', lum: 0 }
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: 1 / span 12;
  font-family: 'Roboto', sans-serif;
  background: rgba(#0F6F88, 1);
  padding: 0 0 4rem 0;
}

.code {
  background: #252525;
  grid-column: 1 / span 5;
  grid-row: 2 / span 3;
  padding: 0 2rem;
  border-radius: 6px;
  color: #fff;
  margin-top: 1rem;
}

.card {
  grid-column: span 4;
}

.container.works {
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.intro {
  grid-column: 7 / span 5;
  grid-row: 3;
  color: #fff;
  font-weight: 900;
  font-size: 2rem;

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
  grid-column: 2 / span 10;
}

.about {
  div:first-child {
    background: rgba(#0E7088, 1);
    grid-column: 2 / span 14;
    border-radius: 6px;
    grid-column-gap: 30px;
    padding: 2rem;
    color: #fff;

    & > div {
      grid-column: 4 / span 9;
    }
  }

  img {
    width: 100%;
    height: auto;
    grid-column: 1 / span 3;
    border-radius: 6px;
  }

  h1,
  p {
    grid-column: 1 / span 12;
  }
}
</style>
