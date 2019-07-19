<template>
  <page>
    <div slot="tldr">
      <h1>Contact</h1>
      <p>I am currently taking freelance projects. Let's grab some coffee and chat about your project. <font-awesome-icon far icon="spinner" /></p>
    </div>
    <Code slot="code" :code="code" language="html" />
    <div slot="content">

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
</style>
