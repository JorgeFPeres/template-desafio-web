const choices = ['Fora da curva', 'Muito bom', 'O.K.', 'Ruim']

const questionMessages = {
  delivery: [
    'O resultado final está completo para ser executado?',
    'O resultado final atende ao que se propõe fazer?',
    'O resultado final atende totalmente aos requisitos propostos?',
    'O resultado final é visualmente elegante?',
  ],
  bestPractices: [
    'O código está de acordo com o guia de estilo da linguagem?',
    'O código está bem estruturado?',
    'O código faz o bom uso de Design Patterns?',
    'O código possui testes?',
  ],
  documentation: [
    'O código foi entregue com um arquivo de README claro de como instalar e codificar no projeto',
    'O código possui comentários pertinentes?',
    'O código está em algum controle de versão?',
    'Os commits são pequenos e consistentes?',
    'As mensagens de commit são claras?',
  ],
}

const questionTemplate = { type: 'select', choices }

const questions = [
  {
    ...questionTemplate,
    name: 'delivery.0',
    message: questionMessages.delivery[0],
  },
  {
    ...questionTemplate,
    name: 'delivery.1',
    message: questionMessages.delivery[1],
  },
  {
    ...questionTemplate,
    name: 'delivery.2',
    message: questionMessages.delivery[2],
  },
  {
    ...questionTemplate,
    name: 'delivery.3',
    message: questionMessages.delivery[3],
  },
  {
    ...questionTemplate,
    name: 'bestPractices.0',
    message: questionMessages.bestPractices[0],
  },
  {
    ...questionTemplate,
    name: 'bestPractices.1',
    message: questionMessages.bestPractices[1],
  },
  {
    ...questionTemplate,
    name: 'bestPractices.2',
    message: questionMessages.bestPractices[2],
  },
  {
    ...questionTemplate,
    name: 'bestPractices.3',
    message: questionMessages.bestPractices[3],
  },
  {
    ...questionTemplate,
    name: 'documentation.0',
    message: questionMessages.documentation[0],
  },
  {
    ...questionTemplate,
    name: 'documentation.1',
    message: questionMessages.documentation[1],
  },
  {
    ...questionTemplate,
    name: 'documentation.2',
    message: questionMessages.documentation[2],
  },
  {
    ...questionTemplate,
    name: 'documentation.3',
    message: questionMessages.documentation[3],
  },
  {
    ...questionTemplate,
    name: 'documentation.4',
    message: questionMessages.documentation[4],
  },
]

const command = {
  name: 'evaluate',
  run: async (toolbox) => {
    let { print, prompt } = toolbox

    print.info('Bem vindo a CLI de avaliação do teste do time Web da Stone')

    // ask a series of questions
    let answer = await prompt.ask(questions)

    answer = JSON.parse(JSON.stringify(answer))
  },
}

module.exports = command
