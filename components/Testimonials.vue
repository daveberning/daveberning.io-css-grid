<template>
  <section>
    <div class="container">
      <h2>Her Words, Not Mine</h2>
      <p>David is a huge asset to Bearcast Media…His ‘always on’ work ethic is invaluable and he’s never failed to make himself available whenever I’ve needed him. Such ease of communication is hard to find in a coworker, not to mention ambition.</p>
      <img src="~/assets/tess.jpg" alt="">
      <p><span>Tess White</span><br>Former General Manager of Bearcast Media</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
section {
  padding: 10rem 0 4rem 0 !important;
  background: #f5f5f5;
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  text-align: center;

  @media screen and (min-width: 768px) {
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
  }

  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  h2,
  p {
    grid-column: 1 / span 12;
  }

  p:last-child {
    font-style: italic;

    span {
      font-style: normal;
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  img {
    border-radius: 50%;
    margin: 0 auto;
    grid-column: 6 / span 2;
    margin: 1rem auto 2rem auto;
    border: 7px solid #0F6F88;
  }
}
</style>
