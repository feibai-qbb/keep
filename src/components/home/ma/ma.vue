<template>
	<div class="main">
		<div><div class="title">最近长练</div></div>
		<div class="item">
			<items />
			<items />
			<items />
			<items />
		</div>
		<div class="t">
			<div class="title">推荐课程</div>
			<p>全部课程</p>
		</div>
		<div class="item">
			<items />
			<items />
			<items />
			<items />
		</div>
	</div>
</template>

<script>
	import Items from "./item.vue";
	export default {
		components: {
			Items,
		},
	};
</script>

<style scoped>
	.t {
		height: 3rem;
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
		padding: 1rem 0;
	}
</style>