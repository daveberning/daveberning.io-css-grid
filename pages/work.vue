<template>
  <div class="wrapper">
    <section class="welcome">
      <div class="container">

      </div>
    </section>

    <section>
      <div class="container">
        <div class="info">
          <div>
            <h2>M80, Inc.</h2>
            <ul>
              <li><strong>Location:</strong> Loveland, Ohio</li>
              <li><strong>Role:</strong> Web Developer</li>
              <li><strong>Type:</strong> Custom Wordpress Theme</li>
              <li><strong>Date:</strong> July 2016</li>
              <li><strong>Features:</strong> Custom Wordpress theme that uses the Wordpress codex and functions. Portfolio pieces when clicked, dropdown to show a slider with additional information.</li>
            </ul>
            <a href="#">Visit Website</a>
          </div>

          <Code :code="code" language="html" />
        </div>
        <div class="content">
          <p>M80, Inc is an industrial design company located in Cincinnati, OH. I was approached by M80, Inc designer, Brett Valls to consult with and develop the new and improved company website. It was important for the client to be able to update the site themselves easily. This site was handcrafted and built on top of the Wordpress CMS.</p>

          <p>M80’s site uses a preprocessor (SASS) and SASS variables to easily modify the styles of the site in just a few seconds. M80 is the first client of my freelance business, Parsec Digital Media, LLC and the first project to utilize an architecture. The style sheet was written with an object-oriented mindset. The admin can add, remove, or change the look of various elements just by changing a class name.</p>
        </div>
        <img src="~/assets/m80-responsive.png" alt="">
      </div>
    </section>
    <Testimonials />
  </div>
</template>

<script>
import Testimonials from '~/components/Testimonials'
import Code from '~/components/Code'
import pJSON from '~/snippets/package-json.js'

export default {
  components: {
    Testimonials,
    Code
  },
  data() {
    return {
      code:
`<p>Technologies Used</p>
<ul>
  <li>Wordpress</li>
  <li>Bootstrap 3</li>
  <li>SCSS</li>
</ul>`
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
  grid-column-gap: 30px;
  grid-template-rows: min-content;
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
  grid-column: 1 / span 5;
  grid-row: 1;
  position: relative;
  top: -100px;

  & > div:first-child {
    background: #DDE152;
    color: #000;
    padding: 2rem;
    border-radius: 6px;
    align-self: start;
    margin-bottom: 1rem;
  }

  * {
    grid-column: 1 / span 2;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
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
    background: darken(#DDE152, 20%);
    color: #000;
    padding: .75rem 1.5rem;
    font-style: italic;
    font-size: 1.25rem;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    margin-top: 1rem;
    display: block;
  }
}

.content{
  grid-column: 6 / span 7;
}

img {
  grid-row: 2;
  grid-column: 1 / span 12;
}
</style>
