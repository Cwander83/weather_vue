<template>
  <div class="top-cities-wrapper">
    <div class="city-container">
      <div class="top-city" v-for="(city,index) in cities" :key="index">
        <img :src="city.image" v-on:click="openSection(city)" />
        <div class="city-info" v-if="city.open">
          <h2>open</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "TopCities",

  methods: {
    ...mapActions(["fetchWeather"]),
    ...mapMutations(["setPlace"]),
    openSection(city) {
      console.log(city.name, city.open);
      let city2 = this.cities.filter(city => city.name === this.cities.name);
      console.log(city2)
    }
  },
  computed: {
    ...mapGetters(["getWeather"])
  },

  data() {
    return {
      place: "",
      cities: [
        {
          name: "New York City, NY",
          image: require("../assets/images/newyorkcity.jpg"),
          open: false
        },
        {
          name: "Los Angeles, CA",
          image: require("../assets/images/losangeles.jpg"),
          open: false
        },
        {
          name: "Chicago, IL",
          image: require("../assets/images/chicago.jpg"),
          open: false
        },
        {
          name: "Houston, TX",
          image: require("../assets/images/houston.jpg"),
          open: false
        },
        {
          name: "Phoenix, AZ",
          image: require("../assets/images/phoenix.jpg"),
          open: false
        },
        {
          name: "Philadelphia, PA",
          image: require("../assets/images/philadelphia.jpg"),
          open: false
        },
        {
          name: "San Antonio, TX",
          image: require("../assets/images/sanantonio.jpg"),
          open: false
        },
        {
          name: "San Diego, CA",
          image: require("../assets/images/sandiego.jpg"),
          open: false
        },
        {
          name: "Dallas, TX",
          image: require("../assets/images/dallas.jpg"),
          open: false
        },
        {
          name: "San Jose, CA",
          image: require("../assets/images/sanjose.jpg"),
          open: false
        }
      ]
    };
  }
};
</script>

<style scoped>
.top-cities-wrapper {
  width: 80%;
  margin: auto;
}

.city-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
}
.top-city {
  width: 300px;
  margin: 2px;
}
.top-city img {
  width: 300px;
}
.city-info {
  color: white;
}
</style>

