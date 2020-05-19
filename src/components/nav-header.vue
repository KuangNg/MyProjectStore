<template>
  <!-- /* 顶部导航 start */ -->
  <div class="header">
    <div class="w">
      <div class="head_left">
        <ul>
          <li>
            <router-link to='/'>小米官网</router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'> MIUI </router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'> IoT </router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'>云服务</router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'> 金融</router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'> 有品</router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'> 小爱开放平台</router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'> 企业团购</router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'>资质证照</router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'> 协议规则</router-link>
            <span class="sep">|</span>
          </li>
          <li class="download">
            <router-link to='/'>下载app
              <span class="appcode">
                <img src="../assets/img/xiaomiApp.png" alt="">
                <p>小米商城APP</p>
              </span>
            </router-link>
            <span class="sep">|</span>
          </li>
          <li>
            <router-link to='/'>Select Location</router-link>
          </li>
        </ul>
      </div>

      <div class="head_right">
        <li>
          <router-link to="/login">登录</router-link>
          <span class="sep">|</span>
        </li>
        <li>
          <router-link to="">注册</router-link>
          <span class="sep">|</span>
        </li>
        <li>
          <router-link to="">消息通知</router-link>
        </li>
        <div class="shopCar">
          <router-link to=""><i class="iconfont icon-icon-test carIcon"></i> 购物车（0）</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- /* 顶部导航 End */ -->
</template>
<script>
  export default {
    methods: {
      mouseOver: function (e) {
        console.log(e);

      }
    }
  }

</script>

<style>
  .download {
    position: relative;
  }

  .appcode {
    width: 124px;
    position: absolute;
    display: none;
    bottom: -160px;
    left: -80%;
    z-index: 2;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    color: #333;
    box-shadow: 0 1px 5px #aaa;
  }

  .download:hover .appcode {
    display: block;
  }

  /* 上箭头 */
  .appcode::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 10px;
    height: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0);
    border-left: 1px solid rgba(0, 0, 0, 0);
    background-color: #fff;
    transform: rotate(45deg);
  }

  .appcode img {
    width: 100px;
    height: 100px;
  }

</style>
