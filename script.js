document.getElementById("verificar").addEventListener("click", () => {
  let pontuacao = 0;

  // Verifica a resposta da pergunta 1
  const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
  if (resposta1 && resposta1.value === "correta") {
    pontuacao++;
  }

  // Verifica a resposta da pergunta 2
  const resposta2 = document.querySelector('input[name="pergunta2"]:checked');
  if (resposta2 && resposta2.value === "correta") {
    pontuacao++;
  }

  // Verifica a resposta da pergunta 3
  const resposta3 = document.querySelector('input[name="pergunta3"]:checked');
  if (resposta3 && resposta3.value === "correta") {
    pontuacao++;
  }

  // Exibe o resultado
  alert(`Você acertou ${pontuacao} de 3 perguntas!`);
});
