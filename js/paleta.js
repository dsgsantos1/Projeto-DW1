const paletaColors = document.querySelector("#paleta-cores");

const colors = ["#020115","#f7fefbd8","rgb(255, 227, 227)","#212121","#f7fefbd8","#80808054","#F7FEFB","#0f0122f0","#F2B705","#3B8C2E"]

colors.forEach( (color)=>{
	let colorP = document.createElement('div')
	colorP.style.backgroundColor = color
	colorP.className = "color"

	paletaColors.append(colorP)
} )