$.get( "http://api.pixplorer.co.uk/image?word=doge&amount=5&size=tb", function( data ) {
	var images = data.images;

	for(var i = 0; i < images.length; i++) {
		var imgHref = images[i].imageurl;
		var img = $('<img class="menu__item">');

		img.attr('src', imgHref);
		img.appendTo('.pictures');
	}
	
	$('.pictures').masonry({
	  // options...
	  itemSelector: '.menu__item'
	});
});