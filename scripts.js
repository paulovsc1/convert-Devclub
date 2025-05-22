const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value 

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real

    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.66
    const euroToday = 6.34
    const libraToday = 7.58
    const bitcoinToday = 352174.28

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
    }).format(inputCurrencyValue / dolarToday)
    }


    if(currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency", 
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

    }

   if(currencySelect.value == "libra"){
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency" ,
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)

   }
    
    if(currencySelect.value == "bitcoin"){
   currencyValueToConverted.innerHTML = (inputCurrencyValue / bitcoinToday).toFixed(8) + " BTC";
}

if(inputCurrencyValue == "") {
    alert("O campo está vazio")
}

}

function changeValues() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/imagens/dolar.png"
    }

     if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/imagens/euro.png"
    }

     if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/imagens/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/imagens/bitcoin.png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeValues)
convertButton.addEventListener("click", convertValues);




