// pages/categroy/categroy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categoryArr: [
            {
                "iconUrl": "../../image/icon-qiandao.png",
                "iconText": "签到"
            },
            {
                "iconUrl": "../../image/icon-fujin.png",
                "iconText": "附近"
            },
            {
                "iconUrl": "../../image/icon-zhanhui.png",
                "iconText": "展会"
            },
            {
                "iconUrl": "../../image/icon-fuli.png",
                "iconText": "福利"
            },
            {
                "iconUrl": "../../image/icon-muma.png",
                "iconText": "玩乐"
            },
            {
                "iconUrl": "../../image/icon-tiyu.png",
                "iconText": "体育"
            },
            {
                "iconUrl": "../../image/icon-xingxing.png",
                "iconText": "周边"
            },
            {
                "iconUrl": "../../image/icon-qinzi.png",
                "iconText": "亲子"
            },
        ],
        num:0
    },

    itemName:function(options){
        // console.log(options.target.dataset.index)
        this.setData({
            num: options.target.dataset.index
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        var _this = this;
        wx.getSystemInfo({
            success(res) {
                // console.log(res.windowHeight)
                _this.setData({
                    scrollH:res.windowHeight,
                    Wwidth: res.windowWidth - 82
                })
            }
        })
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
        this.setData({
            num:wx.getStorageSync('num') || 0
        })
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