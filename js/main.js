var search1 = document.getElementById("search");
var searchFrom = document.getElementsByClassName('search_click');
console.log(searchFrom);
search1.addEventListener('click',search_btn);
function search_btn () {

	for ( var i = 0; i<searchFrom.length ; i++){
		var addClassSearch = searchFrom[i].classList.add('show-search');
	}
	
}
