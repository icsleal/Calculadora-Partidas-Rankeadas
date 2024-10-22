function hankeadas(vitorias, derrotas) {
  let balanceHanker = vitorias - derrotas;
  return balanceHanker;
}

function balance() {
  let balance = hankeadas(100, 9);
  let nivel;

  if (balance <= 10) {
    nivel = "Ferro";
  } else if (balance <= 20) {
    nivel = "Bronze";
  } else if (balance <= 50) {
    nivel = "Prata";
  } else if (balance <= 80) {
    nivel = "Ouro";
  } else if (balance <= 90) {
    nivel = "Diamante";
  } else if (balance <= 100) {
    nivel = "Lendário";
  } else if (balance <= 101) {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${balance} está no nível de ${nivel}`;
}

console.log(balance());
