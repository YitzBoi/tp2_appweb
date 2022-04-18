<template>
  <div id="app">
    <div id="nav">
      <NavigationBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: { NavigationBar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #141414;
}

html {
  background: #141414;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.box-label {
  width: auto;
  padding-right: 2%;
  padding-left: 2%;
  margin-left: 2%;
  position: relative;
  top: -20px;
}

p {
  font-size: 20px;
}

#name {
  background-color: rgb(0, 171, 34);
  padding-top: 1%;
  margin-bottom: 2%;
}

#mainDiv {
  background-color: rgb(32, 35, 37);
  color: rgb(66, 185, 131);
}
</style>
