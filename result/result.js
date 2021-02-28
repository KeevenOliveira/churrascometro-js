// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// Suco - 600ml por pessoa 

// Crianças valem por 0,5

const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

const resultado = document.getElementById("result")

function carnePP(duracao) {
  
  if(duracao >= 6) {
    return 650;
  }else{
    return 400;
  }
}

function sucoPP(duracao) {
  
  if(duracao >= 6) {
    return 1000;
  }else{
    return 600;
  }
}

function bebidasPP(duracao) {
  
  if(duracao >= 6) {
    return 1000;
  }else{
    return 600;
  }
}

function calcular() {
  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputDuracao.value;

  const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  const qdtTotalSuco = sucoPP(duracao) * adultos;
  const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  if(adultos == ""|| criancas == "" || duracao == ""){
    return resultado.innerHTML =`<h2 class="result-info ult">Informação incompleta<h2>`
  }
  //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
  resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
  resultado.innerHTML += `
    <div class="result-block">
      <img class="img" src="./assets/meal.svg"/>
      <p>${qdtTotalCarne/1000} Kg de Carne</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block">
      <img class="img" src="./assets/juice.svg"/>
      <p>${Math.ceil(qdtTotalSuco/1500)} Litro(s) de Suco</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block ult">
      <img class="img" src="./assets/refri.svg"/>
      <p>${Math.ceil(qdtTotalBebidas/2000)} Litro(s) de Refrigerante</p>
    </div>
  `
}
