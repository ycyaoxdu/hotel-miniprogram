// pages/book/createorder/createorder.js
const api = require('../../../config/api');
const app = getApp();
const {formatTime} = require('../../../utils/util');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"" ,
    name:"",
    phone:"",
    type:"",
    start:"",
    end:"",
    time:""
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

  bindStart : function(e) {
    console.log(e.detail.value);
    //end默认为start+1
    let day = new Date( (new Date(e.detail.value).getTime() + (1000 *60*60*24) )  ) ;

    this.setData({
      start : e.detail.value ,
      end : formatTime(day)
    })
    //console.log(formatTime(day));
  },
  bindEnd : function(e) {
    console.log(e.detail.value);
    this.setData({
      end : e.detail.value 
    })
  },

  addOrder(){
    console.log(this.data);
    //计算住房时间
    let day = (new Date(this.data.end).getTime() - new Date(this.data.start).getTime()) / (1000 * 60 * 60*24);

    //console.log(day);

    wx.request({
      url: api.doAddOrderUrl,
      data:{
        openid:this.data.openid ,
        name:this.data.name,
        phone:this.data.phone,
        type:this.data.type,
        start:this.data.start,
        end:this.data.end,
        time:day,
        createTime:Date.now(),
        status:"not pay",
      },
      method:"POST",
      success: (res)=> {
        console.log(res)
        app.globalData._id = res.data 
        wx.navigateTo({
          url: '../../mine/myorder/editorder/payment/payment',
        })
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

    //
    this.setData({
      openid:app.globalData.openid,
    })
    //
    wx.request({
      url: api.editUserInfoUrl ,
      data : {
        openid:app.globalData.openid
      } ,
      method:"POST", 
      success:(res) => {
        //console.log(res.data);
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

    //
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);

    timestamp = timestamp + 24*60*60*1000 
    var tomorrow = new Date(timestamp);

    this.setData({
      start : formatTime(date),
      end : formatTime(tomorrow)
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