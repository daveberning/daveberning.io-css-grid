<template>
  <footer>
    <div class="container">
      <p>Copyright &copy; {{ year }}. Dave Berning. All Rights. Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>


<style lang="scss" scoped>
footer {
  background: lighten(#000, 15%);
  color: #fff;
  padding: 1rem 15px;
  text-align: center;

  p { margin-bottom: 0; }
}
</style>
