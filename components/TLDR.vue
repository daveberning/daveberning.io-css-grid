<template>
  <div class="info">
    <div>
      <slot />
    </div>

    <Code :code="code" language="html" />
  </div>
</template>

<script>
import { routerBase } from '~/nuxt.config'
import Code from '~/components/Code'

export default {
  components: {
    Code
  },
  props: {
    bkgColor: { required: true, type: String },
    image: { required: true, type: String },
    lum: { required: false, type: Number, default: 0 }
  },
  data() {
    return {
      code: `<!-- View Project -->`,
      routerBase: routerBase.router.base
    }
  },
  methods: {
    adjustBrightness(col, amt) {

      let usePound = false

      if (col[0] == "#") {
          col = col.slice(1)
          usePound = true
      }

      let R = parseInt(col.substring(0,2),16)
      let G = parseInt(col.substring(2,4),16)
      let B = parseInt(col.substring(4,6),16)

      // to make the colour less bright than the input
      // change the following three "+" symbols to "-"
      R = R + amt
      G = G + amt
      B = B + amt

      if (R > 255) R = 255
      else if (R < 0) R = 0

      if (G > 255) G = 255
      else if (G < 0) G = 0

      if (B > 255) B = 255
      else if (B < 0) B = 0

      const RR = ((R.toString(16).length==1)?`0${R.toString(16)}`:R.toString(16))
      const GG = ((G.toString(16).length==1)?`0${G.toString(16)}`:G.toString(16))
      const BB = ((B.toString(16).length==1)?`0${B.toString(16)}`:B.toString(16))
      return (usePound?"#":"") + RR + GG + BB
    }
  }
}
</script>


<style lang="scss" scoped>
.info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-column: 1 / span 5;
  grid-row: 1;
  position: relative;
  top: -100px;

  & > div:first-child {
    background: darken(#0F6F88, 7%);
    color: #fff;
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
    text-transform: uppercase;
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
    background: #0F6F88;
    color: #fff;
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
</style>

