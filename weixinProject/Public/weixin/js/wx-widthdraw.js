$(function(){
	//点击提现方式显示
	var showWidthdraw = function(){
		$(".wx-withdraw-main").hide();
		$(".wx-withdraw-toggle").show();
	}
	var selectWithdraw = function(){
		var withdrawTitle = $(this).find("p:first-child").text();
		var withdrawVal = $(this).find("input").val();
		$(".wx-withdraw-i").text(withdrawTitle);
		$("#withdrawStyle").val(withdrawVal);
		$(this).addClass("wx-widthdraw-selected").siblings().removeClass("wx-widthdraw-selected");
		$(".wx-withdraw-main").show();
		$(".wx-withdraw-toggle").hide();
	}
	var selectWithdrawCard = function(){
		var _self = $(this);
		var src = _self.find("img").prop("src");
		var bankName = _self.find(".wx-recharge-card-2 p:first-child").text();
		var cardNum = _self.find(".wx-recharge-card-2 p:nth-child(2)").text();
		var newNum = _self.find(".wx-recharge-card-2 input[name=cardnum]").val();
		var selectDiv = _self.find(".wx-recharge-form");
		var withdrawtop = $(".withdraw-top");
		//改变银行 卡号 logo
		withdrawtop.find(".wx-recharge-card-1 img").prop("src",src);
		withdrawtop.find(".wx-recharge-card-2 p:first-child").text(bankName);
		withdrawtop.find(".wx-recharge-card-2 p:nth-child(2)").text(cardNum);
		withdrawtop.find(".wx-recharge-card-2 input[name=cardnum]").val(newNum);
		selectDiv.addClass("wx-withdraw-top-selected").parent().siblings().find(".wx-recharge-form").removeClass("wx-withdraw-top-selected");
		$(".wx-withdraw-main").show();
		$(".wx-withdraw-toggle-card").hide();
	}
	var showBnkCard = function(){
		$(".wx-withdraw-main").hide();
		$(".wx-withdraw-toggle-card").show();
	}
	var bankImg = $(".wx-recharge-card-3 img")
	if(bankImg.hasClass("wx-withdraw-img")){
		showBnkCard = null;
	}
	$(".wx-withdraw-style").on("click",showWidthdraw);
	$(".wx-withdraw-toggle>div").on("click",selectWithdraw);
	$(".wx-withdraw-toggle-card .wx-recharge-top ").on("click",selectWithdrawCard);
	$(".wx-recharge-card").on("click",showBnkCard);
})