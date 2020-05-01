import axios from 'axios';

const state = {
	weather: [],
};

const getters = {
	getWeather: (state) => state.weather,
};

const actions = {
	async fetchWeatherCoords({ commit }, coords) {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=imperial`
		);
		commit('setWeather', response.data);
	},
	async fetchWeather({ commit }, place) {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=imperial`
		);
		commit('setWeather', response.data);
	},
};

const mutations = {
	setWeather: (state, weather) => (state.weather = weather),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
