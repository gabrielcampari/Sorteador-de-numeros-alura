function raffle() {
  //Objetivo de receber os valores: "Quantidade de números, do número e Até o número", use os id para receber esses valores

  let quantity = parseInt(document.getElementById("quantity").value);
  let from = parseInt(document.getElementById("from").value);
  let until = parseInt(document.getElementById("until").value);

  let randomNumbers = [];
  let number;

  for (let i = 0; i < quantity; i++) {
    number = takeRandomNumber(from, until);

    while (randomNumbers.includes(number)) {
      //function includes no array, verifica se o numero já existe no array
      number = takeRandomNumber(from, until);
    }

    randomNumbers.push(number);
  }

  let result = document.getElementById("result");
  result.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${randomNumbers.join(
    ", "
  )}</label>`;
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
  document.getElementById("quantity").value = "";
  document.getElementById("from").value = "";
  document.getElementById("until").value = "";
  document.getElementById(
    "result"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum número sorteado.</label>`; //Aqui inserimos o resultado como um label padrão para resetá lo
  changeButtonStatus();
}
