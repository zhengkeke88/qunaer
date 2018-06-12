<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination">
            </div>
        </swiper>
    </div>

</template>

<script>
  export default {
    name:'HomeSwiper',
    data(){
      return{
        swiperOption:{
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true
        },
        swiperList:[
          { id:'001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg' },
          { id:'002',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg' },
          { id:'003',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg' },
          { id:'004',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg' },
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper{
        height: 31.25vw
        width: 100%
        background :#eee
    }
    .swiper-img{
        width: 100%;
    }
</style>