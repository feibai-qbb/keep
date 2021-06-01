<template>
	<div class="shop">
		<topbar />
		<nava />
		<tab />
	</div>
</template>

<script>
	import topbar from "@/components/shop/top/topbar.vue";
	import tab from "@/components/tabbar/tab.vue";

	import Nava from "@/components/shop/nava/nava.vue";
	export default {
		components: { tab, topbar, Nava },

		created() {
			this.$store.dispatch("axioslink", { url: "/shop/nav" });
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
	.shop {
		padding-bottom: 5rem;
	}
</style>>
