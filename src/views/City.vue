<template>
  <div class="city">
    <h1>Current Weather</h1>

    <div v-if="getError">
      <h1>cant find that place please try again</h1>
    </div>
    <div v-if="getWeather.name">
      <h3>{{ getWeather.name }}</h3>

      <p>
        feels like:
        {{ getWeather.main.feels_like }}
      </p>
      <p>humidity: {{ getWeather.main.humidity }}</p>

      <p>pressure: {{ getWeather.main.pressure }}</p>
      <p>tempurature: {{ getWeather.main.temp }}</p>
      <p>Max Temp: {{ getWeather.main.temp_max }}</p>
      <p>Min Temp: {{ getWeather.main.temp_min }}</p>
      <div v-for="x in getWeather.weather" :key="x.id">
        <p>desc: {{ x.description }}</p>
        <p>main: {{ x.main }}</p>
      </div>
      <p>wind deg:{{ getWeather.wind.deg }}</p>
      <p>wind speed:{{ getWeather.wind.speed }}</p>
      <p>lat: {{ getWeather.coord.lat }}, lng: {{ getWeather.coord.lon }}</p>
    </div>
    <div v-else>
      <h2>...Loading</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "City",
  components: {},
  created() {
    this.fetchWeather();
  },
  computed: {
    ...mapGetters(["getError", "getWeather"]),
   
  },

  methods: {
    ...mapActions(["fetchWeather"])
  },
  
};
</script>

<style scoped>
.city {
  border: 1px solid black;
  width: 500px;
  float: right;
}
</style>
