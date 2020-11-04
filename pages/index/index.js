const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  jump: function () {
     wx.navigateTo({
       url: '/pages/popup-qrcode/popup-qrcode',
     })
  }
})
