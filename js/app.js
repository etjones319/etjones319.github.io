$(document).foundation();
$(document).ready(function() {
	$('form.multi-form a.next').click(function() {
	  $('fieldset.active').removeClass('active').next('fieldset').addClass('active');
	  $('div.active').addClass('inactive').removeClass('active').next('div').addClass('active').removeClass('inactive');
	});

	$('form.multi-form a.prev').click(function() {
	  $('fieldset.active').removeClass('active').prev('fieldset').addClass('active');
	  $('div.active').addClass('inactive').removeClass('active').prev('div').addClass('active').removeClass('inactive');
	})
});
