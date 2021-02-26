<template>
  <div class="top-cities-wrapper">
    <div class="city-container">
      <div class="top-city" v-for="(city, index) in cities" :key="index">
        <h2 class="city-name">{{ city.name }}</h2>
        <router-link to="/city">
          <img :src="city.image" v-on:click="openSection(city)" />
        </router-link>
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
      console.log(city.name);
      let city2 = this.cities.filter((city) => city.name === this.cities.name);
      console.log(city2);
    },
  },
  computed: {
    ...mapGetters(["getWeather"]),
  },

  data() {
    return {
      place: "",
      cities: [
        {
          name: "New York City, NY",
          image: require("../assets/images/newyorkcity.jpg"),
        },
        {
          name: "Los Angeles, CA",
          image: require("../assets/images/losangeles.jpg"),
        },
        {
          name: "Chicago, IL",
          image: require("../assets/images/chicago.jpg"),
        },
        {
          name: "Houston, TX",
          image: require("../assets/images/houston.jpg"),
        },
        {
          name: "Phoenix, AZ",
          image: require("../assets/images/phoenix.jpg"),
        },
        {
          name: "Philadelphia, PA",
          image: require("../assets/images/philadelphia.jpg"),
        },
        {
          name: "San Antonio, TX",
          image: require("../assets/images/sanantonio.jpg"),
        },
        {
          name: "San Diego, CA",
          image: require("../assets/images/sandiego.jpg"),
        },
        {
          name: "Dallas, TX",
          image: require("../assets/images/dallas.jpg"),
        },
        {
          name: "San Jose, CA",
          image: require("../assets/images/sanjose.jpg"),
        },
      ],
    };
  },
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
  background-color: rgb(34, 34, 34);
}
.top-city {
  width: 300px;
  margin: 10px;
}
.top-city img {
  width: 300px;
  cursor: pointer;
}

.city-name {
  color: aliceblue;
  padding: 15px 0;
  text-align: center;
}
</style>

