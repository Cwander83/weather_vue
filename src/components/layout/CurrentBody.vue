<template>
	<div>
		
		<div v-bind:key="current.id" v-for="current in weather">
			<h1>{{ current.name }}</h1>
			<p>{{ current.weather[0].description }}</p>
            
			<p>{{ current.main.feels_like }}</p>
            
			<p>{{ current.main.humidity }}</p>
            
			<p>{{ current.main.pressure }}</p>
			<p>{{ current.main.temp }}</p>
			<p>{{ current.main.temp_max }}</p>
			<p>{{ current.main.temp_min }}</p>
            
			<p>{{ current.coord.lat }}, {{ current.coord.lon }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CurrentBody',
	data() {
		return {
			name: 'Current Body',
		};
	},
	props: ['weather'],
	methods: {},
};
</script>

<style scoped></style>
