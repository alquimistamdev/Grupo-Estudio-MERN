
function convert() {
  const celsiusInput = document.getElementById('celsius')
  const resultToDisplay = document.getElementById('result')

  if (!celsiusInput.value){
    resultToDisplay.textContent = 'Por favor, ingrese una temperatura en Celsius'
    return
  } 

  const celsius = parseFloat(celsiusInput.value)
  const fahrenheit = ( celsius * 9) / 5 + 32

  resultToDisplay.textContent = `Resultado en Fahrenheit: ${fahrenheit.toFixed(2)} °F`
}

