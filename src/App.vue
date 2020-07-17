<template>
  <div id="app">
    <Header />
    
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";


export default {
  name: "App",
  components: {
    Header,
  
  }
};
</script>

<style>
/* global css settings */
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Mono", monospace;
}
html,
body {
  background: black;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  background: black;
  color: #eceff1;
  min-height: 600px;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: auto;
 
}
</style>
