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

export const questions: Question[] = [
  {
    id: 1,
    question: "Em qual faixa etária você se encaixa?",
    options: [
      { value: "18-24", label: "18-24", weight: 10.6 },
      { value: "25-35", label: "25-35", weight: 18.68 },
      { value: "36-45", label: "36-45", weight: 24.07 },
      { value: "46-55", label: "46-55", weight: 26.52 },
      { value: "56+", label: "56 ou mais", weight: 16.48 },
    ],
  },
  {
    id: 2,
    question: "Qual o seu nível de escolaridade?",
    options: [
      { value: "fundamental1", label: "Ensino Fundamental 1 (1º ao 5º ano)", weight: 16.45 },
      { value: "fundamental2", label: "Ensino Fundamental 2 (6º ao 9º ano)", weight: 22.88 },
      { value: "medio", label: "Ensino Médio (1º ao 3º)", weight: 15.37 },
      { value: "superior-incompleto", label: "Ensino Superior Incompleto", weight: 12.01 },
      { value: "superior", label: "Ensino Superior (Graduação/Faculdade)", weight: 21.98 },
      { value: "pos", label: "Pós-Graduação", weight: 32.47 },
      { value: "mestrado", label: "Mestrado", weight: 54.13 },
      { value: "doutorado", label: "Doutorado", weight: 24.4 },
    ],
  },
  {
    id: 3,
    question: "Qual seu sexo?",
    options: [
      { value: "feminino", label: "Sou do sexo Feminino", weight: 0 },
      { value: "masculino", label: "Sou do sexo Masculino", weight: 0 },
    ],
  },
  {
    id: 4,
    question: "Qual seu estado civil?",
    options: [
      { value: "solteiro", label: "Solteiro(o)", weight: 21.83 },
      { value: "casado", label: "Casado(o)", weight: 20.58 },
      { value: "separado", label: "Separado(o)", weight: 24.37 },
      { value: "viuvo", label: "Viúvo(o)", weight: 12.01 },
    ],
  },
  {
    id: 5,
    question: "Você tem filhos?",
    options: [
      { value: "sim", label: "Sim", weight: 19.97 },
      { value: "nao", label: "Não", weight: 28.29 },
    ],
  },
  {
    id: 6,
    question: "Qual das opções representa a sua renda mensal hoje?",
    options: [
      { value: "ate1000", label: "Até R$ 1.000,00", weight: 14.4 },
      { value: "1101a2500", label: "De R$ 1.101,00 a R$ 2.500,00", weight: 14.77 },
      { value: "2501a4000", label: "De R$ 2.501,00 a R$ 4.000,00", weight: 21.6 },
      { value: "4001a10000", label: "De R$ 4.001,00 a R$ 10.000,00", weight: 32.68 },
      { value: "acima10000", label: "Acima de R$ 10.000,00", weight: 52.59 },
    ],
  },
  {
    id: 7,
    question: "Você trabalha como (marque o trabalho que te gera mais renda):",
    options: [
      { value: "clt", label: "Funcionário CLT", weight: 16.72 },
      { value: "pj", label: "Funcionário PJ", weight: 38.08 },
      { value: "publico", label: "Funcionário Público", weight: 24.85 },
      { value: "autonomo", label: "Autônomo", weight: 22 },
      { value: "liberal", label: "Profissional Liberal", weight: 31.76 },
      { value: "empresario", label: "Empresário", weight: 34.4 },
      { value: "desempregado", label: "Estou desempregado no momento", weight: 20.3 },
    ],
  },
  {
    id: 8,
    question: "Com que frequência você se sente sozinho(a)/travado(a) e com baixos resultados?",
    options: [
      { value: "as vezes", label: "Às vezes", weight: 22.7 },
      { value: "frequentemente", label: "Frequentemente", weight: 23.59 },
      { value: "sempre", label: "Sempre", weight: 23.15 },
      { value: "raramente", label: "Raramente", weight: 18.25 },
      { value: "nunca", label: "Nunca", weight: 0 },
    ],
  },
  {
    id: 9,
    question: "Você já buscou algum tipo de ajuda ou suporte (terapia, coaching, grupos de apoio) para lidar com seus desafios emocionais?",
    options: [
      { value: "sim", label: "Sim", weight: 33.52 },
      { value: "nao", label: "Não", weight: 8.71 },
    ],
  },
  {
    id: 10,
    question: "Se sim, o método utilizado foi eficaz?",
    options: [
      { value: "sim", label: "Sim", weight: 0 },
      { value: "parcialmente", label: "Parcialmente", weight: 0 },
      { value: "nao", label: "Não", weight: 0 },
      { value: "Nunca fiz", label: "Nunca fiz", weight: 0 },
    ],
  },
  {
    id: 11,
    question: "Você já faz parte da Aliança Divergente?",
    options: [
      { value: "sim", label: "Sim", weight: 0 },
      { value: "nao", label: "Não", weight: 0 },
    ],
  },
];