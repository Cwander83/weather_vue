<template>
	<div class="currentBody">
		<h1>Current Weather</h1>
		<h3>{{ weather.name }}</h3>

		<p>{{ weather.main.humidity }}</p>

		<p>{{ weather.main.pressure }}</p>
		<p>{{ weather.main.temp }}</p>
		<p>{{ weather.main.temp_max }}</p>
		<p>{{ weather.main.temp_min }}</p>
		<div v-for="x in weather.weather" :key="x.id">
			<p>{{ x.description }}</p>
		</div>

		<p>{{ weather.coord.lat }}, {{ weather.coord.lon }}</p>
	</div>
</template>

<script>
//import { mapState } from 'vuex';
export default {
	name: 'CurrentBody',
	//computed: { ...mapGetters(['getWeather']) },
	computed: {
		weather() {
			return this.$store.state.weather.weather;
		},
		//...mapState(['weather'])
	},
};
</script>

<style scoped>
.currentBody {
	border: 1px solid black;
	width: 500px;
	float: right;
}
</style>
