Page({

  /**
   * 页面的初始数据
   */
  data: {
      background: ['../../image/goods01.jpg', '../../image/goods02.jpg', '../../image/goods03.jpg'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
      categropArr:[
          {
              imageFenlei:"../../image/icon-qiandao.png",
              textFenlei:"签到"
          },
          {
              imageFenlei: "../../image/icon-fujin.png",
              textFenlei: "附近"
          },
          {
              imageFenlei: "../../image/icon-zhanhui.png",
              textFenlei: "展会"
          },{
              imageFenlei: "../../image/icon-fuli.png",
              textFenlei: "福利"
          },{
              imageFenlei: "../../image/icon-muma.png",
              textFenlei: "玩乐"
          },{
              imageFenlei: "../../image/icon-tiyu.png",
              textFenlei: "体育"
          },
          {
              imageFenlei: "../../image/icon-xingxing.png",
              textFenlei: "周边"
          },
          {
              imageFenlei: "../../image/icon-qinzi.png",
              textFenlei: "亲子"
          },
      ],
      goodslists:[
          {
              id:1,
              goodsName:"商品1",
              goodsImage:"../../image/goods01.jpg",
              goodsAddress:"广州",
              goodsPrice:"111.00"
          },
          {
              id: 2,
              goodsName: "商品2",
              goodsImage: "../../image/goods02.jpg",
              goodsAddress: "广州",
              goodsPrice: "111.00"
          },
          {
              id: 3,
              goodsName: "商品3",
              goodsImage: "../../image/goods03.jpg",
              goodsAddress: "广州",
              goodsPrice: "111.00"
          },
          {
              id: 4,
              goodsName: "商品4",
              goodsImage: "../../image/goods04.jpg",
              goodsAddress: "广州",
              goodsPrice: "111.00"
          },

      ]
  },
    onclick:function(options){
        // console.log(options)
        wx.setStorageSync("num", options.target.id)
        wx.switchTab({
            url: '/pages/categroy/categroy'
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})