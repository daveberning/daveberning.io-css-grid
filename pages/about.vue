<template>
  <page>
    <div slot="tldr">
      <h1>Dave Berning</h1>
      <img src="~/assets/dave.jpg" />
      <ul>
        <li><strong>Employer:</strong> Oodle</li>
        <li><strong>Title:</strong> Web Developer</li>
        <li><strong>Degree:</strong> B.F.A. in Electronic Media</li>
        <li><strong>Alma Mater:</strong> The University of Cincinnati</li>
      </ul>
      <a href="#" class="button">Download Resume</a>
    </div>
    <Code slot="code" :code="code" language="html" />
    <div slot="content">
      <p>I'm Dave Berning, a web developer and designer from Cincinnati, OH. I specialize in front-end web development that adapts to all mobile and desktop devices. I graduated from the University of Cincinnati with a Bachelor's Degree of Fine Arts with certifications in web production, video production, and electronic design.</p>

      <p>I have worked with several companies over the years, each one giving me valuable experience and new skills. Some of these companies include KalioCommerce, Hobsons Educational Solutions, Upright Communications, and Drees Homes. My philosophy is that every great website should have a simple UI and be written with clean code.</p>

      <img src="~/assets/vue.jpg" alt="">
      <img src="~/assets/bulma.png" alt="">
    </div>
  </page>
</template>

<script>
import page from '~/layout/detail-page'
import TLDR from '~/components/TLDR'
import Code from '~/components/Code'

export default {
  layout: 'work',
  components: {
    page,
    TLDR,
    Code
  },
  data() {
    return {
      code:
`<p>Favorite Technologies</p>
<ul>
  <li>Vue.js</li>
  <li>Nuxt.js</li>
  <li>TypeScript</li>
  <li>ES6</li>
  <li>CSS Grid</li>
</ul>`
    }
  },
  head() {
    return {
      title: 'About Me | Dave Berning | Cincinnati, OH'
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 2rem;
}

.content {
  grid-template-columns: repeat(2, 1fr)
}

.content img {
  grid-column: span 1;
}
</style>
