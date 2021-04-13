// pages/book/book.js
Page({
  goToOrder : function () {
    wx.navigateTo({
      url: '/pages/book/createorder/createorder',
    })
  }
})