// pages/book/payment/payment.js
const api = require('../../../../../config/api');
const app = getApp();


let money = 0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: money
  },
  doPay() {
    //弹窗提示已支付，在***查看订单详情
    wx.showModal({
      title: '￥' + this.data.money,
      content: '这里模拟了微信支付操作（没有商家id无法微信收款）',
      confirmText: '点击支付',
      success(res) {
        if (res.confirm) {
          //支付已完成
          wx.request({
            url: api.editStatusUrl,
            data: {
              _id: app.globalData._id,
              status: "paid",
            },
            method: "POST",
            success(res) {
              console.log(res);
            },
            fail(res) {
              console.log(res.errMsg);
            }
          })
        } else {
          console.log('支付失败')
        }
        wx.navigateTo({
          url: '/pages/mine/myorder/myorder',
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调价格接口
    wx.request({
      url: api.PayUrl,
      data: {
        _id: app.globalData._id
      },
      method: "POST",
      success: (res) => {
        console.log(res)
        this.setData({
          money: res.data
        })
      },
      fail(res) {
        console.log(res.errMsg)
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