$(function(){
	var invsetInput = $(".wxInvestInput");
	var newRegReg = $(".newRegReg");
	var couponType = $("#couponType").val();
	
	var checkInput = function(){
		var _self = $(this);
		var inputLength = _self.val().length;
		if(inputLength>0 || couponType =='1'){
			newRegReg.removeClass("invest-invaild").removeAttr("disabled");
		}else{
			newRegReg.addClass("invest-invaild").prop("disabled","disabled");
		}
	}
	invsetInput.on("keyup",checkInput);
})