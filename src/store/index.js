import Vuex from 'vuex';
import Vue from 'vue';

import weather from './modules/weather';

// Load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
	modules: {
		weather,
	},
});
