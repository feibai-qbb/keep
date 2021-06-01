<template>
  <div>
    <top/>
    <mav/>
    <ma/>
    <tab/>
  </div>
</template>

<script>
import Mav from '@/components/home/nav/mav.vue'
import top from '@/components/home/top/top.vue'
import Ma from '@/components/home/ma/ma.vue'
import Tab from '../../components/tabbar/tab.vue'
export default {
	components: { top, Mav,Ma,Tab }
}
</script>

<style scoped>

</style>