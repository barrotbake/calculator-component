const keys = document.querySelector('.calculator-keys')
const display = calculator.querySelector('.calculator-display')
const calculator = calculator.querySelector('.calculator')

keys.addEventListener('click', event =>{
    if(!event.target.closest('button')) return

    const key = event.target.textContent
    const displayValue = display.textContent
    

    if(displayValue === "0"){
        display.textContent = key
    } else {
        display.textContent = displayValue + key
    }
    key.datatset.keyType === 'operator'
    if(key.classList.contains('operator')){
        calculator.datatset.previousKeyType = 'operator'
    }

    
})