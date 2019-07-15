<template>
  <div class="code">
    <pre>
      <p>{{ code }}</p>
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    code: { required: true, type: String }
  }
}
</script>


<style lang="scss">
.code {
  background: #252525;
  padding: 0 2rem;
  border-radius: 6px;
  color: #fff;

  p { margin: 1rem 0 0 0; }
}
</style>
