export interface QuestionOption {
  value: string;
  label: string;
  weight: number;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export const questionsOdp: Question[] = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo financeiro neste momento?",
    options: [
      { value: "ganhar-mais-dinheiro", label: "Ganhar mais dinheiro", weight: 0 },
      { value: "guardar-mais-dinheiro", label: "Guardar mais dinheiro", weight: 0 },
      { value: "quitar-dividas", label: "Quitar dívidas", weight: 0 },
      { value: "comprar-uma-casa", label: "Comprar uma casa", weight: 0 },
      { value: "investir-melhor", label: "Investir melhor", weight: 0 },
      { value: "ter-dinheiro-sobrando-todo-mes", label: "Ter dinheiro sobrando todo mês", weight: 0 },
    ],
  },
  {
    id: 2,
    question: "Quando você pensa na sua vida financeira hoje, a sensação mais presente é:",
    options: [
      { value: "corro-o-mes-inteiro-mas-o-dinheiro-nunca-da", label: "Corro o mês inteiro, mas o dinheiro nunca dá", weight: 1 },
      { value: "ate-consigo-melhorar-mas-logo-algo-acontece-e-volto-para-tras", label: "Até consigo melhorar, mas logo algo acontece e volto para trás", weight: 2 },
      { value: "sempre-surge-uma-conta-ou-imprevisto-que-leva-o-que-sobrou", label: "Sempre surge uma conta ou imprevisto que leva o que sobrou", weight: 2 },
      { value: "nao-consigo-nem-planejar-porque-sempre-falta", label: "Não consigo nem planejar, porque sempre falta", weight: 1 },
    ],
  },
  {
    id: 3,
    question: "Com o dinheiro, você frequentemente:",
    options: [
      { value: "precisa-escolher-qual-conta-vai-deixar-de-pagar", label: "Precisa escolher qual conta vai deixar de pagar", weight: 1 },
      { value: "sabe-como-deveria-organizar-mas-nao-consegue-aplicar-na-pratica", label: "Sabe como deveria organizar, mas não consegue aplicar na prática", weight: 2 },
      { value: "se-sente-injustiçado-porque-trabalha-muito-e-nao-ve-resultado", label: "Se sente injustiçado, porque trabalha muito e não vê resultado", weight: 2 },
      { value: "gasta-tentando-aliviar-a-pressao-depois-se-arrepende", label: "Gasta tentando aliviar a pressão, depois se arrepende", weight: 1 },
      { value: "consegue-ate-guardar-mas-logo-acontece-algo-e-precisa-usar", label: "Consegue até guardar, mas logo acontece algo e precisa usar", weight: 2 },
    ],
  },
  {
    id: 4,
    question: "Como você se sente em relação à sua vida profissional hoje?",
    options: [
      { value: "muito-satisfeito-estou-onde-quero-estar", label: "Muito satisfeito(a) – estou onde quero estar", weight: 2 },
      { value: "satisfeito-mas-sei-que-posso-crescer-mais", label: "Satisfeito(a), mas sei que posso crescer mais)", weight: 2 },
      { value: "insatisfeito-preciso-de-mudancas-significativas", label: "Insatisfeito(a) – preciso de mudanças significativas", weight: 2 },
      { value: "perdido-nao-sei-que-rumo-tomar", label: "Perdido(a) – não sei que rumo tomar", weight: 1 },
      { value: "frustrado-me-dedico-mas-nao-sou-reconhecido-como-mereco", label: "Frustrado(a) – me dedico, mas não sou reconhecido(a) como mereço", weight: 1 },
    ],
  },
  {
    id: 5,
    question: "Qual seu sexo?",
    options: [
      { value: "masculino", label: "Sou do sexo Masculino", weight: 0 },
      { value: "feminino", label: "Sou do sexo Feminino", weight: 0 },
    ],
  },
  {
    id: 6,
    question: "Sobre o seu crescimento pessoal, você sente que:",
    options: [
      { value: "ja-tentou-de-tudo-mas-nada-trouxe-realmente-o-resultado-que-voce-esperava", label: "Já tentou de tudo, mas nada trouxe realmente o resultado que você esperava", weight: 1 },
      { value: "precisa-sempre-lutar-muito-para-conquistar-algum-avanco-significativo", label: "Precisa sempre lutar muito para conquistar algum avanço significativo", weight: 2 },
      { value: "tem-bastante-conhecimento-mas-nao-consegue-aplicar-no-dia-a-dia", label: "Tem bastante conhecimento, mas não consegue aplicar no dia a dia", weight: 2 },
      { value: "da-alguns-passos-para-frente-mas-logo-volta-ao-ponto-de-partida", label: "Dá alguns passos para frente, mas logo volta ao ponto de partida", weight: 1 },
      { value: "tem-capacidade-e-disposicao-mas-ainda-nao-tem-o-resultado-que-gostaria", label: "Tem capacidade e disposição, mas ainda não tem o resultado que gostaria", weight: 2 },
    ],
  },
  {
    id: 7,
    question: "Em qual faixa etária você se encaixa?",
    options: [
      { value: "18-24", label: "18-24", weight: 0 },
      { value: "25-35", label: "25-35", weight: 0 },
      { value: "36-45", label: "36-45", weight: 0 },
      { value: "46-55", label: "46-55", weight: 0 },
      { value: "56+", label: "56 ou mais", weight: 0 },
    ],
  },
  {
    id: 8,
    question: "Quando algo não sai como você planejou financeiramente (uma conta inesperada, um gasto maior do que devia):",
    options: [
      { value: "sua-primeira-reacao-e-se-culpar-por-nao-ter-previsto", label: "Sua primeira reação é se culpar por não ter previsto", weight: 1 },
      { value: "voce-sente-como-se-nunca-tivesse-um-alivio-sempre-acontece-alguma-coisa", label: "Você sente como se nunca tivesse um alívio, sempre acontece alguma coisa", weight: 1 },
      { value: "acha-que-a-culpa-e-de-outra-pessoa-ou-situacao-que-te-atrapalhou", label: "Acha que a culpa é de outra pessoa ou situação que te atrapalhou", weight: 1 },
      { value: "tenta-reorganizar-mas-logo-percebe-que-nao-vai-dar-conta", label: "Tenta reorganizar, mas logo percebe que não vai dar conta", weight: 2 },
      { value: "aceita-a-situacao-mas-desanima-de-continuar-tentando-planejar", label: "Aceita a situação, mas desanima de continuar tentando planejar", weight: 1 },
    ],
  },
  {
    id: 9,
    question: "Qual das opções representa a sua renda mensal hoje?",
    options: [
      { value: "ate1000", label: "Até R$ 1.000,00", weight: 0 },
      { value: "1101a2500", label: "De R$ 1.101,00 a R$ 2.500,00", weight: 0 },
      { value: "2501a4000", label: "De R$ 2.501,00 a R$ 4.000,00", weight: 0 },
      { value: "4001a10000", label: "De R$ 4.001,00 a R$ 10.000,00", weight: 0 },
      { value: "acima10000", label: "Acima de R$ 10.000,00", weight: 0 },
    ],
  },
  {
    id: 10,
    question: "Quando você observa pessoas financeiramente bem-sucedidas, você pensa:",
    options: [
      { value: "elas-tiveram-sorte-ou-oportunidades-que-eu-nao-tive", label: "Elas tiveram sorte ou oportunidades que eu não tive", weight: 1 },
      { value: "elas-provavelmente-trabalharam-muito-mais-do-que-eu-conseguo-trabalhar", label: "Elas provavelmente trabalharam muito mais do que eu consigo trabalhar", weight: 2 },
      { value: "elas-devem-ter-começado-em-uma-condicao-melhor-que-a-minha", label: "Elas devem ter começado em uma condição melhor que a minha", weight: 2 },
      { value: "eu-sei-o-que-deveria-fazer-mas-nao-consigo-colocar-em-pratica", label: "Eu sei o que deveria fazer, mas não consigo colocar em prática", weight: 2 },
      { value: "essas-pessoas-devem-saber-algo-que-eu-nao-sei-deve-ter-algum-pulo-do-gato", label: "Essas pessoas devem saber algo que eu não sei, deve ter algum “pulo do gato”", weight: 1 },
    ],
  },
  {
    id: 11,
    question: "Qual seu estado civil?",
    options: [
      { value: "solteiro", label: "Solteira(o)", weight: 0 },
      { value: "casado", label: "Casada(o)", weight: 0 },
      { value: "viúvo", label: "Viúva(o)", weight: 0 },
      { value: "separado", label: "Separada(o)", weight: 0 },
    ],
  },
  {
    id: 12,
    question: "Em situações de aperto financeiro, você tende a:",
    options: [
      { value: "partir-para-mais-trabalho-assumindo-horas-extras-ou-bicos-para-compensar", label: "Partir para mais trabalho, assumindo horas extras ou bicos para compensar", weight: 2 },
      { value: "evitar-olhar-para-os-numeros-porque-nao-vale-a-pena-se-estressar", label: "Evitar olhar para os números porque “não vale a pena se estressar”", weight: 1 },
      { value: "se-recolher-sentindo-vergonha-ou-medo-de-pedir-ajuda", label: "Se recolher, sentindo vergonha ou medo de pedir ajuda", weight: 1 },
      { value: "pedir-emprestimo-ou-usa-cartao-cheque-especial-para-tapar-o-buraco", label: "Pedir empréstimo ou usa cartão/cheque especial para tapar o buraco", weight: 1 },
      { value: "cortar-algumas-coisas-importantes-para-tentar-sobreviver-ao-mes", label: "Cortar algumas coisas importantes para tentar sobreviver ao mês", weight: 1 },
    ],
  },
  {
    id: 13,
    question: "Você tem filhos?",
    options: [
      { value: "sim", label: "Sim", weight: 0 },
      { value: "nao", label: "Não", weight: 0 },
    ],
  },
  {
    id: 14,
    question: "Quando você quer fazer mudanças na sua vida financeira:",
    options: [
      { value: "aguarda-as-condicoes-ideais-se-alinharem-antes-de-agir", label: "Aguarda as condições ideais se alinharem antes de agir", weight: 1 },
      { value: "prefere-ter-controle-total-sobre-cada-detalhe-do-processo", label: "Prefere ter controle total sobre cada detalhe do processo", weight: 2 },
      { value: "planeja-bastante-mas-tem-dificuldade-em-colocar-em-pratica", label: "Planeja bastante, mas tem dificuldade em colocar em prática", weight: 2 },
      { value: "comeca-animado-mas-logo-perde-o-ritmo-e-volta-ao-padrao-antigo", label: "Começa animado, mas logo perde o ritmo e volta ao padrão antigo", weight: 1 },
      { value: "sente-que-precisa-do-apoio-de-alguem-ou-algo-externo-para-conseguir-avançar", label: "Sente que precisa do apoio de alguém ou algo externo para conseguir avançar", weight: 1 },
    ],
  },
  {
    id: 15,
    question: " Qual o seu nível de escolaridade?",
    options: [
      { value: "ensino-fundamental-1-1-ao-5-ano", label: "Ensino Fundamental 1 (1º ao 5º ano)", weight: 0 },
      { value: "ensino-fundamental-2-6-ao-9-grau", label: "Ensino Fundamental 2 (6º ao 9º ano)", weight: 0 },
      { value: "ensino-medio-1-ao-3-grau", label: "Ensino Médio (1º ao 3º)", weight: 0 },
      { value: "ensino-superior-incompleto", label: "Ensino Superior Incompleto", weight: 0 },
      { value: "ensino-superior-graduacao-faculdade", label: "Ensino Superior (Graduação/Faculdade)", weight: 0 },
      { value: "pos-graduacao", label: "Pós-Graduação", weight: 0 },
      { value: "mestrado", label: "Mestrado", weight: 0 },
      { value: "doutorado", label: "Doutorado", weight: 0 },
    ],
  },
  {
    id: 16,
    question: "Quando sua situação financeira te incomoda profundamente, você tende a:",
    options: [
      { value: "buscar-apoio-pedindo-conselhos-ou-ajuda-de-pessoas-proximas", label: "Buscar apoio, pedindo conselhos ou ajuda de pessoas próximas", weight: 2 },
      { value: "focar-em-culpar-uma-situacao-externa-crise-politica-mercado-familia", label: "Focar em culpar uma situação externa (crise, política, mercado, família)", weight: 1 },
      { value: "refletir-muito-sobre-o-problema-mas-sem-agir-de-fato", label: "Refletir muito sobre o problema, mas sem agir de fato", weight: 1 },
      { value: "cortar-gastos-essenciais-para-tentar-aliviar-a-pressao", label: "Cortar gastos essenciais para tentar aliviar a pressão", weight: 1 },
      { value: "se-esforcar-ainda-mais-acreditando-que-trabalhar-mais-vai-resolver", label: "Se esforçar ainda mais, acreditando que trabalhar mais vai resolver", weight: 2 },
    ],
  },
  {
    id: 17,
    question: "Você trabalha como (marque o trabalho que te gera mais renda):",
    options: [
      { value: "funcionario-clt", label: "Funcionário CLT", weight: 0 },
      { value: "funcionario-pj", label: "Funcionário PJ", weight: 0 },
      { value: "aposentado", label: "Aposentado", weight: 0 },
      { value: "autonomo", label: "Autônomo", weight: 0 },
      { value: "profissional-liberal", label: "Profissional Liberal", weight: 0 },
      { value: "empresario", label: "Empresário", weight: 0 },
      { value: "desempregado", label: "Estou desempregado no momento", weight: 0 },
    ],
  },
  {
    id: 18,
    question: "Sua relação com responsabilidade financeira é:",
    options: [
      { value: "eu-tento-mas-sempre-aparece-alguma-circunstancia-que-atrapalha", label: "Eu tento, mas sempre aparece alguma circunstância que atrapalha", weight: 1 },
      { value: "eu-assumo-mas-acho-que-outras-pessoas-tambem-deveriam-colaborar-mais", label: "Eu assumo, mas acho que outras pessoas também deveriam colaborar mais", weight: 1 },
      { value: "eu-sei-que-e-minha-responsabilidade-mas-e-complicado-lidar-sozinho-a", label: "Eu sei que é minha responsabilidade, mas é complicado lidar sozinho(a)", weight: 2 },
      { value: "eu-prefiro-nao-olhar-muito-para-evitar-me-estressar-e-paralisar", label: "Eu prefiro não olhar muito para evitar me estressar e paralisar", weight: 1 },
      { value: "eu-me-esforco-bastante-mas-nao-vejo-os-resultados-que-espero", label: "Eu me esforço bastante, mas não vejo os resultados que espero", weight: 2 },
    ],
  },
  {
    id: 19,
    question: "Quando você percebe padrões se repetindo na sua vida financeira:",
    options: [
      { value: "se-mobiliza-para-tentar-quebrar-o-padrao-rapidamente", label: "Se mobiliza para tentar quebrar o padrão rapidamente", weight: 2 },
      { value: "sente-que-e-algo-maior-que-o-seu-controle", label: "Sente que é algo maior que o seu controle", weight: 1 },
      { value: "compreende-o-padrao-mas-demora-para-agir-sobre-ele", label: "Compreende o padrão, mas demora para agir sobre ele", weight: 2 },
      { value: "ate-muda-por-um-tempo-mas-logo-volta-ao-mesmo-ponto", label: "Até muda por um tempo, mas logo volta ao mesmo ponto", weight: 2 },
      { value: "se-esforca-muito-para-nao-repetir-mas-o-resultado-nao-aparece", label: "Se esforça muito para não repetir, mas o resultado não aparece", weight: 2 },
    ],
  },
  {
    id: 20,
    question: "Sobre suas metas e sonhos financeiros, você sente que:",
    options: [
      { value: "o-mundo-parece-conspirar-contra-as-suas-realizacoes", label: "O mundo parece conspirar contra as suas realizações", weight: 1 },
      { value: "nem-tenho-metas-ou-sonhos-financeiros-so-foco-em-pagar-os-boletos-do-mes", label: "Nem tenho metas ou sonhos financeiros, só foco em pagar os boletos do mês", weight: 1 },
      { value: "tem-clareza-do-que-quer-mas-falta-movimento-para-agir", label: "Tem clareza do que quer, mas falta movimento para agir", weight: 2 },
      { value: "sempre-que-chega-perto-algo-acontece-e-te-puxa-para-tras", label: "Sempre que chega perto, algo acontece e te puxa para trás", weight: 2 },
      { value: "ja-conquistou-algumas-coisas-mas-nao-consegue-sustentar-por-muito-tempo", label: "Já conquistou algumas coisas, mas não consegue sustentar por muito tempo", weight: 2 },
    ],
  },
  {
    id: 21,
    question: ". Você já buscou algum tipo de ajuda ou suporte (terapia, coaching, grupos de apoio) para lidar com seus desafios emocionais?",
    options: [
      { value: "sim", label: "Sim", weight: 0 },
      { value: "nao", label: "Não", weight: 0 },
    ],
  },
  {
    id: 22,
    question: "Se sim, o método utilizado foi eficaz?",
    options: [
      { value: "sim", label: "Sim", weight: 0 },
      { value: "parcialmente", label: "Parcialmente", weight: 0 },
      { value: "nao", label: "Não", weight: 0 },
      { value: "nunca-fiz", label: "Nunca fiz", weight: 0 },
    ],
  },
  {
    id: 23,
    question: "Sua frase interna (aquela que fica repetindo na sua cabeça) quando o assunto é dinheiro:",
    options: [
      { value: "por-que-isso-sempre-acontece-comigo", label: "“Por que isso sempre acontece comigo?”", weight: 1 },
      { value: "eu-sei-o-que-deveria-fazer-mas-nao-conseguo-algo-me-trava", label: "“Eu sei o que deveria fazer, mas não consigo, algo me trava.”", weight: 2 },
      { value: "nao-importa-o-quanto-eu-lute-nunca-e-suficiente", label: "“Não importa o quanto eu lute, nunca é suficiente.” ", weight: 1 },
      { value: "assim-que-eu-resolver-tal-situacao-minha-vida-financeira-melhora", label: "“Assim que eu resolver “tal situação”, minha vida financeira melhora.” ", weight: 2 },
      { value: "um-dia-eu-vou-conseguir-provar-que-mereco", label: "“Um dia eu vou conseguir provar que mereço.”", weight: 2 },
    ],
  },
  {
    id: 24,
    question: "Em qual área da sua vida financeira você mais deseja uma mudança hoje?",
    options: [
      { value: "ter-mais-estabilidade-no-final-do-mes-parar-de-correr-atras-do-basico)", label: "Ter mais estabilidade no final do mês (parar de correr atrás do básico)", weight: 1 },
      { value: "quitar-dividas-que-parecem-nunca-acabar", label: "Quitar dívidas que parecem nunca acabar", weight: 1 },
      { value: "conseguir-guardar-dinheiro", label: "Conseguir guardar dinheiro", weight: 2 },
      { value: "fazer-sobrar-para-realizar-algo-maior-casa-carro-viagens", label: "Fazer sobrar para realizar algo maior (casa, carro, viagens)", weight: 2 },
      { value: "sustentar-as-conquistas-sem-retroceder", label: "Sustentar as conquistas sem retroceder", weight: 2 },
    ],
  },
];