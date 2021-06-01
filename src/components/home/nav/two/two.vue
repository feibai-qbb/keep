<template>
	<div class="one">
		<div class="top" v-for="(v,i) in navarr" :key="i">
			<img :src="v.img" alt="" />
			<p>{{v.title}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navarr: [],
			};
		},
		mounted(){
			this.navarr = this.$store.state.home.twoarr
		}
	};
</script>

<style scoped>
	.one {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	.top {
		width: 5rem;
		height: 7rem;
		text-align: center;
	}
	.top img {
		width: 4rem;
		height: 4rem;
		border-radius: 0.5rem;
	}
</style>