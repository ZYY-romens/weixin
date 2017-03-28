 $(function(){
 	//页面加载后自动获得焦点
    	$('#amount').focus();
    	//充值有内容时，显示清空符号
    	$('#amount').keydown(function(){
			var _val = $(this).val();//充值的值
			_val = $.trim(_val);//去掉空格
			if(_val){
				$('.nameClear').show();
			}else{
				$('.nameClear').hide();
			}
		})
		$('.nameClear').on("click",function(){
		$('#amount').val("");
			$(this).hide();
        });
 });
