<template>
  <div class="code">
    <Prism :class="$store.state.code.theme" :language="language">{{ code }}</Prism>
  </div>
</template>

<script>
import 'prismjs'
import 'prismjs/components/prism-json'
import Prism from 'vue-prism-component'

export default {
  components: {
    Prism
  },
  props: {
    code: { required: true, type: String },
    language: { required: false, type: String }
  },
  mounted() {
    this.$store.dispatch('code/setCodeTheme', 'okaidia')
  }
}
</script>


<style lang="scss">
.coy { @import '~assets/scss/prism/prism-coy'; }
.dark { @import '~assets/scss/prism/prism-dark'; }
.funky { @import '~assets/scss/prism/prism-funky'; }
.okaidia { @import '~assets/scss/prism/prism-okaidia'; }
.solarizedlight { @import '~assets/scss/prism/prism-solarizedlight'; }
.tomorrow { @import '~assets/scss/prism/prism-tomorrow'; }
.twilight { @import '~assets/scss/prism/prism-dark'; }

.code {
  background: #252525;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  color: #fff;
}

code {
  display: block;
  margin: 1rem 0 0 0;
}

pre[class*="language-"] {
  border: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: none;
}
</style>
