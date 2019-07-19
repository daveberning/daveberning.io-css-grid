<template>
  <page>
    <div slot="tldr">
      <h2>Dave Berning</h2>
      <img src="~/assets/dave.jpg" />
      <ul>
        <li><strong>Employer:</strong> Oodle</li>
        <li><strong>Title:</strong> Web Developer</li>
        <li><strong>Degree:</strong> B.F.A. in Electronic Media</li>
        <li><strong>Alma Mater:</strong> The University of Cincinnati</li>
      </ul>
      <a href="#">Download Resume</a>
    </div>
    <Code slot="code" :code="code" language="html" />
    <div slot="content">
      <p>I started my college career at UC Blue Ash and later transferred to the College-Conservatory of Music at main campus. I've accomplished a great deal at UCBA and took up opportunities such as employment within the department, internships, and becoming a Student Ambassador.</p>

      <p>Becoming a Student Ambassador at UCBA was the best thing I did there. I conducted tours for perspective students and incoming freshman at orientation. It was a chance to represent the college and the university as a whole. As an Ambassador, I've had the privilege of sharing my story to others in the UCBA Viewbook and newspaper ads.</p>

      <p>When I transferred to main campus, I joined Bearcast Media, UC's student run media group. I was in charge of redesigning and developing their website as well as maintaining it. After proving myself, I later became the first New Media Director of Bearcast Media, managing a team and overseeing/producing all interactive and online projects for other student groups. I was also named, "Bearcast Media's Director of the Year."</p>

      <p>As part of Bearcast's rebrand, I seek out various university groups in need of online services to further strengthen the UC bond. We want to be known around campus and want to help other groups promote themselves as well. As part of this, I contacted UC's hockey team and am now building their website.</p>

      <p>UC has provided me the great opportunities that I would not be able to take up anywhere else. In my four years at UC, I've grown from a quiet student to a leader in charge of a whole department at an organization. Whether its working for a college, student group or pursing an internship, these opportunities are prepping me for the post-college world. I am Cincinnati Smart.</p>
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
