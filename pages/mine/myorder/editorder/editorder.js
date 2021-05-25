// pages/mine/myorder/editorder/editorder.js
const api = require('../../../../config/api');
const app = getApp();

let name = ""
let phone = ""
let type = ""
let start = ""
let end = ""
let time = 0
let status = ""
let openid = ""
let _id = ""
let createTime = ""


Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['single', 'double'],
    index: 0,
    name: name,
    phone: phone,
    type: type,
    start: start,
    end: end,
    time: time,
    status: status,
    openid: openid,
    _id: _id,
    createTime: createTime
  },

  bindName: function (e) {
    //console.log(e.detail.value);
    this.setData({
      name: e.detail.value
    })
  },
  bindPhone: function (e) {
    //console.log(e.detail.value);
    this.setData({
      phone: e.detail.value
    })
  },

  bindStart: function (e) {
    console.log(e.detail.value);
    //end默认为start+1
    let day = new Date((new Date(e.detail.value).getTime() + (1000 * 60 * 60 * 24)));

    this.setData({
      start: e.detail.value,
      end: formatTime(day)
    })
    //console.log(formatTime(day));
  },


  bindEnd: function (e) {
    //console.log(e.detail.value);
    this.setData({
      end: e.detail.value
    })
  },
  bindType: function (e) {
    //console.log(e.detail.value);
    this.setData({
      index: e.detail.value,
    })
  },

  editOrder() {
    if (this.data.status == 'not pay') {
      console.log(this.data)
      //计算住房时间
      let day = (new Date(this.data.end).getTime() - new Date(this.data.start).getTime()) / (1000 * 60 * 60 * 24);
      //先提交
      wx.request({
        url: api.doEditOrderUrl,
        data: {
          _id: this.data._id,
          name: this.data.name,
          phone: this.data.phone,
          type: this.data.type,
          start: this.data.start,
          end: this.data.end,
          time: day
        },
        method: "POST",
        success(res) {
          console.log(res)
        },
        fail(res) {
          console.log(res.errMsg)
        }
      })
      //跳转支付
      app.globalData._id = this.data._id
      wx.navigateTo({
        url: './payment/payment',
      })

    } else if (this.data.status == 'paid') {
      wx.showModal({
        title: "提示",
        content: '到店后清算差价',
        success(res) {
          //点击确定
          if (res.confirm) {
            console.log(this.data)
            //计算住房时间
            let day = (new Date(this.data.end).getTime() - new Date(this.data.start).getTime()) / (1000 * 60 * 60 * 24);
            //先提交
            wx.request({
              url: api.doEditOrderUrl,
              data: {
                _id: this.data._id,
                name: this.data.name,
                phone: this.data.phone,
                type: this.data.type,
                start: this.data.start,
                end: this.data.end,
                time: day
              },
              method: "POST",
              success(res) {
                console.log(res)
              },
              fail(res) {
                console.log(res.errMsg)
              }
            })
          } else {
            wx.showToast({
              title: '您已放弃当前修改',
              icon: 'none'
            })
          }
        }

      })
    } else {
      wx.showToast({
        title: '请联系管理员修改状态后重试',
        icon: 'none',
        duration: 2000
      })
    }

  },

  cancelOrder() {
    //console.log(this.data.status)
    if (this.data.status == 'not pay') {
      //console.log('cancel order')
      wx.request({
        url: api.cancelOrder,
        data: {
          _id: this.data._id
        },
        method: "POST",
        success(res) {
          console.log(res.data);
          wx.showToast({
            title: '取消成功',
            icon:'none',
            duration:3000,
            success (res) {
              wx.navigateBack({
                delta: 0,
              })
            }
          })
    
        },
        fail(res) {
          console.log(res.errMsg);
        }
      })
    } else {
      console.log('请联系管理员处理')
      wx.showModal({
        title:'tip',
        content: '请联系管理员更改订单状态后重试！',
        success (res) {
          wx.navigateBack({
            delta: 0,
          })
        }
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name,
      phone: options.phone,
      type: options.type,
      start: options.start,
      end: options.end,
      status: options.status,
      _id: options._id,
      createTime: options.createTime
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