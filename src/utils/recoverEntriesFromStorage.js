export function recoverAllTransactions() {
  let transacoes = [];
  const keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    const item = JSON.parse(localStorage.getItem(keys[i]));
    transacoes.push(item);
  }

  transacoes = transacoes.sort(function (a, b) {
    return a.id - b.id;
  });

  return transacoes;
}
