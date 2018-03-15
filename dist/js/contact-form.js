"use strict";

var $form = document.querySelector("form.contact-form");
$form.addEventListener("submit", function (e) {
	e.preventDefault();
	console.log("test");
	$.ajax({
		method: "post",
		url: "form_to_email.php",
		data: {
			honeypost: $('[name="honeypot"]').val(),
			user_message: $('[name="user_message"]').val(),
			user_name: $('[name="user_name"]').val(),
			user_email: $('[name="user_email"]').val()
		}
	});
});
//# sourceMappingURL=contact-form.js.map
