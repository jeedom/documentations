$(function(){
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	$('.dropdown-trigger').dropdown();
	$('.collapsible').collapsible();
	$('select').formSelect();
});

function convertCase(_string){
	return _string.charAt(0).toUpperCase()+_string.substr(1).toLowerCase();
}
