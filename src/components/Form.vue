<template>
	<div class="form">
		<p>Vue the current Weather here</p>
		<form @submit.prevent="onSubmit">
			<input
				class="input"
				type="text"
				name="place"
				v-model="place"
				placeholder="City, State, Zipcode"
			/>
			<button type="submit" class="btn" v-bind:disabled="place.length === 0">
				<i class=" fas fa-search"></i>
			</button>
		</form>
		<CurrLocationBtn />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import CurrLocationBtn from './CurrLocationBtn';
export default {
	name: 'Form',
	components: {
		CurrLocationBtn,
	},
	data() {
		return {
			place: '',
		};
	},
	methods: {
		...mapActions(['fetchWeather']),

		onSubmit() {
			this.fetchWeather(this.place);
			// clear place after form
			this.place = '';
		},
	},
};
</script>

<style scoped>
.btn {
	padding: 3px;
	background-color: transparent;
	border: none;
	font-size: 20px;
	color: black;
	cursor: pointer;
}

.form {
	width: fit-content;
	margin: 30px auto 0 auto;
}

.input {
	background-color: transparent;
	border: none;
	padding: 3px;
	border-bottom: 1px solid black;
	margin-right: 8px;
}
</style>
