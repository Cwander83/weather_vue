<template>
	<div class="current">
		<CurrentBody />
	</div>
</template>

<script>
import CurrentBody from '../components/layout/CurrentBody';

export default {
	name: 'Current',
	components: {
		CurrentBody,
	},
};
</script>

<style scoped>
.current {
	width: 800px;
	margin: 0 auto;
}
</style>
