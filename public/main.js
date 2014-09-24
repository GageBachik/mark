$(document).on('ready', function() {

	var array = ['index', 'about', 'proj1', 'contact'];

	var count = 0;

	var getPage = function() {
		$.ajax({
			url: array[count] + ".html"
		}).done(function(html) {
			$('#swap').slideUp(300, function () {
				$('#swap').html(html);
				$('#swap').slideDown();
			});
		});
	};

	var dir = function(dir) {
		if (dir == 'forward') {
			count++;
			if (count > array.length - 1) {
				count = 0;
				getPage();
			} else {
				getPage();
			}
			
		} else if (dir == 'back') {
			count--;
			if (count < 0) {
				count = array.length - 1;
				getPage();
			} else {
				getPage();
			}
		};
	};

	$(".icon-right-open").on('click', function() {
		dir('forward');
	 });
	$(".icon-left-open").on('click', function() {
		dir('back');
	});
	
	$(document).keydown(function(e) {
		switch(e.which) {
			case 37: // left
			dir('back');
			break;

			case 39: // right
			dir('forward');
			break;

			return; // exit this handler for other keys
		}
	});

	// sending forms
	$(document).on('click', '#submit_btn', function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		
		$.post( "/submit", {name: name, email: email, message: message}, function( data ) {
			console.log(data);
		});

		$(this).parent().fadeOut(200, function () {
				var html = $('<h3>Your message has been sent!</h3>').css({marginTop: 75, fontWeight: 'bolder'});
				$(this).parent().html(html);
				$(this).parent().fadeIn();
		});
		
	});

});