<template>
  <div class="loginPage">
    <div class="w">
      <div class="header">
        <router-link to="/"></router-link>
      </div>
      <div class="wrap">
        <div class="main-content">
          <!-- 表单输入登录 -->
          <div class="nav_tabs_header">
            <div class="nav-tabs">
              <a href="" class="navtabs-link now">帐号登录</a>
              <span class="line"></span>
              <a href="" class="navtabs-link">扫码登录</a>
            </div>
            <div class="login-form">
              <div class="main-form">
                <div>
                  <form action="">
                    <div class="user">
                      <label for="username">
                        <input type="text" id="username" placeholder="邮箱/手机号码/小米ID">
                      </label>
                    </div>
                    <div class="pwd">
                      <label for="pwd">
                        <input type="password" id="pwd" placeholder="密码">
                      </label>
                    </div>
                    <div class="login-btn">
                      <button>登录</button>
                    </div>
                  </form>
                </div>
                <div class="other_panel clearfix">
                  <span class="sms_link">
                    <a href="" class="btnadpt btn_gray login_type_link">手机短信登录/注册</a>
                  </span>
                  <div class="reverse">
                    <a href="">立即注册</a>
                    <span class="reverse-icon">|</span>
                    <a href="">忘记密码？</a>
                    <div class="sms-unavaliable-links">
                      <a href="">收不到验证码？</a>
                    </div>
                  </div>

                  <!-- 其他登录方式 -->
                  <div class="other_login_type">
                    <fieldset class="oth_type_tit">
                      <legend class="oth_type_txt">其他方式登录</legend>
                    </fieldset>
                    <div class="oth_type_links">
                      <a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=STATE_859302"
                        target="_blank" class="icon_type btn_qq">
                        <i class="btn_sns_icontype icon_default_qq"></i>
                      </a>
                      <a href="https://api.weibo.com/oauth2/authorize?response_type=code&client_id=2996826273&redirect_uri=https://sns.account.xiaomi.com/pass/sns/login/load&state=STATE_049082"
                        target="_blank" class="icon_type btn_weibo">
                        <i class="btn_sns_icontype icon_default_weibo"></i>
                      </a>
                      <a href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Ddffbffa2515e5fd598851423661f2f60"
                        target="_blank" class="icon_type btn_alipay">
                        <i class="btn_sns_icontype icon_default_alipay"></i>
                      </a>
                      <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxa21de3acc0d5e79b&redirect_uri=https%3A%2F%2Fsns.account.xiaomi.com%2Fpass%2Fsns%2Flogin%2Fload&response_type=code&scope=snsapi_login&state=STATE_326617#wechat_redirect"
                        target="_blank" class="icon_type btn_weixin">
                        <i class="btn_sns_icontype icon_default_weixin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div>
          <a href="">简体</a>
          <span class="font_type">|</span>
          <a href="">繁体</a>
          <span class="font_type">|</span>
          <a href="">English</a>
          <span class="font_type">|</span>
          <a href="">常见问题</a>
          <span class="font_type">|</span>
          <a href="">隐私政策</a>
        </div>
        <p>小米公司版权所有-京ICP备10046444-
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
            class="beian-record-link" target="_blank">
            <span><img src="../assets/img/ghs.png" alt=""></span>
            京公网安备11010802020134号-京ICP证110507号
          </a>
          </p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
  .header {
    width: 200px;
    height: 98px;
    background: url(../assets/img/mistore_logo.png);
  }

  .header a {
    display: block;
    height: 100%;
  }

  .wrap {
    position: relative;
    width: 100%;
    height: 556px;
  }

  .main-content {
    position: absolute;
    right: 0;
    width: 410px;
    min-height: 556px;
    font-size: 14px;
    background-color: #fff;
  }

  .main-content .nav-tabs {
    padding: 27px 0 24px;
    text-align: center;
    font-size: 24px;
    color: #666;
  }

  .line {
    width: 1px;
    height: 24px;
    margin: 0 35px 0 42px;
    border: 1px solid #e0e0e0;
  }

  .now {
    color: #f56600;
  }

  .nav-tabs a:hover,
  .nav-tabs a .now {
    color: #f56600;
  }

  .main-form {
    width: 348px;
    margin: 0 31px;
  }

  .main-form input {
    display: block;
    width: 314px;
    height: 22px;
    line-height: 22px;
    padding: 13px 16px 13px 14px;
    border: 1px solid #ccc;
  }

  .user,
  .pwd {
    margin-bottom: 20px;
  }

  .login-btn button {
    background-color: #ff6700;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: block;
    margin-bottom: 14px;
    margin-top: 30px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }

  .sms_link {
    float: left;
  }

  .sms_link .btn_gray.btnadpt {
    margin-bottom: 30px;
  }

  .sms_link .btnadpt.btn_gray {
    color: #ff6700;
    border: 0 none;
    height: auto;
    line-height: normal;
    margin: 0;
  }

  .reverse {
    float: right;
  }

  .reverse-icon {
    margin: 0 5px;
    color: #999;
  }

  .reverse a {
    color: #999;
  }

  .reverse a:hover {
    color: #f56600;
  }

  .sms-unavaliable-links {
    display: none;
  }

  .other_login_type {
    padding-top: 143px;
    text-align: center;
  }

  .oth_type_tit {
    border: none;
    border-top: 1px solid #e0e0e0;
    padding-top: 10px;
    padding-bottom: 10px\9;

  }

  .oth_type_txt {
    font-size: 14px;
    color: #bbb;
    margin: 0 auto;
    text-align: center;
  }

  .oth_type_links {
    padding-top: 3px;
  }

  .icon_type {
    width: 30px;
    height: 30px;
    margin: 0 12px;
    display: inline-block;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
  }

  .btn_qq {
    background-color: #0288d1;
  }

  .btn_weibo {
    background-color: #d32f2f;
  }

  .btn_alipay {
    background-color: #0ae;
  }

  .btn_weixin {
    background-color: #00d20d;
  }

  .icon_type {
    margin: 0 17px;
  }

  .btn_sns_icontype {
    background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png);
    width: 18px;
    height: 18px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .icon_default_qq {
    background-position: -19px 0;
  }

  .icon_default_weibo {
    background-position: -38px 0;
  }

  .icon_default_alipay {
    background-position: -57px 0;
    width: 25px;
  }

  .icon_default_weixin {
    background-position: -83px 0;
    width: 24px;
  }

  .icon_type .btn_sns_icontype {
    display: block;
    margin: 4px auto 0;
  }

  .icon_type .icon_default_alipay {
    margin-top: 6px;
    margin-left: 4px;
  }

  .icon_type .icon_default_weixin {
    margin-top: 6px;
  }

  /* 底部 */
  .footer {
    position: relative;
    bottom: 0;
    background-color: #fff;
    padding-top: 100px;
    text-align: center;
    font-size: 16px;
  }

  .footer a {
    color: #333;
    font-size: 16px;
  }

  .footer .font_type {
    font-size: 16px;
    color: #999;
  }

  .font_type {
    margin: 0 10px;
  }

</style>
