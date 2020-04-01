<template>
  <div class="hello">

    <h1>{{msg}}</h1>

    <div>
      <b-nav small vertical class="w-25">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MenuTest2',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
