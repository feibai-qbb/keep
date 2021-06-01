<template>
<div>	<div class="items">
  <img :src="obj.img" alt=""></div></div>
</template>

<script>
export default {
		props:{
      obj: {}
    }
	};
</script>

<style scoped>
	.items {
		width: 8rem;
		height: 5rem;
		background-color: #ccc;
		margin-right: 1rem;
		flex-shrink: 0;
		border-radius: 1rem;
	}
  .items img {
    width: 100%;
    height: 100%;
  }
</style>