const convertButton = document.querySelector(".convert-button")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value 

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real

    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 5.66

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD"
    }).format(convertedValue)

}




convertButton.addEventListener("click", convertValues)

