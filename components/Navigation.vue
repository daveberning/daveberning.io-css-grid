<template>
  <nav>
    <ul>
      <li>Work</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
nav {
  color: #fff;
  grid-column: 7 / span 5;

  ul {
    text-align: right;
    list-style-type: none;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 2rem;
      color: #fff;

      &:last-child { margin-right: 0; }
    }
  }
}
</style>
