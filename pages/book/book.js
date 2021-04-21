// pages/book/book.js
const api = require('../../config/api');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotelInfo : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: api.InformationUrl,
      success : (res)=>{
        console.log(res.data)
        this.setData({
          hotelInfo : res.data
        })
      },
      fail(res){
        console.log(res.errMsg)
      }
    })
  }
})