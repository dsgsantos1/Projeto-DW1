var menuButton = document.querySelector("#menu-icon")
var menu = document.querySelector("#menu")

const changeButtonState = () => {
	if(menuButton.classList.contains('icon-hamburger-menu')){
		menuButton.classList.remove("icon-hamburger-menu")
		menuButton.classList.add("icon-close-x")		
	}else{
		menuButton.classList.remove("icon-close-x")
		menuButton.classList.add("icon-hamburger-menu")		
	}
}

const changeMenuState = () => {
	
	if(menu.classList.contains('hide')){
		menu.classList.remove("hide")
		menu.classList.add("loading")		
	}else{
		menu.classList.remove("loading")
		menu.classList.add("hide")

		changeButtonState()		
	}
	
}

menu.addEventListener('animationend',  changeButtonState)
menuButton.addEventListener('click',  changeMenuState)
