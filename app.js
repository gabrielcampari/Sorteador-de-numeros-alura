function raffle() {
  //Objetivo de receber os valores: "Quantidade de números, do número e Até o número", use os id para receber esses valores

  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let number = takeRandomNumber(de, ate);
  alert(`O numero sorteado foi: ${number}`);
}

function takeRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min;
}
