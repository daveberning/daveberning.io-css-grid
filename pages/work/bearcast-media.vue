<template>
  <page>
    <div slot="tldr">
      <h1>Bearcast Media</h1>
      <ul>
        <li><strong>Location:</strong> Cincinnati, Ohio</li>
        <li><strong>Role:</strong> Web Developer, Project Manager</li>
        <li><strong>Type:</strong> Wordpress, Custom Theme, Editorial</li>
        <li><strong>Date:</strong> February 2014</li>
        <li><strong>Features:</strong> iOS/Android icons, Microsoft Live Tile Integration, Radio Streaming, Live Sports
          Broadcasts, Dynamic Content, Responsive Design, Author Pages, and more
        </li>
      </ul>
      <a href="#" class="button">Visit Website</a>
    </div>
    <Code slot="code" :code="code" language="html" />
    <div slot="content">
      <p>During Bearcast Media’s re-branding campaign I was handpicked and asked by it’s General Manager to design and
        develop the new website. This new site replaced the outdated one by improving the user experience, user
        interface, and presentation. Bearcast Media’s website launched in February, 2014 and has several new features
        including, mobile compatibility, social media integration, iOS/Android app icons, and Facebook OpenGraph support
        for sharing.</p>

      <p>Users can share, save, and interact the Bearcast website in one seamless interaction. By signing into either a
        Facebook or Twitter account, readers can log into Bearcast and post comments and share opinions on various
        articles.</p>

      <p>Since launch, Bearcast’s online and social presence has increased tremendously resulting in increased local and
        global recognition.</p>
      <img src="~/assets/bearcast-responsive-devices.png" alt="">
    </div>
<!--    <div slot="full-width-content">-->
    <!--      <img src="~/assets/bearcast-responsive-devices.png" alt="">-->
    <!--    </div>-->
    <Testimonials slot="testimonial" name="Colin Lutz" />
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
  <li>Wordpress</li>
  <li>jQuery</li>
  <li>SCSS</li>
  <li>Bootstrap 3</li>
</ul>`
      }
    },
    head() {
      return {
        title: 'Bearcast Media | Dave Berning | Cincinnati, OH'
      }
    }
  }
</script>
