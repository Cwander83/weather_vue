<template>
  <div class="landing">
    <h2>The Top 10 Largest U.S. Cities by Population</h2>
    <TopCities />
  </div>
</template>

<script>
import TopCities from "../components/TopCities";

export default {
  name: "Landing",
  components: {
    TopCities
  }
};
</script>

<style scoped>
.landing {
  width: 100%;
  margin: 0 auto;
}
.landing h2 {
  text-align: center;
  color: white;
}
</style>
