"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useParams, useSearchParams } from "next/navigation";
import TagManager from "react-gtm-module";
import { Spectral } from "next/font/google";
import { questionsOdp } from "@/lib/questions-odp";
import { CustomInputRadio } from "@/app/components/custom-input-radio";
import { Progress } from "@/components/ui/progress";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const spectral = Spectral({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spectral",
  weight: ["400", "500", "600", "700"],
});

// Schema de validação para o formulário
const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
});

type FormData = z.infer<typeof formSchema>;

export default function QuestODP({ params }: { params: { form: string } }) {
  const searchParams = useSearchParams();
  const _params = useParams();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [weights, setWeights] = useState<Record<number, number>>({});
  const [completed, setCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [temperatura, setTemperatura] = useState<string | null>(null);
  const [tipo, setTipo] = useState<string | null>(null);
  const [versao, setVersao] = useState<string | null>(null);
  const [domain, setDomain] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Configuração do React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isFormSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const getLabelFromAnswer = (number: number) => {
    const answerValue = answers[number];
    if (!answerValue) return "";
    const question1 = questionsOdp.find(q => q.id === number);
    if (!question1) return "";
    const option = question1.options.find(opt => opt.value === answerValue);
    return option ? option.label : "";
  };

  const mapTagSendFlow = useCallback(
    () => ({
      f: "https://sndflw.com/i/ofrrf-out25",
      org: "https://sndflw.com/i/ofrro-out25",
      m: "https://sndflw.com/i/ofrrm-out25",
      q: "https://sndflw.com/i/ofrrq-out25",
    }),
    [_params.slug]
  )();

  const getWhatsappUrl = () => {
    const validKeys = ["f", "m", "q", "org"] as const;
    const key = (temperatura || "").toLowerCase();
    const resolvedKey = (validKeys as readonly string[]).includes(key)
      ? key
      : "f";
    return (
      mapTagSendFlow[resolvedKey as keyof typeof mapTagSendFlow] ||
      mapTagSendFlow["f"]
    );
  };

  const launch = "[ODP] 2025";

  // Capturar o domínio da página
  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname;
      console.log("Current domain:", currentDomain);
      setDomain(currentDomain);
    }
  }, []);

  // Verificar se estamos no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (_params && _params.temperature) {
      console.log("temperatura param quest", _params.temperature);

      let tipoValue = _params.headline;
      let versaoValue = _params.version;
      let temperaturaValue = _params.temperature;

      console.log("Tipo:", tipoValue);
      console.log("Versão:", versaoValue);
      console.log("Temperatura:", temperaturaValue);

      setTipo(tipoValue as string);
      setVersao(versaoValue as string);
      setTemperatura(temperaturaValue as string);
    }
  }, [_params]);

  // Capturar email e telefone da URL
  useEffect(() => {
    if (searchParams) {
      const emailParam = searchParams.get("email");
      const phoneParam = searchParams.get("phone");

      if (emailParam) {
        setEmail(emailParam);
      }

      if (phoneParam) {
        setWhatsapp(phoneParam);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    // Atualiza o valor do progresso quando a pergunta atual muda
    const newProgress = ((currentQuestion + 1) / questionsOdp.length) * 100;
    setProgressValue(newProgress);
  }, [currentQuestion]);

  // useEffect(() => {
  //   if (!completed || hasSent) {
  //     return;
  //   }
  //   if (completed) {
  //     setIsLoading(true);

  //     const emailParam = searchParams.get("email");
  //     const phoneParam = searchParams.get("phone");

  //     // Calculate the faixa based on totalScore
  //     let faixa;
  //     if (totalScore >= 200) {
  //       faixa = "Faixa A";
  //     } else if (totalScore >= 182) {
  //       faixa = "Faixa B";
  //     } else if (totalScore >= 151) {
  //       faixa = "Faixa C";
  //     } else {
  //       faixa = "Faixa D";
  //     }

  //     if (answers[3] === "masculino") faixa = "Faixa D";

  //     // Prepare detailed answers with questions and selected options
  //     const detailedAnswers: Record<string, string> = {};
  //     Object.entries(answers).forEach(([questionId, answerValue]) => {
  //       const questionObj = questionsOdp.find(
  //         (q) => q.id === parseInt(questionId)
  //       );
  //       const selectedOption = questionObj?.options.find(
  //         (opt) => opt.value === answerValue
  //       );

  //       if (questionObj) {
  //         detailedAnswers[questionObj.question] =
  //           selectedOption?.label || answerValue;
  //       }
  //     });

  //     // Prepare the data to be sent to GTM
  //     const gtmData = {
  //       email: emailParam,
  //       phone: phoneParam,
  //       answers: answers,
  //       totalScore: Math.round(totalScore),
  //       faixa: faixa,
  //       tipo: tipo,
  //       version: versao,
  //       temperature: temperatura,
  //     };

  //     const payload = {
  //       ...gtmData,
  //       detailedAnswers: detailedAnswers,
  //       domain: domain,
  //       launch: launch,
  //       utm_source: searchParams.get("utm_source") || "",
  //       utm_medium: searchParams.get("utm_medium") || "",
  //       utm_campaign: searchParams.get("utm_campaign") || "",
  //       utm_content: searchParams.get("utm_content") || "",
  //       utm_term: searchParams.get("utm_term") || "",
  //       path: window.location.pathname,
  //     };

  //     // Still send to GTM as before
  //     TagManager.dataLayer?.({
  //       dataLayer: {
  //         event: "leadscore",
  //         ...gtmData,
  //       },
  //     });

  //     // Send data to our proxy API
  //     fetch("/api/quiz-proxy", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //         setHasSent(true);
  //         window.location.replace(getWhatsappUrl());
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //         setHasSent(true);
  //         window.location.replace(getWhatsappUrl());
  //       });
  //   }
  // }, [completed, hasSent]); // envia apenas uma vez ao completar

  const handleOldSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const leads = JSON.parse(localStorage.getItem("leads") || "[]");
    leads.push({ email, whatsapp, date: new Date().toISOString() });
    localStorage.setItem("leads", JSON.stringify(leads));

    setSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSuccess(false);
      setEmail("");
      setWhatsapp("");
    }, 3000);
  };

  const handleAnswer = (value: string) => {
    const question = questionsOdp[currentQuestion];
    const selectedOption = question.options.find(
      (option) => option.value === value
    );

    if (selectedOption) {
      const newAnswers = { ...answers, [question.id]: value };
      const newWeights = { ...weights, [question.id]: selectedOption.weight };

      setAnswers(newAnswers);
      setWeights(newWeights);
    }
  };

  const handleNext = () => {
    const novoScore = Object.values(weights).reduce(
      (sum, weight) => sum + weight,
      0
    );
    setTotalScore(novoScore);

    if (currentQuestion < questionsOdp.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  // Função para lidar com o envio do formulário
  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Verifica o totalScore para determinar a URL de redirecionamento
      const redirectUrl = totalScore <= 21 
        ? "https://odp.aliancadivergente.com.br/odp-v1-b"
        : "https://odp.aliancadivergente.com.br/odp-v1-m";
      
      window.location.replace(redirectUrl);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questionsOdp.length) * 100;

  const currentQuestionData = questionsOdp[currentQuestion];
  const selectedValue = answers[currentQuestionData.id] || "";
  const isLastQuestion = currentQuestion === questionsOdp.length - 1;

  // Se não estamos no cliente, não renderize nada
  if (!isClient) {
    return null;
  }

  return (
    <div>
      <section
        className={`relative flex items-center justify-center overflow-hidden h-full `}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/odp/v1/herosection-2.png')] bg-cover bg-center opacity-100" />
          <div className={`absolute top-0 w-full bg-no-repeat block`}>
            <Image
              src="/images/odp/v1/bg2.png"
              alt="Background top left"
              width={1854}
              height={202}
              className="object-contain"
              style={{
                transformOrigin: "center",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={`absolute top-0 right-0 bg-no-repeat block`}>
            <Image
              src="/images/odp/v1/bg1.png"
              alt="Background top right"
              width={870}
              height={169}
              className="object-contain"
            />
          </div>
        </div>

        {/* Loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-t-teal-600 border-r-transparent border-b-teal-600 border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p
                className="text-white text-lg font-medium"
                style={{ fontFamily: '"Roboto", Sans-serif' }}
              >
                Processando suas respostas...
              </p>
              <p
                className="text-gray-300 text-sm mt-2"
                style={{ fontFamily: '"Roboto", Sans-serif' }}
              >
                Aguarde um momento, você será redirecionado em breve.
              </p>
            </div>
          </div>
        )}

        {/* Background com overlay */}
        <div className="container mx-auto relative h-full px-4">
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="w-full max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8 flex justify-center">
                <Image
                  src="/images/odp/v1/logo-alianca.png"
                  alt="Logotipo O Fim das Relações Ruins"
                  width={348}
                  height={169}
                  priority
                  className="object-contain select-none pointer-events-none mb-8"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>

              {completed && (
                <>
                  <div className="text-[#F4F0F1] sm:text-5xl text-2xl uppercase font-bold mb-4 md:mb-5 text-center">
                    Quase tudo pronto!
                  </div>
                  <div className="mb-4 md:mb-5 flex flex-col items-center justify-center w-full">
                    <Progress value={75} className="h-2 bg-gray-700" />
                    <p className="text-right text-sm text-white mt-1.5">75%</p>
                  </div>
                  <div id="result-odp" className="relative w-full max-w-2xl mx-auto mb-10 rounded-xl p-[2px] bg-gradient-to-b from-[#C0964B] to-[#5A4623] z-10 shadow-xl shadow-[#00000080]">
                    <div
                      className="absolute top-[2px] w-full h-full z-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 0%, rgba(22,56,67,0.85) 0%, rgba(22,56,67,0.6) 40%, rgba(22,56,67,0.2) 80%, rgba(22,56,67,0) 100%)",
                        backgroundBlendMode: "normal",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top center",
                        zIndex: 0,
                      }}
                    />
                    <div className="rounded-xl bg-[#02161C] p-4 md:p-7 z-40">
                      {!showForm ? (
                        <>
                          <h3
                            className="text-white text-base font-medium mb-4 md:mb-5 md:text-left text-center z-50 relative"
                            style={{
                              color: "#fff",
                              fontFamily: '"Roboto", Sans-serif',
                            }}
                          >
                            Você já avançou 75% no diagnóstico de <strong className="text-[#C0964B]">Permissão
                            Financeira.</strong> Agora falta pouco para descobrir o que
                            realmente está travando seus resultados.
                          </h3>

                          <h3
                            className="text-white text-base font-medium mb-4 md:mb-5 md:text-left text-center z-50 relative"
                            style={{
                              color: "#fff",
                              fontFamily: '"Roboto", Sans-serif',
                            }}
                          >
                            Em breve você vai descobrir o que está te impedindo de: <strong className="text-[#C0964B]">{getLabelFromAnswer(1)}</strong>
                          </h3>

                          <ul className="list-disc pl-4 text-white text-base mb-8 z-50 relative text-left font-light" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                            <li>Se o que falta para você é <strong className="font-bold">Capacidade</strong>, <strong className="font-bold">Disposição</strong> ou <strong className="font-bold">Permissão</strong>.</li>
                            <li>O que realmente está te <strong className="font-bold">travando ou puxando para trás.</strong></li>
                            <li>Se você possui alguma <strong className="font-bold">dependência emocional</strong> que está influenciando os seus resultados financeiros.</li>
                          </ul>

                          <div
                            className={`w-full z-50 rounded-full p-[1px] bg-gradient-to-b from-[#0FFF52]/0 to-[#0FFFB7] relative`}
                          >
                            <button
                              onClick={() => setShowForm(true)}
                              disabled={!selectedValue}
                              className="text-[#F4F0F1] cursor-pointer text-base font-semibold py-4 px-8 rounded-full transition-all duration-200 bg-gradient-to-b from-[#12E998] to-[#06432C] hover:from-[#0bbf74] hover:to-[#04311f] uppercase tracking-wider z-50 w-full [@media(max-width:400px)]:text-[12px]"
                            >
                              QUERO RECEBER MEU DIAGNÓSTICO!
                            </button>
                          </div>
                        </>
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 z-50 relative">
                          <h3
                            className="text-white text-lg font-medium mb-6 text-center z-50 relative"
                            style={{
                              color: "#fff",
                              fontFamily: '"Roboto", Sans-serif',
                            }}
                          >
                            Preencha seus dados para receber seu diagnóstico
                          </h3>

                          <div className="space-y-4 text-left">
                            <div>
                              <label
                                htmlFor="nome"
                                className="block text-white text-sm font-medium mb-2"
                                style={{ fontFamily: '"Roboto", Sans-serif' }}
                              >
                                Nome *
                              </label>
                              <input
                                {...register("nome")}
                                type="text"
                                id="nome"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1a1f] border border-[#C0964B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0964B] focus:border-transparent"
                                placeholder="Digite seu nome completo"
                              />
                              {errors.nome && (
                                <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>
                              )}
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-white text-sm font-medium mb-2"
                                style={{ fontFamily: '"Roboto", Sans-serif' }}
                              >
                                E-mail *
                              </label>
                              <input
                                {...register("email")}
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1a1f] border border-[#C0964B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0964B] focus:border-transparent"
                                placeholder="Digite seu e-mail"
                              />
                              {errors.email && (
                                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                              )}
                            </div>

                            <div>
                              <label
                                htmlFor="telefone"
                                className="block text-white text-sm font-medium mb-2"
                                style={{ fontFamily: '"Roboto", Sans-serif' }}
                              >
                                Telefone *
                              </label>
                              <input
                                {...register("telefone")}
                                type="tel"
                                id="telefone"
                                className="w-full px-4 py-3 rounded-lg bg-[#0a1a1f] border border-[#C0964B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0964B] focus:border-transparent"
                                placeholder="Digite seu telefone"
                              />
                              {errors.telefone && (
                                <p className="text-red-400 text-sm mt-1">{errors.telefone.message}</p>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setShowForm(false)}
                              className="flex-1 text-[#F4F0F1] cursor-pointer text-base font-semibold py-4 px-8 rounded-full transition-all duration-200 bg-gradient-to-b from-[#02161C] to-[#02161C] hover:from-[#0bbf74] hover:to-[#04311f] uppercase tracking-wider z-50"
                            >
                              VOLTAR
                            </button>
                            <button
                              type="submit"
                              disabled={isFormSubmitting}
                              className="flex-1 text-[#F4F0F1] cursor-pointer text-base font-semibold py-4 px-8 rounded-full transition-all duration-200 bg-gradient-to-b from-[#12E998] to-[#06432C] hover:from-[#0bbf74] hover:to-[#04311f] uppercase tracking-wider z-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isFormSubmitting ? "ENVIANDO..." : "ENVIAR"}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </>
              )}

              {!completed && (
                <div className="relative w-full max-w-2xl mx-auto mb-10 rounded-xl p-[2px] bg-gradient-to-b from-[#C0964B] to-[#5A4623] z-10 shadow-xl shadow-[#00000080]">
                  <div
                    className="absolute top-[2px] w-full h-full z-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(22,56,67,0.85) 0%, rgba(22,56,67,0.6) 40%, rgba(22,56,67,0.2) 80%, rgba(22,56,67,0) 100%)",
                      backgroundBlendMode: "normal",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top center",
                      zIndex: 0,
                    }}
                  />
                  <div className="rounded-xl bg-[#02161C] p-4 md:p-7 z-40">
                    <h3
                      className="text-white text-base md:text-lg font-medium mb-4 md:mb-5 md:text-left text-center z-50 relative"
                      style={{
                        color: "#fff",
                        fontFamily: '"Roboto", Sans-serif',
                      }}
                    >
                      {currentQuestionData.question}
                    </h3>

                    <CustomInputRadio
                      className="z-50 relative"
                      style={{ fontFamily: '"Roboto", Sans-serif' }}
                      options={currentQuestionData.options}
                      value={selectedValue}
                      onChange={handleAnswer}
                    />

                    <div className="grid grid-cols-2 gap-3 md:gap-5 mt-5 md:mt-7">
                      {currentQuestion > 0 && (
                        <div
                          className={`w-full z-20 rounded-full p-[1px] bg-gradient-to-b from-[#0bbf74]/10 to-[#0bbf74]/10 ${
                            currentQuestion === 0 ? "col-span-2" : ""
                          }`}
                        >
                          <button
                            onClick={handleBack}
                            className="text-[#F4F0F1] cursor-pointer text-base font-semibold py-4 px-8 rounded-full transition-all duration-200 bg-gradient-to-b from-[#02161C] to-[#02161C] hover:from-[#0bbf74] hover:to-[#04311f] uppercase tracking-wider z-20 w-full [@media(max-width:400px)]:text-[12px]"
                          >
                            VOLTAR
                          </button>
                        </div>
                      )}
                      {currentQuestion === 0 && <div></div>}
                      <div
                        className={`w-full z-20 rounded-full p-[1px] bg-gradient-to-b from-[#0FFF52]/0 to-[#0FFFB7] ${
                          currentQuestion === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <button
                          onClick={handleNext}
                          disabled={!selectedValue}
                          className="text-[#F4F0F1] cursor-pointer text-base font-semibold py-4 px-8 rounded-full transition-all duration-200 bg-gradient-to-b from-[#12E998] to-[#06432C] hover:from-[#0bbf74] hover:to-[#04311f] uppercase tracking-wider z-20 w-full [@media(max-width:400px)]:text-[12px]"
                        >
                          {currentQuestion === 0
                            ? "começar diagnóstico"
                            : isLastQuestion
                            ? "ENVIAR"
                            : "PRÓXIMA"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Rodapé com copyright */}
      <div className="relative bg-[#104448] w-full text-white">
        <div className="container flex flex-col items-center mx-auto py-14 px-4 gap-4">
          <Image
            src="/images/odp/vector.png"
            alt="Aliança Divergente"
            width={57}
            height={57}
            className="object-contain"
          />
          <div className="lg:text-right text-center text-[10px] uppercase">
            © 2025 Aliança Divergente. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  );
}
