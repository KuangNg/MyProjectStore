<template>
  <div class="banner">
    <!-- 轮播图 -->
    <div class="banner-img app" v-on:mouseover="stop()" v-on:mouseout="move()">
      <li v-for="(item,index) in bannerList" :key="index" v-show="index===currentIndex">
        <a href=""><img :src="item" alt=""></a>
      </li>
    </div>

    <!-- 小圆点 -->
    <div class="banner-pagination">
      <ol>
        <li v-for="(v,i) in bannerList" :key='i' v-on:mouseover="stop()" v-on:mouseout="move()">
          <a href="" :class="currentIndex==i? 'active':'' " @click.prevent="clickHandle(i) "></a>
        </li>
      </ol>
    </div>
    <!-- 左右按钮 -->
    <div v-for="(item,index) in bannerList" :key="index" v-on:mouseover="stop()" v-on:mouseout="move()">
      <div class="banner-prev iconfont icon-icon-test11" @click="prevHandle"></div>
      <div class="banner-next iconfont icon-icon-test13" @click="nextHandle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timer: null,
        currentIndex: 0,
        bannerList: [require('../assets/img/banner01.jpg'), require('../assets/img/banner02.jpg'), require(
            '../assets/img/banner03.webp'),
          require('../assets/img/banner04.webp'), require('../assets/img/banner05.webp')
        ]
      }

    },
    methods: {
      autoPlay() {
        this.currentIndex++;
        if (this.currentIndex == this.bannerList.length) {
          this.currentIndex = 0
        }
      },
      play() {
        this.timer = setInterval(this.autoPlay, 2000)
      },
      stop() {
        clearInterval(this.timer)
      },
      move() {
        this.play()
      },
      prevHandle(e) {
        console.log(e);

        if (this.currentIndex == 0) {
          this.currentIndex = this.bannerList.length - 1
        } else if (this.currentIndex > 0) {
          this.currentIndex--
        }
      },
      nextHandle(e) {
        if (this.currentIndex == this.bannerList.length - 1) {
          this.currentIndex = 0
        } else if (this.currentIndex < this.bannerList.length - 1) {
          this.currentIndex++
        }
      },
      clickHandle(i) {
        this.currentIndex = i
      }
    },

    mounted() {
      this.play()
    }
  }

</script>

<style>
  /* banner 轮播图 */
  .banner {
    position: relative;
    top: -460px;
    height: 460px;
  }

  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 1200px;
    height: 460px;
  }

  .banner-img img {
    height: 460px;
    width: 100%;
  }

  .banner-prev,
  .banner-next {
    position: absolute;
    top: 230px;
    width: 41px;
    line-height: 69px;
    height: 69px;
    transform: translateY(-50%);
    text-align: center;
    font-size: 50px !important;
    color: rgb(221, 213, 213);
    font-weight: 100;
  }

  .banner-prev {
    left: 234px;
  }

  .banner-next {
    right: 0;
  }

  .banner-prev:hover,
  .banner-next:hover {
    background-color: rgba(46, 43, 43, 0.2);
    color: #fff;
    cursor: pointer;
  }

  .banner-pagination {
    position: absolute;
    right: 30px;
    bottom: 15px;
    height: 21px;
    width: 400px;
  }

  .banner-pagination li {
    float: left;
  }

  .banner-pagination a {
    display: inline-block;
    width: 6px;
    height: 6px;
    border: 2px solid #fff;
    border-color: hsla(0, 0%, 100%, .3);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(0, 0, 0, .4);
    opacity: 1;
    margin: 0 5px;
  }

  .banner-pagination .active {
    background-color: #fff;
    border: 2px solid #424242;

  }

</style>
