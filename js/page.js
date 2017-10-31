$(window).scroll(
	function()
	{
		if($(window).scrollTop() > 0) 
		{
	    	$('.nav-bar-container').addClass('shadow');
		}
		else 
		{
			$('.nav-bar-container').removeClass('shadow');
		}
	}
);
$(".navbar-toggler").click(
	function()
	{
			if($("#navBar").hasClass("show"))
			{
					$(".fader").removeClass("triggered");
			}
			else
			{
					$(".fader").addClass("triggered");
			}
	}
);
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});
$(".fader").click(
	function()
	{
		$(".fader").removeClass("triggered");
	}
);