<template>
	<div>
		<div class="top">
			<div class="l">
				<img :src="navarr.img" alt="" /><span>首页</span><span>618</span
				><span>好物</span>
			</div>
			<div class="r">
				<span><van-icon name="shopping-cart-o" size="2rem" /></span
				><span><van-icon name="search" size="2rem" /></span>
			</div>
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
		mounted() {
			this.navarr = this.$store.state.shop.homes;
		},
	};
</script>

<style scoped>
	.top {
		box-sizing: border-box;
		width: 100%;
		padding: 2rem;
		height: 6rem;
		padding-bottom: 1rem;
		background-color: orange;
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
	.l {
		float: left;
	}
	.r {
		float: right;
	}
</style>