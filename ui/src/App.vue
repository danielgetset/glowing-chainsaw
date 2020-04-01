<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">

   <Form1 msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Form1 from './components/form1.vue'

export default {
  name: 'App',
  components: {
    Form1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
