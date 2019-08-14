<template>
  <page>
    <div slot="tldr">
      <h1>Caldwell University</h1>
      <ul>
        <li><strong>Location:</strong> Caldwell, New Jersey</li>
        <li><strong>Role:</strong> Web Developer</li>
        <li><strong>Type:</strong> Web Development, Interactive</li>
        <li><strong>Date:</strong> August 2013</li>
        <li><strong>Features:</strong> Interactive CSS card flips, animations with GreenSock Library.</li>
      </ul>
      <a href="#" class="button">Visit Website</a>
    </div>
    <Code slot="code" :code="code" language="html" />
    <div slot="content">
      <p>During my time as a web developer at Hobsons Educational Solutions, I created various micro-sites like Caldwell
        University, University of Oregon, and Palm Beach Atlantic University. These micro-sites are single page websites
        that use JavaScript to animate between the different “pages.”</p>

      <p>Interactive cards are used to provide the user with additional information about enrollment, social life, and
        living expenses for the college life at Caldwell. Transition and card flip animations are achieved using the
        GreenSock JavaScript Library. Caldwell University also utilizes Modernizr for greater browser support.</p>
      <img src="~/assets/caldwell-macbook.png" alt="">
    </div>
<!--    <div slot="full-width-content">-->
    <!--      <img src="~/assets/m80-responsive.png" alt="">-->
    <!--    </div>-->
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
          `<p>Technologies Used</p>
<ul>
  <li>Greensock (GSAP)</li>
  <li>SCSS</li>
  <li>jQuery</li>
</ul>`
      }
    },
    head() {
      return {
        title: 'Caldwell University | Dave Berning | Cincinnati, OH'
      }
    }
  }
</script>

<style>
  img {
    filter: FlipH;
  }
</style>