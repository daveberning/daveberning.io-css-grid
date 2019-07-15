<template>
  <div :style="`background: ${ColorLuminance(bkgColor, lum)}`" class="card">
    <img :src="`/${image}-logo.png`" alt="">

    <div class="hover">
      <Code :code="code" />
    </div>
  </div>
</template>

<script>
import Code from '~/components/Code'

export default {
  components: {
    Code,
  },
  props: {
    bkgColor: { required: true, type: String },
    image: { required: true, type: String },
    lum: { required: false, type: Number, default: -.25 }
  },
  data() {
    return {
      code: `<!-- View Project -->`
    }
  },
  methods: {
    ColorLuminance(hex, lum) {
    	hex = String(hex).replace(/[^0-9a-f]/gi, '');
    	if (hex.length < 6) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      lum = lum || 0;

    	let rgb = "#", c, i;
    	for (i = 0; i < 3; i++) {
    		c = parseInt(hex.substr(i*2,2), 16);
    		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    		rgb += ("00"+c).substr(c.length);
    	}

    	return rgb;
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  padding: 3rem;
  border-radius: 6px;
  position: relative;
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

