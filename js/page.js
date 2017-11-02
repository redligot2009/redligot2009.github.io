$(window).scroll(
	function()
	{
		if($(window).scrollTop() > 0) 
		{
	    	$('.nav-bar-container').addClass('scrolling');
	    	$('.nav-bar-head').addClass('scrolling');
	    	$('.navbar-nav').addClass('scrolling');
		}
		else 
		{
			$('.nav-bar-container').removeClass('scrolling');
			$('.nav-bar-head').removeClass('scrolling');
	    	$('.navbar-nav').removeClass('scrolling');
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
function collapseMenu(event)
{
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) 
    {     
        $navbar.collapse('hide');
		$(".fader").removeClass("triggered");
    }
}
$(document).click(function (event) {
	collapseMenu(event);
});
$(window).resize(function()
{
    var $navbar = $(".navbar-collapse");
	var screenWidth = $(window).outerWidth();
	if(screenWidth >= 576)
	{
		$(".fader").removeClass("triggered");
		$navbar.removeClass('show');
	}
});
$(".fader").click(
	function(event)
	{
		$(".fader").removeClass("triggered");
	}
);