<template>
  <div class="app">
    <Header />

    <Body />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";

export default {
  name: "App",
  components: {
    Header,
    Body
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

  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: auto;
}
</style>
