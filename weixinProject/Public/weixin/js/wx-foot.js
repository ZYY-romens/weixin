$('.footer-bottom ul li').click(function(){
	$('.footer-bottom ul li a').removeClass('nav-checked');
	$(this).children('a').addClass('nav-checked');
})
