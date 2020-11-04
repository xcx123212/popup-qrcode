const QR = require('../../utils/weapp-qrcode.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: "123456"
    }
  },

  created() {

  },
  ready() {
    wx.getSystemInfo({
      success: (res) => {
        let height = res.windowHeight - this.data.shareHeight
        let width = Math.ceil(height * 0.7)
        this.setData({
          screenWidth: res.windowWidth,
          screenHeight: res.windowHeight
        })
      }
    })
    this.show();
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPopup: false,
    qrcodeUrl: "",
    screenWidth: 0,
    screenHeight: 0,
    posterHeight: 215,
    posterWidth: 215
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      let res = QR.drawImg(this.data.text, {
        typeNumber: 4,
        errorCorrectLevel: 'M',
        size: 215
      })
      this.setData({
        showPopup: false,
        qrcodeUrl: res
      })
    },

    changeImg() {
      this.setData({
        showPopup: true,
        qrcodeUrl: this.data.qrcodeUrl
      })
    },

    close() {
      this.setData({
        showPopup: false
      })
    }
  }
})
