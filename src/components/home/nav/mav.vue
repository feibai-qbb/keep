<template>
	<div class="n">
		<div class="input">
			<input
				type="text"
				class="nav-input"
				placeholder="大家都在搜索[高考加油]"
			/>
		</div>
		<div class="nav">
			<one />
			<two />
		</div>
	</div>
</template>

<script>
	import one from "@/components/home/nav/one/one.vue";
	import two from "@/components/home/nav/two/two.vue";
	export default {
		components: { one,two },
	};
</script>

<style scoped>
	.input {
		padding: 0 2.5rem;
	}
	.nav-input {
		width: 100%;
		height: 2.8rem;
		outline: none;
		text-indent: 2rem;
		border: none;
		border-radius: 2.8rem;
		background-color: rgb(238, 237, 237);
	}
	.nav {
		padding: 2rem;
	}
	.n {
		background-color: rgba(230, 229, 229, 0.26);
	}
</style>