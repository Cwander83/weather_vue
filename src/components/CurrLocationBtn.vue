<template>
	<div>
		<button @click="locationBtn"><i class="fas fa-crosshairs"></i></button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'CurrLocationBtn',
	data() {
		return {
			myCoords: {
				lat: 0,
				lng: 0,
			},
		};
	},
	methods: {
		...mapActions(['fetchWeatherCoords']),

		locationBtn() {
			this.$getLocation().then((coordinates) => {
				this.myCoords = {
					lat: coordinates.lat,
					lng: coordinates.lng,
				};

				this.fetchWeatherCoords(this.myCoords);
			});
		},
	},
};
</script>

<style scoped></style>
