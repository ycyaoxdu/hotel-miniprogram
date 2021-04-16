/****
 * 此页面完成添加并提交建议的业务逻辑
 */



// pages/mine/myadvice/myadvice.js
const api = require('../../../config/api');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    advice:"",
  },
  setAdvice(event){
    this.setData({
      advice:event.detail.value,
    })
  },
  addAdvice(){
    //console.log(this.data.advice)
    wx.request({
      url: api.addAdviceUrl,
      data:{
        advice:this.data.advice
      },
      method:"POST",
      success(res){
        console.log(res.data);
      },
      fail(res){
        console.log(res.errMsg);
      }
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