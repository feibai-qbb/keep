<template>
	<div>
		<div class="top">
			<img :src="navarr.img" alt="" /><span>推荐</span
			><span>会员推荐</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navarr: {},
			};
		},
		mounted() {
			this.navarr = this.$store.state.home.home;
		},
	};
</script>

<style scoped>
	.top {
		padding: 2rem;
		height: 3rem;
		padding-bottom: 1rem;
	}
	.top img {
		margin-left: 1rem;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		vertical-align: middle;
	}
	.top span {
		padding-left: 1rem;
		font-size: 1.2rem;
	}
</style>