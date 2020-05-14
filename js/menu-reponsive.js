// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " menu-responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

$(document).ready(function(){
	$('.btn__header').click(function(){
		$('.items').toggleClass("show");
		$('ul li').toggleClass("hide");
	});
});