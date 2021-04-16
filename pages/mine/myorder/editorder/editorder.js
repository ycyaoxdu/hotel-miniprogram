// pages/mine/myorder/editorder/editorder.js

let name = ""
let phone = ""
let type = ""
let start = ""
let end = ""
let status = ""
let id = ""
let createTime = ""


Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['standard','double'],
    index:0,
    name:name,
    phone:phone,
    type:type,
    start:start,
    end:end,
    status:status,
    id:id,
    createTime:createTime
  },
  bindStart : function(e) {
    console.log(e.detail.value);
    this.setData({
      start : e.detail.value 
    })
  },
  bindEnd : function(e) {
    console.log(e.detail.value);
    this.setData({
      end : e.detail.value 
    })
  },
  bindType : function(e) {
    console.log(e.detail.value);
    this.setData({
      index : e.detail.value ,
    })
  },

  editOrder(){
    console.log(array[index])
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      name:options.name,
      phone:options.phone,
      type:options.type,
      start:options.start,
      end:options.end,
      status:options.status,
      id:options.id,
      createTime:options.createTime
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