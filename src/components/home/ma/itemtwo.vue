<template>
	<div class="m">
		<div class="left"><img :src="obj.img" alt="" /></div>
		<div class="right">
			<p class="title">{{ obj.title }}</p>
			<p class="txt">{{ obj.txt }}</p>
			<p class="o">{{ obj.o }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			obj: Object,
		},
	};
</script>

<style scoped>
	.m {
		width: 100%;
		height: 6rem;
	}
	.m .left {
		float: left;
		width: 8rem;
		height: 5rem;
		background-color: aqua;
	}
	.m .left img {
		width: 100%;
		height: 100%;
	}
	.m .right {
		float: right;
		width: 15rem;
		height: 5rem;
	}
	.m .right .title {
		font-size: 1.3rem;
	}
	.m .right .txt {
		color: #ccc;
	}
	.m .right .o {
		color: #aaa;
		margin-top: 0.5rem;
	}
</style>