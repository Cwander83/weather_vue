import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

// Load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
	state: {
		place: 'columbus',
		weather: [],
		errorMessage: false,
	},
	getters: {
		getPlace: (state) => state.place,
		getWeather: (state) => state.weather,
		getError: (state) => state.errorMessage,
	},
	mutations: {
		setPlace: (state, place) => (state.place = place),
		setWeather: (state, weather) => (state.weather = weather),
		setError: (state, errMsg) => (state.errMsg = errMsg),
	},
	actions: {
		async fetchWeather({ commit, state }, place) {
			try {
				let area = place ? (place === '' ? state.place : place) : state.place;

				commit('setError', false);
				commit('setWeather', []);
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=imperial`
				);
				if (response) commit('setWeather', response.data);
			} catch (err) {
				console.error(err);
				commit('setError', true);
			}
		},
	},
});
