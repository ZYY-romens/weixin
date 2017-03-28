function tabMove(){
	var $wWidth = $(window).width();
	var $liWidth = $(".tabTitle span").width();
	var $time = 200;
	if($wWidth <= 768){
		$(".tabContents").width($wWidth*4);
		$(".tabItem ").width($wWidth);
	}else{
		$(".tabContents").width(3072);
		$(".tabItem ").width(768);
	}

	var $content = $(".tabItem");

	$("body").css("overflow-x","hidden");
	$(".tabContents").css("overflow-x","hidden");

	$('.tabTitle span').click( function(){
		var index=$(this).index();
		var width = $(".tabItem").width();
		$( this).addClass('active').siblings().removeClass('active');
		/*new*/
		$(".tabContents").animate({marginLeft:-index*width+'px'},$time);
		$(".detail_line").animate({left:index*$liWidth+'px'},$time);
		/*tabcontent show and hide*/
		var $itemH = $content.eq(index).height();
		// alert($itemH)
		// $(".tabContents").css("height","auto");
		//$(".tabContents").height($itemH);
	});
};
window.onload = tabMove;
tabMove()
//点击图片放大
function imgEnlarge(){
	var $wWidth = $(window).width();
	var $wHeight = $(window).height();
	var $popWidth = $(".openPopDiv div").width();
	var $popLeft = ($wWidth-$popWidth)/2;
	$(".sliderImg").click(function(){
		$(".back_img").addClass("back_act").removeClass("hide");
		//获取图片高度 src 名称
		var $height = $(this).height();
		var $src = $(this).prop("src");
		var $name = $(this).next().html();
		//计算margin top
		var $top = ($wHeight-$height)/2.2;
		$(".back_img div").css("margin-top",$top);
		$(".back_img img").prop("src",$src);
		$(".back_img span").html($name);
		$("body").css("overflow","hidden");

	});
	$(".back_img").click(function(){
		$(this).addClass("hide").removeClass("back_act");
		$("body").css("overflow","auto")
	});
	//pop居中
	$(".openPopDiv div").css("left",$popLeft);
}
imgEnlarge();
//显示进度条
(function(){
	$centNum = $("#centNum").text();
	$(".detailHead .process i b").css("width",$centNum+"%")
})()
//最大图片高度
function maxH(){
	$("#tab3").on("click",function(){
		var $h = $(".sliderImg");
		var arr= [];
		for(var i=0;i<$h.length;i++){
			var a = $h.eq(i).height();
			arr.push(a);
		}
		var max = arr[0];
		for(var i=1;i<arr.length;i++){
			if(max<arr[i])max=arr[i];
		}
		$(".swiper-container").height(max+28);
		for(var i=0;i<$h.length;i++){
			var $margintop = $h.eq(i).height();
			var mt = (max-$margintop)/2
			$h.eq(i).css("marginTop",mt+"px")
		}
		//设置相关文件高度
//		var $docH = $("#infoThreeId").height();
//		$(".tabContents").height($docH+50);
	})
//	$("#tab1,#tab2,#tab4").on("click",function(){
//		$(".tabContents").css("height","auto");
//	})
}
maxH()



