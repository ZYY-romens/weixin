// JavaScript Document
function b(){	
	t = parseInt(x.css('top'));
	y.css('top','22px');	
	x.animate({top: t - 22 + 'px'},'slow');	//22为每个li的高度
	if(Math.abs(t) == h-22){ //22为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,5000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	function aa(){
		$('.swap').html($('.news_li').html());
		x = $('.news_li');
		y = $('.swap');
		h = $('.news_li li').length * 22; //22为每个li的高度
		setTimeout(b,5000);//滚动间隔时间 现在是3秒
	}
	setTimeout(aa,5000)
	$(".nav li").on("click",function(){
		var _self = $(this);
		var index = _self.index();
		_self.addClass("active").siblings().removeClass("active");
		var n = 1-index;
		$(".active-"+index).show();
		$(".active-"+n).hide();
	})
	var url = window.location.host;
	$(".contact-us-abstract a").attr('href','hyjf://jumpH5/?{"url":"http://'+url+'/hyjf-app/jsp/aboutUs2.jsp"}')
	//		点击增加减少购买数量
var inputTxt =	$('input[type=number]').val();
		var remain = $.trim($('.remainNum').text());
		var remainNum =  parseInt(remain);  
		    function change(a){
				var txtNum = parseInt($('input[type=tel]').val());
				$('input[type=tel]').val(txtNum+a);
				return;
		    };
		    //设置兑换数量
		    var lengthItem = $(".goods-item-btn").length;
		    for(var i=0;i<lengthItem;i++){
		    	var btnNum = $(".goods-item-btn").text().charAt(5);
		    	$(".goods-item-btn").next().text(btnNum);
		    }
//		    点击增加购买数量
			var itemLen = $(".goods-item").length;
			for(var j=0;j<itemLen;j++){
				//修改数字 改变星数
				$('.num').eq(j).keyup(function(){
					var btn = $(this).parent().next();
					var n = +btn.next().text();
					var num = +$(this).prev().val();
					var a = btn.text();
					var a1 = a.substring(0,5);
					var a2 = a.substr(-3);
					var va = $(this).val()*n;
					$(this).parent().next().text(a1+va.toString()+a2);
				})
				$('.increase').eq(j).click(function(){
				$('.tb-stock i').removeClass('unclick');
				var btn = $(this).parent().next();
				var n = +btn.next().text();
				var num = +$(this).prev().val();
				var a = btn.text();
				var a1 = a.substring(0,5);
				var a2 = a.substr(-3);
				var num1 = (num+1)*n ;
				var text1 = a1+num1.toString()+a2;//拼接字符串
				btn.text(text1);
				var inputTxt =	+$(this).prev().val();
				if(inputTxt >= remainNum){
					$(this).addClass('unclick');
				}else{
					$(this).prev().val(inputTxt+1);
					$(this).prev().data('num',parseInt(inputTxt)+1).trigger('change');
				}
			});
//			点击减少购买数量
			$('.reduce').eq(j).click(function(){
				$('.tb-stock i').removeClass('unclick');
				var btn = $(this).parent().next()
				var n = +btn.next().text();
				var num = +$(this).next().val();
				var a = btn.text();
				var a1 = a.substring(0,5);
				var a2 = a.substr(-3);
				var num1 = (num-1)*n ;
				if(num>1){
					var text1 = a1+num1.toString()+a2;
				btn.text(text1);
				}
				var inputTxt =	+$(this).next().val();
				    if(inputTxt >1){  
				        $(this).next().val(inputTxt-1)
				        $(this).next().data('num',parseInt(inputTxt)-1).trigger('change');
				    }else{  
				        $(this).addClass('unclick');
				    }
			});
			//点击兑换
			$(".goods-item-btn").eq(j).on("click",function(){
				$(".pop").show()
				$(".pop-2").show()
				var widthPop = $(".pop-2").width();
				$(".pop-2").height(widthPop*1.31);
			})
		}
			$("#num").change(function(){
				var dataNum = $('#num').data('num');
					$('.actual-pay').text(dataNum);
			})
				//垂直居中图片
	var heightItem = $(".goods-item>div");
	var heightImg = $(".goods-item>img").height();
	var top = (heightItem-heightImg)/2;
	$(".goods-item>img").css("margin-top",top+"px");
	
	//关闭弹出
	$(".pop-close").on("click",function(){
		$(".pop").hide();
	})
})

