<template>
	<div class="home">
		<top />
		<mav />
		<ma />
		<tab />
	</div>
</template>

<script>
	import Mav from "@/components/home/nav/mav.vue";
	import top from "@/components/home/top/top.vue";
	import Ma from "@/components/home/ma/ma.vue";
	import Tab from "@/components/tabbar/tab.vue";
	export default {
		components: { top, Mav, Ma, Tab },

		created() {
			this.$store.dispatch("axioslink", { url: "/home/nav" });
			//在页面加载时读取localStorage里的状态信息
			if (localStorage.getItem("data")) {
				//replaceState替换数据 Object.assign合并对象
				this.$store.replaceState(
					Object.assign(
						{},
						this.$store.state,
						JSON.parse(localStorage.getItem("data"))
					)
				);
			}
			//在页面刷新时将vuex里的信息保存到localStorage里
			window.addEventListener("beforeunload", () => {
				localStorage.setItem("data", JSON.stringify(this.$store.state));
			});
		},
	};
</script>

<style scoped>
	.home {
		padding-bottom: 5rem;
	}
</style>