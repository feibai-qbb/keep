<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>
<script>
	export default {
		created() {
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
<style >
	* {
		font-size: 3.75vw;
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
		/* box-sizing: border-box; */
	}
</style>
