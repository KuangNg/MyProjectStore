Page({

    /**
     * 页面的初始数据
     */
    data: {
        background: ['../../image/swiper1.jpg', '../../image/goods02.jpg', '../../image/goods03.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        color: "#fff",
        goods: {
            id: 1,
            goodsName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包",
            goodsImage: "../../image/goods01.jpg",
            goodsPrice: "169",
            goodsoldPrice: "269",
            isCollect: false,
            goodsImg: "../../image/brand.png",
            goodsContent: "研究表明，水果腐烂程度越高，链格孢毒素含量越高，离病斑越远的部分，含量则越低。所以，并不是所有烂水果都不能吃。如果机械损伤和冷害的水果，只要没长时间放置，滋生微生物的话，还是可以吃；而对于霉变腐烂的水果，如果霉变的部分不是很严重，挖去病斑外2cm处，剩余部分还可以食用，如果霉变超过水果三分之一甚至一半以上，就不宜食用了。",
            goodsDetail: "../../image/IMG_0466.JPG"
        },
        num: 0
    },
    //跳转购物车
    Car: function() {
        wx.switchTab({
            url: '/pages/car/car'
        })
    },
    // 加入购物车
    getCar: function() {
        // wx.setStorageSync('Goodscarlists', '这是一个商品')
        var CarData = {
            id: this.data.goods.id,
            goodsName: this.data.goods.goodsName,
            goodsPrice: this.data.goods.goodsPrice,
            goodsImage: this.data.goods.goodsImage,
            num: 1
        }

        var GoodsCarList = wx.getStorageSync("GoodsCarList");
        //判断数据存储区是否有数据
        if (GoodsCarList) {
            //有相同数据，数量加一
            var flag = true;
            for (var i = 0; i < GoodsCarList.length; i++) {
                if (GoodsCarList[i].id == CarData.id) {
                    GoodsCarList[i].num += 1;
                    flag = false;
                }
            }
            //没有相同数据，添加数组
            if (flag) {
                GoodsCarList.push(CarData);
            }
            wx.setStorageSync('GoodsCarList', GoodsCarList);

        } else {
            wx.setStorageSync('GoodsCarList', [CarData])
        }

        this.setData({
            num: wx.getStorageSync("GoodsCarList").length
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.setData({
            num: wx.getStorageSync("GoodsCarList").length
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})