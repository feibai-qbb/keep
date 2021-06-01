<template>
	<div class="main">
		<div><div class="title">最近长练</div></div>
		<div class="item">
			<items v-for="(v, i) in navarr" :key="i" :obj="v" />
		</div>
		<div class="t">
			<div class="title">推荐课程</div>
			<p>全部课程</p>
		</div>
		<div><itemtwo v-for="(v, i) in tuijian" :key="i" :obj="v" /></div>
		<div class="t">
			<div class="title">本周运动数据</div>
		</div>
		<da />
	</div>
</template>

<script>
	import Da from "./da.vue";
	import Items from "./item.vue";
	import Itemtwo from "./itemtwo.vue";
	export default {
		components: {
			Items,
			Itemtwo,
			Da,
		},
		data() {
			return {
				navarr: [],
				tuijian: [],
			};
		},
		mounted() {
			this.navarr = this.$store.state.home.three;
			this.tuijian = this.$store.state.home.tuijian;
		},
	};
</script>

<style scoped>
	.t {
		height: 3.5rem;
	}
	.title {
		float: left;
		padding: 1rem 0;
	}
	.main {
		padding: 0 1rem;
	}
	.item {
		width: 100%;
		display: flex;
		overflow-x: auto;
	}
	p {
		float: right;
		margin: 0.8rem;
		padding: 0.2rem 0.5rem;
		border: 1px solid #ccc;
		border-radius: 2rem;
	}
</style>