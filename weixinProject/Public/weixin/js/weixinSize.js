function changeFZ(){
    		var w = $(window).width();
    		setHtmlFz(w/10);
    	}
    	function setHtmlFz(fz){
    		$("html").css("font-size",fz+"px");
    	}
    	window.onload = function(){
    		changeFZ();
    	}
    	window.onresize = function(){
    		changeFZ();
    	};

