// --------------------------------------------------------------------------------------------------------------------------------
// 二维码生成工具
$(function() {
	$("#qrcode").each(function() {
		$(this).qrcode({
			text: $("#qrcodeValue").val(),
			render: "canvas", 
			width: 256, height: 256,
			typeNumber: -1, 
			correctLevel: QRErrorCorrectLevel.H,
			background: "#ffffff",
			foreground: "#000000"
		})
	});
})
