$(document).ready(function () {


function validateEmail(email) { 
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);}
$("a#order_send").fancybox({
	'zoomSpeedIn':  200,
	            'zoomSpeedOut': 200,                
	            'overlayOpacity': 0.05,
	            'overlayShow' : false,                     
	            'frameWidth': 680,
	            'frameHeight': 450
});



		// $("#send").on("click", function(){
		// 	var emailval  = $("#email").val();
		// 	var msgval    = $("#msg").val();
		// 	var msglen    = msgval.length;
		// 	var mailvalid = validateEmail(emailval);
			
		// 	if(mailvalid == false) {
		// 		$("#email").addClass("error");
		// 	}
		// 	else if(mailvalid == true){
		// 		$("#email").removeClass("error");
		// 	}
			
		// 	if(msglen < 4) {
		// 		$("#msg").addClass("error");
		// 	}
		// 	else if(msglen >= 4){
		// 		$("#msg").removeClass("error");
		// 	}
			
		// 	if(mailvalid == true && msglen >= 4) {
		// 		// если обе проверки пройдены
		// 		// сначала мы скрываем кнопку отправки
		// 		$("#send").replaceWith("<em>отправка...</em>");
				
		// 		$.ajax({
		// 			type: 'POST',
		// 			url: 'sendmessage.php',
		// 			data: $("#contact").serialize(),
		// 			success: function(data) {
		// 				if(data == "true") {
		// 					$("#contact").fadeOut("fast", function(){
		// 						$(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
		// 						setTimeout("$.fancybox.close()", 1000);
		// 					});
		// 				}
		// 			}
		// 		});
		// 	}
		// });

$('#pdf_create').click(function(){
	var $html=$('#itog').html();
	//alert ($html);
	// alert ($('.konfig:checked').attr('value'));
	$('#pdftext').attr('value', $html);
	$("#formpdf").submit();
	return false;
});

$('#send').click(function(){
	//alert('111');
	var $html=$('#itog').html();
	//alert ($html);
	// alert ($('.konfig:checked').attr('value'));
	$('#lastnamereal').attr('value', $('#lastname').val());
	$('#firstnamereal').attr('value', $('#firstname').val());
	$('#fathernamereal').attr('value', $('#fathername').val());
	$('#phonereal').attr('value', $('#phone').val());
	$('#emailreal').attr('value', $('#email').val());
	$('#adressreal').attr('value', $('#adress').val());
	$('#paymentreal').attr('value', $('#payment').val());
	$('#emailreal').attr('value', $('#email').val());
	$('#transportreal').attr('value', $('#transport').val());
	$('#commentreal').attr('value', $('#comment').val());
	$('#pdftext').attr('value', $html);
	// alert ($("#pdf_create").html());
	var emailval  = $("#email").val();
	var phoneval  = $("#phone").val();
	var phonelen  = phoneval.length;
	var lastnameval  = $("#lastname").val();
	var lastnamelen  = lastnameval.length;
	
	var firstnameval = $("#firstname").val();
	var firstnamelen    = firstnameval.length;
	var fathernameval	  = $("#fathername").val();
	var fathernamelen    = fathernameval.length;
	
	var adressval	  = $("#adress").val();
	var adresslen    = adressval.length;
	
	var msgval    = $("#pdftext").val();
	var msglen    = msgval.length;
	var mailvalid = validateEmail(emailval);
	
			if(mailvalid == false) {
				$("#email").addClass("error");
			}
			else if(mailvalid == true){
				$("#email").removeClass("error");
			}
			
			if(phonelen < 9) {
				$("#phone").addClass("error");
			}
			else if (phonelen >= 9) {
				$("#phone").removeClass("error");
			};

			if(lastnamelen < 2) {
				$("#lastname").addClass("error");
			}
			else if (lastnamelen >= 2) {
				$("#lastname").removeClass("error");
			};

			if(firstnamelen < 2) {
				$("#firstname").addClass("error");
			}
			else if (firstnamelen >= 2) {
				$("#firstname").removeClass("error");
			};

			if(fathernamelen < 2) {
				$("#fathername").addClass("error");
			}
			else if (fathernamelen >= 2) {
				$("#fathername").removeClass("error");
			};

			if(adresslen < 2) {
				$("#adress").addClass("error");
			}
			else if (adresslen >= 2) {
				$("#adress").removeClass("error");
			};


			if(msglen < 4) {
				$("#pdftext").addClass("error");
			}
			else if(msglen >= 4){
				$("#pdftext").removeClass("error");
			}

			if(mailvalid == true && msglen >= 4 && phonelen >= 9 && lastnamelen >=2 && firstnamelen >=2 && fathernamelen >=2 && adresslen>=2) {
				// если обе проверки пройдены
				// сначала мы скрываем кнопку отправки
				$("#send").replaceWith("<em>отправка...</em>");
				
				$.ajax({
					type: 'POST',
					url: '/sendmessage.php',
					data: $("#formpdf").serialize(),
					success: function(data) {
						// if(data == "true") {
							$("#fadeing").fadeOut("fast", function(){
								$(this).before("<p><strong>Ваше сообщение отправлено.</strong></p>");
								setTimeout("$.fancybox.close()", 300000);
							});
						// }
					}
				});
			}
	// $("#formpdf").submit();
	// return false;
	
}); 
	
});  