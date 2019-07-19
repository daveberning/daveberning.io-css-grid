<template>
  <page>
    <div slot="tldr">
      <h1>Kroger Wireless</h1>
      <ul>
        <li><strong>Location:</strong> Cincinnati, Ohio</li>
        <li><strong>Role:</strong> Web Developer</li>
        <li><strong>Type:</strong> Custom Wordpress Theme</li>
        <li><strong>Date:</strong> July 2016</li>
        <li><strong>Features:</strong> Custom Wordpress theme that uses the Wordpress codex and functions. Portfolio pieces when clicked, dropdown to show a slider with additional information.</li>
      </ul>
      <a href="#">Visit Website</a>
    </div>
    <Code slot="code" :code="code" language="html" />
    <div slot="content">
      <p>M80, Inc is an industrial design company located in Cincinnati, OH. I was approached by M80, Inc designer, Brett Valls to consult with and develop the new and improved company website. It was important for the client to be able to update the site themselves easily. This site was handcrafted and built on top of the Wordpress CMS.</p>

      <p>M80’s site uses a preprocessor (SASS) and SASS variables to easily modify the styles of the site in just a few seconds. M80 is the first client of my freelance business, Parsec Digital Media, LLC and the first project to utilize an architecture. The style sheet was written with an object-oriented mindset. The admin can add, remove, or change the look of various elements just by changing a class name.</p>
    </div>
    <div slot="full-width-content">
      <img src="~/assets/m80-responsive.png" alt="">
    </div>
    <Testimonials slot="testimonial" name="Mark Strong" />
  </page>
</template>

<script>
import page from '~/layout/detail-page'
import TLDR from '~/components/TLDR'
import Code from '~/components/Code'
import Testimonials from '~/components/Testimonials'

export default {
  layout: 'work',
  components: {
    page,
    TLDR,
    Code,
    Testimonials
  },
  data() {
    return {
      code:
`<p>Technologies Used</p>
<ul>
  <li>Nuxt.js</li>
  <li>TypeScript</li>
  <li>SCSS</li>
  <li>Bootstrap 4</li>
</ul>`
    }
  },
  head() {
    return {
      title: 'Kroger Wireless | Dave Berning | Cincinnati, OH'
    }
  }
}
</script>
