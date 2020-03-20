$(document).ready(function() {

	$('form #response').hide();
	$('form #responseSuccess').hide();

	$('#send').on('click', function(e) {
		e.preventDefault();
		/* Act on the event */

		var valid = '';
		var required = ' is required';
		var name = $('form #name').val();
		var email = $('form #email').val();
		var subject = $('form #subject').val();
		var message = $('form #message').val();

		if (name = '' || name.length <= 2) {
			valid += '<p>Your Name(s) ' + required + '</p>';
		}
		
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<p>Your Email ' + required + '</p>';
		}
		
		if (subject = '' || subject.length < 2) {
			valid += '<p>Your Subject ' + required + '</p>';
		}
		
		if (message = '' || message.length < 2) {
			valid += '<p>Your message ' + required + '</p>';
		}

		if(valid != '') {
			$('form #response').removeClass().addClass('animated bounceIn warning')
			.html('<h5>Please Correct the following errors</h5>' +  valid).fadeIn('fast');
		} else {
			var contactData =  $('form').serialize();
			console.log(contactData);
			$.ajax({
				type: 'POST',
				url: 'process.php',
				data: contactData,
				success: function(){
					$('#responseSuccess').removeClass().addClass('animated fadeInDown success')
					.html("<h4>Thank You for contacting us. We will get back to you soon</h4>").fadeIn();
					if($('#responseSuccess').hasClass('success')) {
						setTimeout("$('#responseSuccess').fadeOut('fast')", 5000);
					}
				},
				error: function() {
					$('#response').removeClass().addClass('animated fadeInDown alert error')
					.html("An error occured. Please Try again later").fadeIn();
				},
				complete: function() {
					$('form')[0].reset();
				}

			});
		}
	});
});