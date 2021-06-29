const form = document.querySelector('form#form')
// const allInputs = form.querySelectorAll('input, textarea, select') 
const allInputs = form.querySelectorAll('.input-field') 


// Globais
let valoresCampos = new Object();
let nomesBonitosCampos = new Object();

allInputs.forEach( (input) => {
	const inputName = input.getAttribute('name')
	const labelText = input.querySelector('label').innerText

	valoresCampos = {
		...valoresCampos,
		[inputName]: undefined
	}

	nomesBonitosCampos = {
		... nomesBonitosCampos,
		[inputName]: labelText
	}

})


// Funcs
const validateTests = {
	"n-null":(value) => {

		if (["", undefined].includes(value)) {

			return "Preenche isso ae";
		}

		return true;
	},

	"email": (value) =>{
		const regexFormato = /(\w+.)*@((\w+\.)+|(\w+)+)\w+/g

		const matchValue = value.match(regexFormato) != null ? value.match(regexFormato)[0] : "";

		const valido = (matchValue.length > 0 && matchValue.length == value.length)

		if (! valido) {
			return "Email invalido"
		}

		return true;
	},

	"tel": (value) => {
		const regexFormato = /\([0-9]*\)[ ,\-,0-9]*/g

		const matchValue = value.match(regexFormato) != null ? value.match(regexFormato)[0] : "";
		const formatoValido = (matchValue.length > 0 && matchValue.length == value.length)

		const tamanhoTel = value.replace(/\([0-9]*\)/, "").replace(/[ ,-]/g, '').length

		const valido = (formatoValido && ( [8,9].includes(tamanhoTel) ))

		if (! valido) {

			if (formatoValido) {
				return "Telefone invalido - Tamanho invalido" 
			}

			return "Telefone invalido - Formato invalido" 

		}

		return true;
	}
}

const validateField = (eventProps) => {
	const {
		target,
		currentTarget
	} = eventProps;

	const inputType = target.getAttribute("type")
	const inputName = currentTarget.getAttribute('name')
	const attributes = currentTarget.getAttributeNames()



	const validations = attributes.filter( (nameAttribute) => {

		return Object.keys(validateTests).includes(nameAttribute)
	})

	let {value, checked} = target
	let valido = true

	if (inputType == "checkbox") {
		value = checked
	}

	

	for (funcName of validations) {
		
		const result = validateTests[funcName].call(this, value)

		if (result != true) {
			valido = false
			
			alert(result)
			break;
		}
	}

	if (valido) {
		valoresCampos[inputName] = value
	}else{
		valoresCampos[inputName] = undefined
	}
}

// Validação do Forms e Envio
const validarForms = () => {
	const someInputs = form.querySelectorAll('.input-field[n-null=""]') 

	let valeu = true

	let inputNameAlert; 

	for(input of someInputs){
		const inputName = input.getAttribute("name")

		// console.log(inputName)

		if (valoresCampos[inputName] == undefined) {
			// console.log(`${inputName} - ${valoresCampos[inputName]}`)
			inputNameAlert = inputName;

			valeu = false
			break;
		}
	}

	if (!valeu) {
		alert(`Preencha o campo: ${nomesBonitosCampos[inputNameAlert]}`)
		return;

	}else{
		form.submit()
	}
}

// Add Event on change 
allInputs.forEach((input) => {
	input.addEventListener("change", validateField)
})