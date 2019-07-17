<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Writing</nuxt-link></li>
      <li><nuxt-link to="/">About</nuxt-link></li>
      <li><nuxt-link to="/">Contact</nuxt-link></li>
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
    text-align: center;
    list-style-type: none;
    padding: 0;

    @media screen and (min-width: 768px) {
      text-align: right;
    }

    li {
      display: inline-block;
      margin-right: 2rem;
      color: #fff;

      &:last-child { margin-right: 0; }
    }

    li a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
