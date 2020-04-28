<template>
  <header>
    <h1>
      <span>VUE</span>weather
    </h1>
    <div id="nav">
      <router-link to="/">Current Weather</router-link>|
      <router-link to="/map">Weather Map</router-link>
    </div>
  </header>
</template>



<script>
export default {};
</script>



<style scoped>
header {
  max-width: 1440px;
  width: 100%;
  height: 100px;

  display: inline-block;
}
h1 {
  font-family: "Titillium Web", sans-serif;
  font-size: 40px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: -1px;
}
h1 span {
  font-weight: 300;
  font-size: 28.3px;
}
#nav {
  text-align: center;
  padding: 10px 5px;
}

#nav a,
a:visited {
  text-decoration: none;
  color: black;
}

#nav a:hover,
a:active {
  text-decoration: none;
  color: grey;
}

@media screen and (max-width: 900px) {
  header {
    height: 100px;
  }

  #nav {
    width: 100%;
    padding: 0;
  }
}
@media screen and (min-width: 901px) {
  header {
    height: 140px;
    margin: 0 auto;
  }
  h1 {
    margin-top: 30px;
  }
}
</style>