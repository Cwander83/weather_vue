<template>
	<div class="current">
		<!-- <Sidebar v-on:get-weather="getWeather" /> -->
		<CurrentBody v-bind:weather="weather" />
	</div>
</template>

<script>
//import Sidebar from '../components/layout/Sidebar';
import CurrentBody from '../components/layout/CurrentBody';
import { mapActions } from 'vuex';
export default {
	name: 'Current',
	components: {
		//	Sidebar,
		CurrentBody,
	},
	data() {
		return {
			
			myCoords: {
				lat: 0,
				lng: 0,
			},
		};
	},
	methods: mapActions(['fetchWeatherCoords']),
	created() {
		this.$getLocation().then((coordinates) => {
			this.myCoords = {
				lat: coordinates.lat,
				lng: coordinates.lng,
			};

			this.fetchWeatherCoords(this.myCoords);
		});
	},
	
};
</script>

<style scoped>
.current {
	width: 800px;
	margin: 0 auto;
}
</style>
