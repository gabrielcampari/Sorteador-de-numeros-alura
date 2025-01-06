function raffle() {
  //Objetivo de receber os valores: "Quantidade de números, do número e Até o número", use os id para receber esses valores

  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let randomNumbers = [];
  let number;

  for (let i = 0; i < quantidade; i++) {
    number = takeRandomNumber(de, ate);

    while (randomNumbers.includes(number)) {
      //function includes no array, verifica se o numero já existe no array
      number = takeRandomNumber(de, ate);
    }

    randomNumbers.push(number);
  }

  let result = document.getElementById("result");
  result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${randomNumbers.join(
    ", "
  )}</label>`;
  changeButtonStatus();
}

function takeRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeButtonStatus() {
  let button = document.getElementById("btn-reiniciar");

  if (button.classList.contains("container__botao-desabilitado")) {
    button.classList.remove("container__botao-desabilitado");
    button.classList.add("container__botao");
  } else {
    button.classList.remove("container__botao");
    button.classList.add("container__botao-desabilitado");
  }
}

function reset() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "result"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum número sorteado.</label>`; //Aqui inserimos o resultado como um label padrão para resetá lo
  changeButtonStatus();
}
