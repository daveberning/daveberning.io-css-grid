<template>
  <header>
    <div class="container">
      <h1>@daveberning</h1>
      <Navigation class="navigation"/>
    </div>
  </header>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>


<style lang="scss">
header {
  grid-column: 1 / span 12;
  background: rgba(#356a7a, 1);
  padding: 1.5rem 0;

  h1,
  .navigation { grid-row-start: 1; }

  h1 {
    grid-column: 1 / span 5;
    color: #fff;
    font-weight: 900;
  }

  .navigation {
    grid-column: 5 / span 7;
  }
}
</style>
