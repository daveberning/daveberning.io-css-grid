<template>
  <div :style="`background: ${adjustBrightness(bkgColor, lum)}`" class="card">
    <img :src="`${routerBase}/${image}-logo.png`" alt="">

    <div class="hover">
      <Code :code="code" language="html" />
    </div>
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
.card {
  padding: 3rem;
  border-radius: 6px;
  position: relative;

  @media screen and (min-width: 768px) {
   padding: 2rem;
  }

  @media screen and (min-width: 992px) {
   padding: 3rem;
  }
}

.card:hover {
  .hover {
    opacity: 1;
    transition: opacity .25s ease;
  }
}

.hover {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  top: 0; left: 0;
  transition: opacity .25s ease;
  cursor: pointer;
}

img {
  width: 100%;
  height: auto;
}
</style>

<style>
.hover .code {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

