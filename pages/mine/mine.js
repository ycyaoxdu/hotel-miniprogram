// pages/mine/mine.js
Page({
  goToLogin : function () {
    wx.navigateTo({
      url: '/pages/mine/login/login',
    })
  },
  goToMyOrder : function () {
    wx.navigateTo({
      url: '/pages/mine/myorder/myorder',
    })
  }
})