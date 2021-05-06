const buttons = document.querySelectorAll(".nav-button")
const items = document.querySelectorAll(".tags-item");

const hasBeenSelectOther = ({target}) => {
	const itemName = target.attributes['show-who'].nodeValue

	console.log(itemName)

	items.forEach( (item) => {item.style.display = 'none'})

	document.querySelector(`#${itemName}`).style.display= "block";
}

buttons.forEach( (button) => {
	button.addEventListener('click', hasBeenSelectOther)
})
