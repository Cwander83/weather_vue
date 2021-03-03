import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather?';

const state = {
	place: '',
	weather: [],
	errMsg: false,
};

const getters = {
	getPlace: (state) => state.place,
	getWeather: (state) => state.weather,
	getError: (state) => state.errMsg,
};

const actions = {
	async fetchWeather({ commit, state }, place) {
		try {
			let area = place ? (place === '' ? state.place : place) : state.place;

			commit('setError', false);
			commit('setWeather', []);
			const response = await axios.get(
				`${URL}q=${area}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=imperial`
			);
			if (response) commit('setWeather', response.data);
		} catch (err) {
			console.error(err);
			commit('setError', true);
		}
	},

	//async fetchWeatherCoords({ commit }, coords) {
	// 	try {
	// 		commit('setError', false);
	// 		const response = await axios.get(
	// 			`${URL}lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.VUE_APP_WEATHER_KEY}&units=imperial`
	// 		);
	// 		commit('setWeather', response.data);
	// 	} catch (err) {
	// 		commit('setError', true);
	// 	}
	// },
};

const mutations = {
	setPlace: (state, place) => (state.place = place),
	setWeather: (state, weather) => (state.weather = weather),
	setError: (state, errMsg) => (state.errMsg = errMsg),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
