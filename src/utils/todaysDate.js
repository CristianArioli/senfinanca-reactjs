export function todaysDate(){
  const hoje = new Date();
  let dia = hoje.getDate();
  let mes = hoje.getMonth() + 1;
  const ano = hoje.getFullYear();

    if (dia < 10) {
      dia = `0${dia}`;
    }

    if (mes < 10) {
      mes = `0${mes}`;
    }

  return `${dia}/${mes}/${ano}`;
}