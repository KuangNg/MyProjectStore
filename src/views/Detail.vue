<template>
  <div class="detail">
    <NavHeader></NavHeader>
    <Nav></Nav>
    <!-- 主体内容 -->
    <div class="ShopDetail">
      <!-- 轮播图 -->
      <div class="shop_banner div01">
        <div>
          <transition-group tag="ul" class='slide-ul' name="list">
            <li v-for="(item,index) in imgList" v-bind:key="index" class="swiper-wrapper" v-show="index===currentIndex">
              <a href="">
                <img :src="item" alt="" class="h-img">
              </a>
            </li>
          </transition-group>
        </div>
      </div>

      <!--  内容区-->
      <div class="main_shop">
        <div class="wrap">
          <div class="goodsList">
            <div class="goodsTitle">
              <h2>明星产品</h2>
            </div>
            <div class="goods goods_transform">
              <div class="div02">
                <a href="">
                  <img src="../assets/img/goods01.jpg" alt="">
                </a>
              </div>
              <div class="content">
                <h3 class="title"><a href="">Redmi K30 Pro 变焦版</a></h3>
                <p class="desc">双模5G，骁龙865，弹出全面屏，索尼6400万双光学防抖四摄</p>
                <p class="price">
                  <strong>3799</strong>
                  元
                  <span>起</span>
                </p>
                <p class="link">
                  <a href="">立即购买</a>
                </p>
              </div>
            </div>
            <div class="goods goods_transform">
              <div class="div02">
                <a href="">
                  <img src="../assets/img/goods02.jpg" alt="">
                </a>
              </div>
              <div class="content">
                <h3 class="title"><a href="">Redmi K30 Pro</a></h3>
                <p class="desc">双模5G，骁龙865，弹出全面屏，6400万高清四摄</p>
                <p class="price">
                  <strong>2999</strong>
                  元
                  <span>起</span>
                </p>
                <p class="link">
                  <a href="">立即购买</a>
                </p>
              </div>
            </div>
            <div class="goods mTop channel-product">
              <div class="row clearfix ">

                <div class="div_fl goods_transform">
                  <div class="div03 ">
                    <a href="#">
                      <img src="../assets/img/goods03.jpg" alt="">
                    </a>
                  </div>
                  <div class="div03_content">
                    <h3 class="title">
                      <a href="">
                        小米10
                      </a>
                    </h3>
                    <p class="desc">骁龙865/1亿像素相机 </p>
                    <p class="price">
                      <strong class="p_color">3999</strong>
                      元
                      <span>起</span>
                    </p>
                  </div>
                </div>

                <div class="div_fl goods_transform">
                  <div class="div03 ">
                    <a href="#">
                      <img src="../assets/img/goods04.jpg" alt="">
                    </a>
                  </div>
                  <div class="div03_content">
                    <h3 class="title">
                      <a href="">
                        小米10 Pro
                      </a>
                    </h3>
                    <p class="desc">骁龙865 / 50倍变焦  </p>
                    <p class="price">
                      <strong>4999</strong>
                      元
                      <span>起</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import NavHeader from '@/components/nav-header.vue'
  import Nav from '@/components/nav.vue'
  import Footer from '@/components/footer.vue'
  export default {
    data() {
      return {
        detail_top: 1,
        imgList: [
          require('../assets/img/shop-detail-banner01.jpg'), require('../assets/img/02-shop_detail01.jpg'),
          require('../assets/img/shop-detail-banner01.jpg')
        ],
        currentIndex: 0,
        timer: null
      }
    },
    methods: {
      autoPlay() {
        this.currentIndex++;
        if (this.currentIndex == this.imgList.length) {
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
      //   上一张操作
      prevHandle(e) {
        console.log(e);

        if (this.currentIndex == 0) {
          this.currentIndex = this.bannerList.length - 1
        } else if (this.currentIndex > 0) {
          this.currentIndex--
        }
      },
      //   下一张操作
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

    computed: {
      id: function () {
        // 参数都保存在params中
        return this.$route.params.id
      }
    },
    created() {
      // 当前子页面路由信息
      console.log(this.$route);
      // 全局路由信息
      console.log(this.$router);

    },
    mounted() {
      this.play()
    },
    components: {
      NavHeader,
      Nav,
      Footer
    },
    watch: {
      $route(to, from) {
        console.log(to.path);
      }
    }
  }

</script>
<style>
  .wrap {
    width: 1226px;
    margin: auto;
  }

  .div01 {
    width: 100%;
    height: 620px;
  }

  .div02 {
    width: 854px;
    height: 100%;
  }

  .div03 {
    width: 606px;
  }

  .channel-product {
    height: 482px;
    width: 1226px;
    margin: 0 auto;
  }

  .div_fl {
    float: left;
    margin-left: 14px;
    min-height: 1px;
  }

  .shop_banner {
    height: 620px;
  }

  /* 隐藏横向滚动条 */
  body {
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
  }

  .swiper-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;

  }

  .h-img {
    height: 620px;
    width: 2560px;
    position: relative;
    left: 50%;
    margin-left: -1280px;
  }

  .slide-ul {
    width: 100%;
    height: 100%;
  }

  /* 明星产品 */
  .goods {
    position: relative;

  }

  .mTop {
    margin-top: 10px;
  }

  .goods_transform {
    transition: all .2s linear;
  }

  .goods_transform:hover {
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
    z-index: 3;
  }

  .goodsTitle {
    height: 68px;
    line-height: 68px;
  }

  .goods img {
    width: 100%;
  }

  .goods .content {
    position: absolute;
    right: 0;
    top: 0;
    width: 372px;
    background-color: #fff;
    line-height: 32px;
    height: 100%;
    box-sizing: border-box;
    padding: 0 30px 0 60px;
  }

  .goods .content .title {
    margin-top: 80px;
  }

  .goods .content .title a {
    color: #333;
    color: rgba(51, 51, 51, .9);
    font-size: 32px;
    font-weight: 400;

  }

  .goods .content .desc {
    width: 273px;
    line-height: 22px;
    min-height: 44px;
    margin: 4px 0 0;
    color: #333;
    color: rgba(51, 51, 51, .7);
    font-size: 14px;
  }

  .goods .content .price {
    line-height: 45px;
    margin: 17px 0 0;
    color: #ff6700;
    font-size: 12px;
    font-weight: 700;
  }

  .goods .content .price strong {
    font-weight: 400;
    font-size: 32px;
    letter-spacing: -2px;
  }

  .goods .content .link {
    position: absolute;
    left: 60px;
    bottom: 62px;
    margin: 0;
  }

  .goods .content .link a {
    color: rgba(51, 51, 51, .7);
    font-size: 16px;
  }

  .goods .row {
    height: 100%;
  }
  .div03_content {
    position: relative;
    background-color: #fff;
    height: 124px;
    overflow: hidden;
  }

  .div03_content .title {
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 26px;
    margin: 38px 0 0 48px;
  }

  .div03_content .title a {
    color: rgba(51, 51, 51, .9);
    font-size: 24px;
  }

  .div03_content .desc {
    line-height: 18px;
    margin: 3px 0 0 48px;
    color: #333;
    color: rgba(51, 51, 51, .7);
    font-size: 14px;
  }

  .div03_content .price {
    line-height: 30px;
    color: #ff6700;
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    right: 48px;
    bottom: 30px;
    margin: 0;
  }
  .goods .price strong {
    font-weight: 400;
    font-size: 30px;
  }
</style>
