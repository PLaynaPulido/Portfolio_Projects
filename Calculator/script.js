class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){ //Toma todos los inputs y funciones de las clases selecionandas
        this.previousOperandTextElement = previousOperandTextElement //Create Variables
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()//Empieza siempre la calculadora con el output vacio
    }
    clear(){//Clear variables
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){//Delete single number
        this.currentOperand = this.currentOperand.toString().slice(0, -1)//Borra el ultimo numero del input
    }
    appendNumber(number){//Añade el numero al output que pulsemos
        if (number === '.' && this.currentOperand.includes('.')) return //Si el display ya contiene un punto, ya no deja poner mas.
        this.currentOperand = this.currentOperand.toString() + number.toString()//Esto hace que los numeros se conviertan en string porque lo que queremos es que salgan los numeros selecionados en el display en vez de sumarse en si.
    }
    chooseOperation(operation){//Seleciona la operacion que pulsemos en la calculadora
        if (this.currentOperand === '') return //Si el contenido del display esta vacio y quieres añadir una operacion, no te deja.
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute(){//Compute variables
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return //Si no hay algun input en el prev o current variable, la operacion no se realiza.
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default: //None of the operations were correctly selected.
                return
        }
        this.currentOperand = computation //Muestra el resultado en el current output y borra el previous.
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay = ''
        } else{
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    updateDisplay(){//Actualiza el resultado del output
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else{
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]') //Seleciona todos los elementos de la clase data-number
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]') //Seleciona el elemento de la clase data-equals
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
