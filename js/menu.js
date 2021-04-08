var menuButton = document.querySelector("#menu-icon")
var menu = document.querySelector("#menu")

menuButton.addEventListener('click',  ()=> {
	
	if(menu.classList.contains('hide')){
		menu.classList.remove("hide")
		menu.classList.add("loading")		
	}else{
		menu.classList.remove("loading")
		menu.classList.add("hide")		
	}
	
})
