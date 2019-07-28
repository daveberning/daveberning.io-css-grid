<template>
  <page>
    <div slot="tldr">
      <h1>Contact</h1>
      <p>I am currently <strong>not</strong> taking freelance projects. But let's grab some coffee and network!</p>
      <a v-for="profile in $store.state.socialMedia.profiles" :key="profile.name" :style="`background: ${profile.bkgColor}`" href="">
        <font-awesome-icon :icon="['fab', `${profile.name}`]" />
      </a>
    </div>
    <div slot="content">
      <form action="">
        <section>
          <label for="fname">First Name</label>
          <input id="fname" name="fname" type="text">
        </section>
        <section>
          <label for="lname">Last Name</label>
          <input id="lname" name="lname" type="text">
        </section>
        <section>
          <label for="email">Email Address</label>
          <input id="email" name="email" type="email">
        </section>
        <section>
          <label for="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel">
        </section>
        <section class="message">
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </section>
        <button class="clear button">Clear</button>
        <button class="button">Submit</button>
      </form>
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

form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  grid-column: span 12;
}

label,
input,
textarea {
  width: 100%;
}

label {
  display: block;
  font-weight: 900;
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #ccc;
  

  &:focus,
  &:active {
    outline: none;
    border: 1px solid darken(#ccc, 40%);
  }
}

section {
  padding: 0;
  grid-column: span 1;
}

section.message {
  grid-column: span 2;
}

button {
  grid-column: span 1;
}

.clear {
  background: transparent !important;
  border: 1px solid darken(#ccc, 40%);
  color: darken(#ccc, 40%);
}
</style>
