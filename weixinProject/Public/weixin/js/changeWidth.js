$(function() {
	var widths = $(window).width();
	
	if(widths >= 768){
		$('.wx-ewmBg,.wx-ewmCont,.balance-serv-bg,.balance-serv-cont,.inviteFd-hide-bg,.inviteFd-hide-con,.wx-register-ban,.popup-window-bg,.popup-window-cont').animate({"width":"768px"});
        $('.congratulationBg,.congratulation-con,.myFortune-con').animate({"width":"9.9965rem"});
//		$('.wx-ewmBg').animate({"width":"768px"});
//		$('.wx-ewmCont').animate({"width":"768px"});
//		$('.balance-serv-bg').animate({"width":"768px"});
//		$('.balance-serv-cont').animate({"width":"768px"});
//		$('.inviteFd-hide-bg').animate({"width":"768px"});
//		$('.inviteFd-hide-con').animate({"width":"768px"});
//		$('.wx-register-ban').animate({"width":"768px"});
//  	$('.congratulation-con').animate({"width":"9.9965rem"});
//  	$('.myFortune-con').animate({"width":"9.9965rem"});
//  	$('.popup-window-bg').animate({"width":"768px"});
//		$('.popup-window-cont').animate({"width":"768px"});
	}else{
		$('.wx-ewmBg,.wx-ewmCont,.balance-serv-bg,.balance-serv-cont,.wx-register-ban,.inviteFd-hide-bg,.inviteFd-hide-con,.congratulationBg,.congratulation-con,.myFortune-con,.popup-window-bg,.popup-window-cont').animate({"width":"100%"});
	}
});