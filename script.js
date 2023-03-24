const dataAniversario = new Date('2023-07-30'); 

function checkAniversario() {
  const dataAtual = new Date('2023-03-23');
  const diffInMs = dataAniversario - dataAtual;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  if (diffInDays === 0) {
    console.log("Feliz aniversário!");
  } else {
    console.log(`Faltam ${diffInDays} dias para o seu aniversário.`);
  }
}

setInterval(checkAniversario, 2000);
