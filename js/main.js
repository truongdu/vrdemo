// // SearCH Click
// var search1 = document.getElementById("search");
// var searchFrom = document.getElementsByClassName('search_click');
// search1.addEventListener('click',search_btn);
// function search_btn () {

// 	for ( var i = 0; i<searchFrom.length ; i++){
// 		var addClassSearch = searchFrom[i].classList.add('show-search');
// 	}
	
// }

// Tab services
var tab = document.getElementsByClassName("project__item");
console.log(tab);
function openItem(item) {
	if(item === "All"){
		 for ( var i = 0; i < tab.length; i++) {
		tab[i].style.display = "block"; 
		}
	} else {
		for ( var i = 0; i < tab.length; i++) {
		tab[i].style.display = "none";  
		}
		var item_tab = document.getElementsByClassName(item);
		for ( var j=0 ; j<item_tab.length; j ++){
			console.log(item_tab[j]);
			item_tab[j].style.display = 'block';
		}
	}
}

//tab why choose us
var tab__why = document.getElementsByClassName("content-right");
function openWhy(item) {
	for ( var i = 0; i < tab__why.length; i++) {
	tab__why[i].style.display = "none";  
	}
	var item_tab = document.getElementsByClassName(item);
	for ( var j=0 ; j<item_tab.length; j ++){
		console.log(item_tab[j]);
		item_tab[j].style.display = 'block';
	}
}