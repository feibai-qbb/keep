<template>
	<div class="data">
		<div class="left">
			<p class="p">本周累计运动 {{ navarr.day }} 天</p>
			<div class="l">
				<p>本周消耗</p>
				<p>{{ navarr.xh }}千卡</p>
			</div>
			<div class="r">
				<p>本周运动</p>
				<p>{{ navarr.time }}分钟</p>
			</div>
		</div>
		<div class="right">
			<img :src="navarr.img" alt="" />
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
			this.navarr = this.$store.state.home.spots;
		},
	};
</script>

<style scoped>
	.data {
		margin: 0 1rem;
		border: 1px solid #ccc;
        border-radius: 0.5rem;
		height: 8rem;
	}
	.left {
		padding: 1rem;
		float: left;
		width: 55%;
		height: 8rem;
	}
	.p {
		padding-bottom: 1rem;
	}
	.right {
		float: right;
		height: 8rem;
		padding: 1rem;
	}
	.right img {
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
	}
	.l {
		float: left;
	}
	.r {
		float: right;
	}
	.l p,.r p{
		padding: 0.5rem 0;
	}
</style>