var anyApiUrl = "http://www.bilifun.co/fun/vip/vipplay.html?url=";
var playUrl = "";
Page({
  onLoad: function (options) {
    playUrl = anyApiUrl + options.url;
    this.setData({
      url: playUrl
    })
  },
  copyUrl: function(){
    wx.setClipboardData({
      data: playUrl,
      success: function (res) {
        wx.showToast({
          title: "复制成功，请打开本地浏览器访问链接",
        });
      }
    })
  }
});
