/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openHamburger() {
	var a = $("#navigation");
  
	if(a.hasClass('responsive')) {
		a.removeClass('responsive');
	}
	else {
		a.addClass('responsive');
	}
}