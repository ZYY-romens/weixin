//整数满三位加逗号，小数时整数部分满三位加逗号
function formatNum(str){
		var newStr = "";
		
		var count = 0;
		if(str.indexOf(".")==-1){
		   for(var i=str.length-1;i>=0;i--){
			    if(count % 3 == 0 && count != 0){
					newStr = str.charAt(i) + "," + newStr;
				}else{
					newStr = str.charAt(i) + newStr;
				}
					count++;
			}
			str = newStr + ""; //自动补小数点后两位
				   //console.log(str)
		}else{
				for(var i = str.indexOf(".")-1;i>=0;i--){
				 	if(count % 3 == 0 && count != 0){
				   		newStr = str.charAt(i) + "," + newStr;
				 	}else{
				   		newStr = str.charAt(i) + newStr; //逐个字符相接起来
					}
				 count++;
				}
				   str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
		}
				return str;
}
/*小数点后保留2位 最多7位整数*/
var dotNum = function(){
		/*保留小数点后两位*/
 	var inputMoney = this.value;
 	/*没有小数点且大于七位*/
 	var wxa = inputMoney.indexOf(".");
 	if(wxa<0&&this.value.length>7){
 		this.value = this.value.slice(0,7);
 	}else if(wxa>-1){/*有小数点*/
 		var afterDot = this.value.slice(wxa+1,wxa+3);  //截取小数点后两位数
 		var beforeDot = this.value.slice(0,wxa); //截取小数点前的数字
 		this.value = beforeDot +"."+afterDot;
 		if(this.value.length>9){/*当位数大于9位*/
 			this.value = this.value.slice(0,10);
 		}
 	}
	}