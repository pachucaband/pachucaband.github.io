var cyclerDelay = 5000;
var cyclerTransition = 1000;

$(document).ready(function () {
	

	homeCycler(cyclerDelay, cyclerTransition);


});


function homeCycler(delay, transition)
{
	//get active
	var currentImg = $(".home_img.active").data("number");

	if (currentImg == 1)
	{
		setTimeout(function () {
			$('.hi_1').fadeOut(transition);
			$('.hi_1').removeClass("active");
			$('.hi_2').addClass("active");
			homeCycler(delay, transition);
		}, delay);
	}
	else if (currentImg == 2) {
		setTimeout(function () {
			$('.hi_2').fadeOut(transition);
			$('.hi_2').removeClass("active");
			$('.hi_3').addClass("active");
			homeCycler(delay, transition);
		}, delay);
	}
	else if (currentImg == 3) {
		setTimeout(function () {
			$('.hi_1').fadeIn(transition);
			$('.hi_3').removeClass("active");
			$('.hi_1').addClass("active");
			setTimeout(function () {
				$('.hi_2').css("display", "block");
			}, transition);
			homeCycler(delay, transition);
		}, delay);
	}
}