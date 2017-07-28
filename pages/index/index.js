//获取应用实例
var app = getApp();
var inVal = "";
Page({
  getInValue: function (event){
    inVal = event.detail.value;
  },
  goVipPlay: function (){
    if(inVal == ""){
      wx.showToast({
        title: "输入网址不能为空",
      });
    }else{
      wx.hideToast();
      wx.navigateTo({
        url: '/pages/vipplay/vipplay?url=' + inVal
      })
    }
  },
  onLoad: function (){
    var self = this
  }
});