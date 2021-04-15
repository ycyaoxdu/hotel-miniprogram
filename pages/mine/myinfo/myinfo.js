// pages/mine/myinfo/myinfo.js
const api = require('../../../config/api');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "",
    phone : ""
  },
  setName(event){
    this.setData({
      name: event.detail.value,
    })
  },
  setPhone(event){
    this.setData({
      phone: event.detail.value,
    })
  },
  setInfo(){
    //console.log(this.data);
    wx.request({
      url: api.doEditUserInfoUrl ,
      data : {
        openid : app.globalData.openid, 
        name:this.data.name,
        phonenumber : this.data.phone
      } ,
      method: "POST",
      success (res) {
        console.log(res.data);
      },
      fail(){
        console.log(res.errMsg);
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.request({
      url: api.editUserInfoUrl ,
      data : {
        openid : app.globalData.openid, 
      } ,
      method:"POST", 
      success:(res) => {
        const data = res.data[0];
        this.setData({
          name : data.name,
          phone: data.phonenumber
        })
      },
      fail(){
        console.log(res.errMsg);
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