<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend>
        </home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>
<script>
  import HomeHeader from './home/components/Header'
  import HomeSwiper from './home/components/Swiper.vue'
  import HomeIcons from './home/components/Icons.vue'
  import HomeRecommend from './home/components/Recommend.vue'
  import HomeWeekend from './home/components/Weekend.vue'
  export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>

<style scoped>

</style>