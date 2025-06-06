const perguntas = [
  {
    pergunta: "O que é uma enchente?",
    opcoes: ["Acúmulo de neve", "Inundação causada por excesso de água", "Tempestade elétrica"],
    resposta: 1
  },
  {
    pergunta: "Qual componente mede a distância até a água no AquaNível?",
    opcoes: ["Sensor de temperatura", "Sensor ultrassônico", "Câmera"],
    resposta: 1
  },
  {
    pergunta: "O que o módulo RTC faz no sistema?",
    opcoes: ["Envia dados via rádio", "Controla o LED", "Mantém a hora correta"],
    resposta: 2
  },
  {
    pergunta: "Qual energia é usada pelo AquaNível?",
    opcoes: ["Eólica", "Solar", "Fóssil"],
    resposta: 1
  },
  {
    pergunta: "O que é LoRa?",
    opcoes: ["Protocolo de segurança", "Tipo de sensor", "Tecnologia de comunicação de longo alcance"],
    resposta: 2
  },
  {
    pergunta: "Qual o principal objetivo do AquaNível?",
    opcoes: ["Vender água potável", "Medir e alertar sobre riscos de enchente", "Monitorar a poluição do ar"],
    resposta: 1
  },
  {
    pergunta: "Por que o sistema é ideal para áreas remotas?",
    opcoes: ["Por usar internet a cabo", "Por funcionar com energia solar e LoRa", "Por depender de Wi-Fi"],
    resposta: 1
  },
  {
    pergunta: "O que acontece se a internet estiver fora?",
    opcoes: ["O sistema para de funcionar", "Os dados são perdidos", "Os dados ficam armazenados localmente"],
    resposta: 2
  },
  {
    pergunta: "Como os dados ajudam as autoridades?",
    opcoes: ["Para publicidade", "Para tomar decisões e planejar evacuações", "Para venda de terrenos"],
    resposta: 1
  },
  {
    pergunta: "O AquaNível é resistente a...?",
    opcoes: ["Respingos de tinta", "Chuva, sol e variações de temperatura", "Fumaça industrial"],
    resposta: 1
  }
];

const container = document.getElementById('quiz-container');
const btnEnviar = document.getElementById('enviar-quiz');
const resultado = document.getElementById('resultado-quiz');

if (container && btnEnviar && resultado) {
  perguntas.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('pergunta');
    div.innerHTML = `<p><strong>${i + 1}. ${q.pergunta}</strong></p>`;

    q.opcoes.forEach((opcao, j) => {
      const id = `q${i}_op${j}`;
      div.innerHTML += `
        <label for="${id}">
          <input type="radio" name="q${i}" id="${id}" value="${j}"> ${opcao}
        </label><br>
      `;
    });

    container.appendChild(div);
  });

  btnEnviar.addEventListener('click', () => {
    let acertos = 0;

    perguntas.forEach((q, i) => {
      const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);
      if (respostaSelecionada && Number(respostaSelecionada.value) === q.resposta) {
        acertos++;
      }
    });

    resultado.innerHTML = `<p>Você acertou <strong>${acertos}</strong> de ${perguntas.length} perguntas.</p>`;
  });
}
