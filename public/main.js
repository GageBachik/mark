$(document).on('ready', function() {

	var array = ['index', 'about', 'contact'];

	var count = 0;

	var getPage = function() {
		$.ajax({
			url: array[count] + ".html"
		}).done(function(html) {
			$('#swap').fadeOut(300, function () {
				$('#swap').html(html);
				$('#swap').fadeIn();
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

});