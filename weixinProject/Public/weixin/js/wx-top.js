// JavaScript Document
$(function(){
        var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
                //在微信中打开
        	$(".wx-top").hide()
        } else {
        //否则就是PC浏览器打开
        	$(".wx-top").show()
        }
})