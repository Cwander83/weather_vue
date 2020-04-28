<template>
	<div>
		<form @submit.prevent="getWeather">
			<input
				type="text"
				name="place"
				v-model="place"
				placeholder="City, State, Zipcode"
			/>
			<input type="submit" value="Submit" class="btn" />
		</form>
	</div>
</template>

<script>
export default {
	name: 'Form',
	data() {
		return {
			place: null,
		};
	},
	methods: {
		getWeather() {
      
      this.$emit('get-weather', this.place);
      this.place = null;
		},
	},
};
</script>

<style scoped></style>
