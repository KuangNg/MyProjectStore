// pages/car/car.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // goodslists: [
        //     {
        //         id: 1,
        //         goodsName: "商品1",
        //         goodsImage: "../../image/goods01.jpg",
        //         goodsPrice: "111.00",
        //         num:1
        //     },
        //     {
        //         id: 2,
        //         goodsName: "商品2",
        //         goodsImage: "../../image/goods02.jpg",
        //         goodsPrice: "111.00",
        //         num:1
        //     },
        //     {
        //         id: 3,
        //         goodsName: "商品3",
        //         goodsImage: "../../image/goods03.jpg",
        //         goodsPrice: "111.00",
        //         num:1
        //     }
        // ],
        total:0
    },
    //减
    carrReduce:function(option){
        // console.log(option)
        //获取数据下标
        var index = option.target.dataset.index;
        //数量
        var getdatanum = this.data.goodslists[index].num;
        //修改数据对象
        var key = "goodslists["+index+"].num";
        var obj = {};
        obj[key] = getdatanum <= 1 ? 1 : --getdatanum;
        this.setData(obj);
        //更新新数据
        wx.setStorageSync("GoodsCarList", this.data.goodslists);
        this.onShow();

    } ,
    // 加
    carAdd: function (option) {
        //获取数据下标
        var index = option.target.dataset.index;
        //数量
        var getdatanum = this.data.goodslists[index].num;
        //修改数据对象
        var key = "goodslists[" + index + "].num";
        var obj = {};
        obj[key] =  ++getdatanum;
        this.setData(obj);
        //更新新数据
        wx.setStorageSync("GoodsCarList", this.data.goodslists);
        this.onShow();

    },
    // 删除
    carDel:function(option){
        var index = option.target.dataset.index;
        var carlists = this.data.goodslists;
        carlists.splice(index,1);

        this.setData({
            goodslists:carlists
        })
        //更新新数据
        wx.setStorageSync("GoodsCarList", this.data.goodslists);
        this.onShow();
    },
    //下单
    getPlay:function(){
        wx.navigateTo({
            url: '../pay/pay',
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
        var getcardata = wx.getStorageSync("GoodsCarList")
        var totalnum = 0;
        for(var i = 0 ; i < getcardata.length; i++){
            totalnum += getcardata[i].goodsPrice * getcardata[i].num
        }
        this.setData({
            goodslists:getcardata,
            total:totalnum.toFixed(2)
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