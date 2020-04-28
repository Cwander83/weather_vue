<template>
	<div class="current">
		<Form v-on:get-weather="getWeather" />
		<CurrentBody v-bind:weather="weather" />
	</div>
</template>

<script>
import axios from 'axios';
import Form from '../components/Form';
import CurrentBody from '../components/layout/CurrentBody';

export default {
	name: 'Current',
	components: {
		Form,
		CurrentBody,
	},
	data() {
		return {
			weather: [],
		};
	},

	methods: {
		getWeather(place) {
			// removes prev search if exists
			this.weather = [];

			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${process.env.VUE_APP_WEATHER_KEY}`
				)

				.then((res) => this.weather.push(res.data))
				.catch((err) => console.log(err));
		},
	},
};
</script>
