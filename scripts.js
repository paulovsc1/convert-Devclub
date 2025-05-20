const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value 

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real

    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.66
    const euroToday = 6.34

    // Sempre mostra o valor original em reais
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)

    // Converte o valor com base na moeda selecionada
    if(currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency", 
        currency: "USD"
    }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency", 
        currency: "EUR"
    }).format(inputCurrencyValue/euroToday)

    }

   
    

}

convertButton.addEventListener("click", convertValues);




