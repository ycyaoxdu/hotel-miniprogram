// pages/book/createorder/createorder.js
const api = require('../../../config/api')

let name = ""
let phone = ""
let type = ""
let start = ""
let end = ""


Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:name,
    phone:phone,
    type:type,
    start:start,
    end:end,
    createTime:Date.now(),
    pay:false,
  },

  addName(event){
    this.setData({
      name: event.detail.value,
    })
  },
  addPhone(event){
    this.setData({
      phone: event.detail.value,
    })
  },
  addStart(event){
    this.setData({
      start: event.detail.value,
    })
  },
  addEnd(event){
    this.setData({
      end: event.detail.value,
    })
  },

  addOrder(){
    console.log(this.data);
    wx.request({
      url: api.OrderUrl,
      success (res) {
        console.log(res)
      },
      fail(){
        console.log('fail')
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data:'ok'});
    eventChannel.on('acceptDataFromOpenedPage', data=>{
      this.setData({
        type:data.data,
      })
      //console.log(data)
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