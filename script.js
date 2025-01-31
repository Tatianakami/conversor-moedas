async function converterMoedas() {
    const valorInput = document.getElementById("valor").value;
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const resultado = document.getElementById("resultado");


    if (valorInput === "" || valorInput <= 0) {
        resultado.innerText = "Por favor, insira um valor válido!";
        return;
    }

    try{
        const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.rates[moedaDestino]) {
            resultado.innerText = "Erro ao obter taxa de câmbio. Tente novamente mais tarde!";
            return;
        }


        const taxa = data.rates[moedaDestino];
        const valorConvertido = (valorInput * taxa).toFixed(2);


        resultado.innerText = `${valorInput} ${moedaOrigem} = ${valorConvertido} ${moedaDestino}`;
    } catch (error) {
        resultado.innerText = "Erro ao obter taxa de câmbio. Tente novamente mais tarde!";
    }


}

