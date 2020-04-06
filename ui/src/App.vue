<template>
  <div id="app">

<b-container fluid class="bv-example-row">

  <b-row>
    <b-col md="3" xl="2">
        <Sidebar  />
    </b-col>
    <b-col md="9" xl="8">
        <img alt="Vue logo" src="./assets/logo.png">
        <Form msg="Welcome to Your Vue.js App"/>
    </b-col>
  </b-row>
</b-container>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Form from './components/form1.vue'
import Sidebar from './components/SideBar.vue'
//import Menu from './components/MenuTest2.vue'
//import Menu from './components/MenuTest.vue'

export default {
  name: 'App',
  components: {
        Form,
        Sidebar
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
