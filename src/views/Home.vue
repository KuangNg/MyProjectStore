<template>
  <div id="app">
    <!-- /* 顶部导航 start */ -->
    <NavHeader></NavHeader>
    <!-- /* 顶部导航 End */ -->
    <div class="w">
      <!-- 导航栏 Start -->
      <Nav></Nav>
      <!-- 导航栏 End -->

      <!-- 分类导航 Start -->
      <div class="nav-main">
        <div class="classify-left">
          <ul>
            <li>
              <router-link to='/detail/1' class="classify-content">手机 电话卡<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/2' class="classify-content">电视 盒子<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/3' class="classify-content">笔记本 显示器 平板<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/4' class="classify-content">家电 插线板<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/5' class="classify-content">出行 穿戴<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/6' class="classify-content">智能 路由器<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/7' class="classify-content">电源 配件<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/8' class="classify-content">健康 儿童<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/9' class="classify-content">耳机 音响<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
            <li>
              <router-link to='/detail/10' class="classify-content">生活 箱包<i class="iconfont icon-icon-test13"></i>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="classify-right"></div>

        <!-- banner 轮播图 -->
        <Banner></Banner>
      </div>
      <!-- 分类导航 End -->

      <!-- 底部导航栏 Start-->
      <div class="nav-bottom">
        <div class="channel-list clearfix">
          <ul>
            <li><a href="" class="item-icon"><img src="../assets/img/item-icon01.png" alt="">小米秒杀</a></li>
            <li><a href="" class="item-icon"><img src="../assets/img/item-icon02.png" alt="">企业团购</a></li>
            <li><a href="" class="item-icon"><img src="../assets/img/item-icon03.png" alt="">F码通道</a></li>
            <li><a href="" class="item-icon"><img src="../assets/img/item-icon04.png" alt="">米粉卡</a></li>
            <li><a href="" class="item-icon"><img src="../assets/img/item-icon05.png" alt="">以旧换新</a></li>
            <li><a href="" class="item-icon"><img src="../assets/img/item-icon06.png" alt="">话费充值</a></li>
          </ul>
        </div>
        <div class="channel-right clearfix">
          <ul class="channel-img">
            <li><a href=""><img src="../assets/img/nav-bottom01.jpg" alt=""></a></li>
            <li><a href=""><img src="../assets/img/nav-bottom02.jpg" alt=""></a></li>
            <li><a href=""><img src="../assets/img/nav-bottom03.jpg" alt=""></a></li>
          </ul>
        </div>
      </div>
      <!-- 底部导航栏 End-->
    </div>

    <!-- 内容区 Start -->
    <div class="main-content">
      <div class="w">
        <!-- 小米闪购 Start-->
        <div class="box">
          <div class="box-hd">
            <h2 class="title">小米闪购</h2>
          </div>
          <div class="box-bd">
            <div class="row">
              <div class="row-left">
                <div class="round">{{countDownTime}} 场</div>
                <img src="../assets/img/pic.png" alt="" class="pic">
                <div>
                  <div class="desc" v-show="active">距离结束还有</div>
                  <div :class="active?'Act':'Act-end'">活动结束</div>
                </div>
                <div class="countdown clearfix">
                  <span>{{h}}</span>
                  <i>:</i>
                  <span>{{m}}</span>
                  <i>:</i>
                  <span>{{s}}</span>
                </div>
              </div>

              <div class="row-right">
                <ul>
                  <li><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/row-right01.jpg" alt="">
                        </div>
                        <h3 class="title">米家声波电动牙刷T500</h3>
                        <p class="desc">刷的干净、智能护齿</p>
                        <p class="price">
                          <span>169</span>元
                          <del>199元</del>
                        </p>
                      </div>
                    </a></li>
                  <li><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/row-right02.jpg" alt="">
                        </div>
                        <h3 class="title">小米小爱音箱HD 深灰色</h3>
                        <p class="desc">震撼嘹亮 音智同享</p>
                        <p class="price">
                          <span>549</span>元
                          <del>599元</del>
                        </p>
                      </div>
                    </a></li>
                  <li><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/row-right03.jpg" alt="">
                        </div>
                        <h3 class="title">米家蓝牙温湿度计2 三个装</h3>
                        <p class="desc">冷暖干湿,一望而知</p>
                        <p class="price">
                          <span>69</span>元
                          <del>87元</del>
                        </p>
                      </div>
                    </a></li>
                  <li><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/row-right04.webp" alt="">
                        </div>
                        <h3 class="title">小米净水器1A（厨下式） 白色</h3>
                        <p class="desc">小身材节省空间，大流量直出纯净水</p>
                        <p class="price">
                          <span>999</span>元
                          <del>1499元</del>
                        </p>
                      </div>
                    </a></li>
                  <li><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/row-right05.jpg" alt="">
                        </div>
                        <h3 class="title">九号平衡车 白色</h3>
                        <p class="desc">年轻人的酷玩具</p>
                        <p class="price">
                          <span>1899</span>元
                          <del>1999元</del>
                        </p>
                      </div>
                    </a></li>
                </ul>
              </div>

              <div class="swiper-controls">
                <span class="swiper-prev"><i class="iconfont icon-icon-test11"></i></span>
                <span class="swiper-prev"><i class="iconfont icon-icon-test13"></i></span>
              </div>
            </div>
          </div>
          <div class="box-bottom">
            <img src="../assets/img/lenghtImg.webp" alt="">
          </div>
        </div>
        <!-- 小米闪购 End-->

        <!-- 手机 Start -->
        <div class="iphone-nav">
          <div class="box-hd">
            <h3 class="title">手机</h3>
            <div class="more">
              <a href="">
                查看全部
                <i class="iconfont icon-icon-test13"></i>
              </a>
            </div>
          </div>

          <div class="box-bd">
            <div class="row clearfix">
              <div class="span4">
                <li class="brick-item">
                  <img src="../assets/img/iphone01.webp" alt="">
                </li>
              </div>
              <div class="span16">
                <ul class="brick-list clearfix">
                  <li class="brick-item-m-2 brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone02.webp" alt="">
                        </div>
                        <h3 class="title">
                          小米10
                        </h3>
                        <p class="desc">骁龙865/1亿像素相机</p>
                        <p class="price">
                          <span>3999</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                  <li class="brick-item-m-2  brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone03.webp" alt="">
                        </div>
                        <h3 class="title">
                          Redmi K30 Pro
                        </h3>
                        <p class="desc">双模5G，骁龙865，弹出全面屏</p>
                        <p class="price">
                          <span>2999</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                  <li class="brick-item-m-2 brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone04.webp" alt="">
                        </div>
                        <h3 class="title">
                          Redmi K30 Pro 变焦版
                        </h3>
                        <p class="desc">双模5G，骁龙865，弹出全面屏</p>
                        <p class="price">
                          <span>3799</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                  <li class="brick-item-m-2 brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone05.webp" alt="">
                        </div>
                        <h3 class="title">
                          小米10 Pro
                        </h3>
                        <p class="desc">骁龙865 / 50倍变焦</p>
                        <p class="price">
                          <span>4999</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                  <li class="brick-item-m-2 brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone06.webp" alt="">
                        </div>
                        <h3 class="title">
                          Redmi K30
                        </h3>
                        <p class="desc">120Hz流速屏，全速热爱</p>
                        <p class="price">
                          <span>1699</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                  <li class="brick-item-m-2 brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone07.webp" alt="">
                        </div>
                        <h3 class="title">
                          Redmi K30 5G
                        </h3>
                        <p class="desc">双模5G，120Hz流速屏</p>
                        <p class="price">
                          <span>1999</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                  <li class="brick-item-m-2 brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone08.webp" alt="">
                        </div>
                        <h3 class="title">
                          Redmi 8
                        </h3>
                        <p class="desc">5000mAh超长续航</p>
                        <p class="price">
                          <span>699</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                  <li class="brick-item-m-2 brick-item"><a href="">
                      <div class="content">
                        <div class="content-img">
                          <img src="../assets/img/iphone09.webp" alt="">
                        </div>
                        <h3 class="title">
                          Redmi 8A
                        </h3>
                        <p class="desc">5000mAh超长续航</p>
                        <p class="price">
                          <span>599</span>元
                          <span>起</span>
                        </p>
                      </div>
                    </a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="box-bottom">
            <img src="../assets/img/iphone10.webp" alt="">
          </div>
        </div>
        <!-- 手机 End -->

        <!-- 家电 Start -->
        <div class="homeAppliances-nav">
          <div class="box-hd">
            <h3 class="title">家电</h3>
            <div class="more">
              <ul class="tab-list">
                <li><a href="" class="tab-active">热门</a></li>
                <li><a href="">电视影音</a></li>
              </ul>
            </div>
          </div>

          <div class="box-bd ">
            <div class="row clearfix">
              <div class="span4">
                <ul class="brick-promo-list clearfix">
                  <li class="brick-item brick-item-m ">
                    <a href=""><img src="../assets/img/homeAppliances01.webp" alt=""></a>
                  </li>
                  <li class="brick-item brick-item-m "><a href=""><img src="../assets/img/homeAppliances02.webp"
                        alt=""></a></li>
                </ul>
              </div>

              <div class="span16">
                <div class="goods-list">
                  <ul class="brick-list clearfix">
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances03.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances04.jpg" alt="">
                          </div>
                          <h3 class="title">
                            米家空调
                          </h3>
                          <p class="desc">出众静音，快速制冷热</p>
                          <p class="price">
                            <span>1299</span>元
                            <del>1799元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances05.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网洗烘一体机 Pro 10kg
                          </h3>
                          <p class="desc">智能洗烘，省心省力</p>
                          <p class="price">
                            <span>2999</span>元
                            <del>3299元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances06.jpg" alt="">
                          </div>
                          <h3 class="title">
                            小米电视4A 32英寸
                          </h3>
                          <p class="desc">人工智能系统，高清液晶屏</p>
                          <p class="price">
                            <span>699</span>元
                            <del>799元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances07.webp" alt="">
                          </div>
                          <h3 class="title">
                            Redmi全自动波轮洗衣机1A 8kg
                          </h3>
                          <p class="desc">一键操作，父母都爱用</p>
                          <p class="price">
                            <span>779</span>元
                            <del>899元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances08.webp" alt="">
                          </div>
                          <h3 class="title">
                            小米全面屏电视E55A
                          </h3>
                          <p class="desc">全面屏设计，人工智能语音</p>
                          <p class="price">
                            <span>1799</span>元
                            <del>1999元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances09.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>4899</span>元

                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item  brick-item-s"><a href="">
                        <div class="content">
                          <div class="figure-img">
                            <img src="../assets/img/homeAppliances10.webp" alt="">
                          </div>
                          <h3 class="title">
                            Air 13.3" 2019款
                          </h3>
                          <p class="price">
                            <span>1999</span>元
                            <span>起</span>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item  brick-item-s"><a href="">
                        <div class="figure figure-more figure-icon">
                          <i class="iconfont icon-icon-test25"></i>
                        </div>
                        <div class="more">
                          <p> 浏览更多</p>
                          <small>热门</small>
                        </div>
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="box-bottom">
            <a href="">
              <img src="../assets/img/homeAppliance.webp" alt="">
            </a>
          </div>
        </div>
        <!-- 家电 End -->

        <!-- 家电 Start -->
        <div class="homeAppliances-nav">
          <div class="box-hd">
            <h3 class="title">家电</h3>
            <div class="more">
              <ul class="tab-list">
                <li><a href="" class="tab-active">热门</a></li>
                <li><a href="">电视影音</a></li>
              </ul>
            </div>
          </div>

          <div class="box-bd ">
            <div class="row clearfix">
              <div class="span4">
                <ul class="brick-promo-list clearfix">
                  <li class="brick-item brick-item-m ">
                    <a href=""><img src="../assets/img/homeAppliances01.webp" alt=""></a>
                  </li>
                  <li class="brick-item brick-item-m "><a href=""><img src="../assets/img/homeAppliances02.webp"
                        alt=""></a></li>
                </ul>
              </div>

              <div class="span16">
                <div class="goods-list">
                  <ul class="brick-list clearfix">
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances03.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances04.jpg" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances05.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances06.jpg" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances07.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances08.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item brick-item-m brick-item-m-2"><a href="">
                        <div class="content">
                          <div class="content-img">
                            <img src="../assets/img/homeAppliances09.webp" alt="">
                          </div>
                          <h3 class="title">
                            米家互联网空调C1（一级能效）
                          </h3>
                          <p class="desc">变频节能省电，自清洁</p>
                          <p class="price">
                            <span>1999</span>元
                            <del>2699元</del>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item  brick-item-s"><a href="">
                        <div class="content">
                          <div class="figure-img">
                            <img src="../assets/img/homeAppliances10.webp" alt="">
                          </div>
                          <h3 class="title">
                            Air 13.3" 2019款
                          </h3>
                          <p class="price">
                            <span>1999</span>元
                            <span>起</span>
                          </p>
                        </div>
                      </a></li>
                    <li class="brick-item  brick-item-s"><a href="">
                        <div class="figure figure-more figure-icon">
                          <i class="iconfont icon-icon-test25"></i>
                        </div>
                        <div class="more">
                          <p> 浏览更多</p>
                          <small>热门</small>
                        </div>
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="box-bottom">
            <a href="">
              <img src="../assets/img/homeAppliance.webp" alt="">
            </a>
          </div>
        </div>
        <!-- 家电 End -->
      </div>
    </div>
    <!-- 内容区 End -->

    <!-- footer Start -->
    <Footer></Footer>
    <!-- footer End -->
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import Banner from '@/components/banner.vue'
  import NavHeader from '@/components/nav-header.vue'
  import Nav from '@/components/nav.vue'
  import Footer from '@/components/footer.vue'
  export default {
    components: {
      Banner,
      NavHeader,
      Nav,
      Footer
    },
    data() {
      return {
        countDownTime: '22:00',
        timer: null,
        h: "00",
        m: "00",
        s: "00",
        active: true
      }
    },
    methods: {
      conutDown(time) {
        var nowTime = +new Date();
        var inputTime = +new Date(time);
        var d = 0
        var h = 0
        var m = 0
        var s = 0
       
        if (inputTime > nowTime) {
          var times = (inputTime - nowTime) / 1000;
          d = parseInt(times / 60 / 60 / 24);
          d = d < 10 ? '0' + d : d;
          h = parseInt(times / 60 / 60 % 24);
          h = h < 10 ? '0' + h : h;
          m = parseInt(times / 60 % 60);
          m = m < 10 ? '0' + m : m;
          s = parseInt(times % 60);
          s = s < 10 ? '0' + s : s;
          // return d + '天' + h + '时' + m + '分' + s + '秒';
          return {
            d,
            h,
            m,
            s
          }
        }

        if (inputTime < nowTime) {
          return {
            d,
            h,
            m,
            s
          }
        }
      },
      play() {
        this.timer = setInterval(() => {
          var data = this.conutDown('2020-05-03 14:00:00')
          this.h = data.h
          this.m = data.m
          this.s = data.s
          this.end()
        }, 1000)
      },
      end() {
        if (this.h <= 0 && this.m <= 0 && this.s <= 0) {
          this.active = false
          this.h = "00"
          this.m = "00"
          this.s = "00"
          
        }
      }
    },
    created() {
      this.play()
    }
  }

</script>
