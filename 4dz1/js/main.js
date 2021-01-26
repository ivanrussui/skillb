$(function () {
	$('.btn')

		.click(function () {
			$('.block-left__text').remove();
			var newElement = $('.form-title__text').val();
			$('.block-left').append(newElement);
			var newElement2 = $('.form-description__text').val();
			$('.block-left').append(newElement2);
			
		});

});




// $(function () {
// 	$('.btn')

// 		.click(function () {
// 			$('.block-left__text').remove();
// 			var newElement = $('.form-title__text').val();
// 			$('.block-left').append(newElement);
// 			var newElement2 = $('.form-description__text').val();
// 			$('.block-left').append(newElement2);
// 		});

// });
