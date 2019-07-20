<template>
  <page>
    <div slot="tldr">
      <h1>Contact</h1>
      <p>I am currently taking freelance projects. Let's grab some coffee and chat about your project.</p>
      <a v-for="profile in $store.state.socialMedia.profiles" :key="profile.name" :style="`background: ${profile.bkgColor}`" href="">
        <font-awesome-icon :icon="['fab', `${profile.name}`]" />
      </a>
    </div>
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
  head() {
    return {
      title: 'Contact Me | Dave Berning | Cincinnati, OH'
    }
  }
}
</script>

<style lang="scss" scoped>
div:first-child {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 15px;

  a {
    color: #fff;
    padding: 1.5rem 1rem;
    border-radius: $border-radius;
    font-size: 2.5rem;
    grid-column: span 1;

    &:last-child {
      grid-column: span 2;
    }
  }
}
</style>
