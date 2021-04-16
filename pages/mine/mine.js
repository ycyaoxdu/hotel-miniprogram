// pages/mine/mine.js
Page({
  goToMyInfo : function () {
    wx.navigateTo({
      url: '/pages/mine/myinfo/myinfo',
    })
  },
  goToMyOrder : function () {
    wx.navigateTo({
      url: '/pages/mine/myorder/myorder',
    })
  },
  goToAdvice : function () {
    wx.navigateTo({
      url: '/pages/mine/myadvice/myadvice',
    })
  }
})