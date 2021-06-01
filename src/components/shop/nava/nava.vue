<template>
	<div>
		<div class="top"><img :src="img.img1" alt="" /></div>
		<div class="bottom">
			<div class="item" v-for="(v,i) in item" :key="i">
				<div class="t"><img :src="v.img" alt=""></div>
				<p>{{v.title}}</p>
			</div>
		</div>
		<div class="top"><img :src="img.img2" alt="" /></div>
		<div class="last">
			<div class="lastitem" v-for="(v,i) in last" :key="i"><img :src="v" alt=""></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img: {},
				item:[],
				last:[]
			};
		},
		mounted() {
            this.img = this.$store.state.shop.img;
            this.item = this.$store.state.shop.item;
            this.last = this.$store.state.shop.last;
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
	};
</script>

<style scoped>
.top {
	box-sizing: border-box;
	padding: 1rem;
	width: 100%;
	height: 10rem;
}
.top img {
	width: 100%;
	height: 100%;
}
.bottom {
	padding: 1rem;
	display: flex;flex-wrap: wrap;
	justify-content: space-between;
}
.bottom .item {
	width: 4.8rem;
	height: 8rem;
	flex-wrap: wrap;
}
.bottom .item .t {
	padding-left:.4rem ;
	width: 4rem;
	height: 4rem;
	text-align: center;
}
.bottom .item .t img {
	width: 100%;
	height: 100%;
	border-radius:50% ;
	text-align: center;
	
}
	
.bottom .item  p{
	text-align: center;
	padding-top:1rem ;
}
.last {
	padding: 1rem;
	display: flex;
	justify-content: space-between;
}
.last .lastitem {
	width: 30%;
	height: 30%;
	border-radius:1rem ;
}
.last .lastitem img {
	width: 100%;
}
</style>