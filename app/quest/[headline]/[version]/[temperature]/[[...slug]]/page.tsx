"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomRadio } from "@/app/components/custom-input";
import { useParams, useSearchParams } from "next/navigation";
import TagManager from "react-gtm-module";
import { Spectral } from "next/font/google";
import { questions } from "@/lib/questions";

const spectral = Spectral({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spectral",
  weight: ["400", "500", "600", "700"],
});

export default function Quiz({ params }: { params: { form: string } }) {
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
  const [weightsV2, setWeightsV2] = useState<Record<number, number>>({});
  const [totalScoreV2, setTotalScoreV2] = useState(0);
  const [hasSent, setHasSent] = useState(false);

	const mapTagSendFlow = useCallback(() => ({
		f: _params.slug?.includes("f25") ? "https://sndflw.com/i/oroset25ft" : "https://api.whatsapp.com/send?phone=5512936184013&text=Quero%20fazer%20meu%20diagn%C3%B3stico%20gratuito",
		org: "https://api.whatsapp.com/send?phone=5512936182704&text=Quero%20fazer%20meu%20diagn%C3%B3stico%20gratuito",
		m: "https://api.whatsapp.com/send?phone=5512936185472&text=Quero%20fazer%20meu%20diagn%C3%B3stico%20gratuito",
		q: "https://api.whatsapp.com/send?phone=5512936184799&text=Quero%20fazer%20meu%20diagn%C3%B3stico%20gratuito",
	}), [_params.slug])();

  const getWhatsappUrl = () => {
    const validKeys = ["f", "m", "q", "org"] as const;
    const key = (temperatura || "").toLowerCase();
    const resolvedKey = (validKeys as readonly string[]).includes(key)
      ? key
      : "f";
    return mapTagSendFlow[resolvedKey as keyof typeof mapTagSendFlow] || mapTagSendFlow["f"];
  };

  const launch = _params.slug?.includes("f25") ? "[ORO] [SET25] Frio25pc" : "[ORO] [SET25]";

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
    const newProgress = ((currentQuestion + 1) / questions.length) * 100;
    setProgressValue(newProgress);
  }, [currentQuestion]);

  useEffect(() => {
    if (!completed || hasSent) {
      return;
    }
    if (completed) {
      setIsLoading(true);

      const emailParam = searchParams.get("email");
      const phoneParam = searchParams.get("phone");

      // Calculate the faixa based on totalScore
      let faixa;
      if (totalScore >= 215) {
        faixa = "Faixa A";
      } else if (totalScore >= 194) {
        faixa = "Faixa B";
      } else if (totalScore >= 162) {
        faixa = "Faixa C";
      } else if (totalScore >= 148) {
        faixa = "Faixa D";
      } else {
        faixa = "Faixa E";
      }

      let faixaV2;
      if (totalScoreV2 >= 200) {
        faixaV2 = "Faixa A";
      } else if (totalScoreV2 >= 182) {
        faixaV2 = "Faixa B";
      } else if (totalScoreV2 >= 151) {
        faixaV2 = "Faixa C";
      } else {
        faixaV2 = "Faixa D";
      }

      // Prepare detailed answers with questions and selected options
      const detailedAnswers: Record<string, string> = {};
      Object.entries(answers).forEach(([questionId, answerValue]) => {
        const questionObj = questions.find(
          (q) => q.id === parseInt(questionId)
        );
        const selectedOption = questionObj?.options.find(
          (opt) => opt.value === answerValue
        );

        if (questionObj) {
          detailedAnswers[questionObj.question] =
            selectedOption?.label || answerValue;
        }
      });

      // Prepare the data to be sent to GTM
      const gtmData = {
        email: emailParam,
        phone: phoneParam,
        answers: answers,
        totalScore: Math.round(totalScore),
        totalScoreV2: Math.round(totalScoreV2),
        faixa: faixa,
        faixaV2: faixaV2,
        tipo: tipo,
        version: versao,
        temperature: temperatura,
      };

      const payload = {
        ...gtmData,
        detailedAnswers: detailedAnswers,
        domain: domain,
        launch: launch,
        utm_source: searchParams.get("utm_source") || "",
        utm_medium: searchParams.get("utm_medium") || "",
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_content: searchParams.get("utm_content") || "",
        utm_term: searchParams.get("utm_term") || "",
        path: window.location.pathname,
      };

      // Still send to GTM as before
      TagManager.dataLayer({
        dataLayer: {
          event: "leadscore",
          ...gtmData,
        },
      });

      // Send data to our proxy API
      fetch("/api/quiz-proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setHasSent(true);
          window.location.replace(getWhatsappUrl());
        })
        .catch((error) => {
          console.error("Error:", error);
          setHasSent(true);
          window.location.replace(getWhatsappUrl());
        });
    }
  }, [completed, hasSent]); // envia apenas uma vez ao completar

  const handleSubmit = async (e: React.FormEvent) => {
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
    const question = questions[currentQuestion];
    const selectedOption = question.options.find(
      (option) => option.value === value
    );

    if (selectedOption) {
      const newAnswers = { ...answers, [question.id]: value };
      const newWeights = { ...weights, [question.id]: selectedOption.weight };
      const newWeightsV2: Record<number, number> = {
        ...weightsV2,
        [question.id]: selectedOption.weightV2 || 0,
      };

      setAnswers(newAnswers);
      setWeights(newWeights);
      setWeightsV2(newWeightsV2);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calcular pontuação total
      setIsLoading(true);
      let score = Object.values(weights).reduce(
        (sum, weight) => sum + weight,
        0
      );
      let scoreV2 = Object.values(weightsV2).reduce(
        (sum, weight) => sum + weight,
        0
      );

      // // Adicionar pontuação extra baseada na URL
      // const publicoScore = window.location.href.indexOf('f-typ') !== -1 ||
      //     window.location.href.indexOf('m-typ') !== -1 ||
      //     window.location.href.indexOf('q-typ') !== -1 ? 10 : 0;

      // score += publicoScore;
      setTotalScore(score);
      setTotalScoreV2(scoreV2);
      setCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const currentQuestionData = questions[currentQuestion];
  const selectedValue = answers[currentQuestionData.id] || "";
  const isLastQuestion = currentQuestion === questions.length - 1;

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
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#0a3a4a] to-[#000000] opacity-100"></div>
          <Image
            src="https://resgatedosotimistas.com.br/wp-content/uploads/O-Resgate-dos-Otimistas-V7-TYP-Slice-1.webp"
            alt="Background Resgate dos Otimistas"
            fill
            priority
            className="object-cover object-center"
            style={{ opacity: 0.3 }}
          />
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
                  src="/images/logo-resgate-dos-otimistas.png"
                  alt="Logotipo Resgate dos otimistas"
                  width={
                    typeof window !== "undefined" && window.innerWidth > 768
                      ? 320
                      : 158
                  }
                  height={
                    typeof window !== "undefined" && window.innerWidth > 768
                      ? 196
                      : 70
                  }
                  priority
                  className="object-contain select-none pointer-events-none"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <h1
                className={`text-2xl md:text-5xl font-bold text-custom-primary-gold -mt-4 mb-1 md:mb-2 text-center ${spectral.className}`}
              >
                FALTA APENAS UM PASSO
              </h1>
              <h2
                className={`text-2xl md:text-5xl font-bold text-custom-primary-gold mb-4 md:mb-7 text-center ${spectral.className}`}
              >
                PARA GARANTIR SUA VAGA!
              </h2>

              <p
                className="text-white text-base md:text-lg mb-5 md:mb-7 text-center"
                style={{ color: "#fff", fontFamily: '"Roboto", Sans-serif' }}
              >
                Para concluir sua inscrição, responda:
              </p>

              <div className="w-full max-w-2xl mx-auto">
                <div className="bg-zinc-900 rounded-lg border border-white p-4 md:p-7 mb-6 md:mb-8 ">
                  <h3
                    className="text-white text-base md:text-lg font-medium mb-4 md:mb-5 md:text-left text-center"
                    style={{
                      color: "#fff",
                      fontFamily: '"Roboto", Sans-serif',
                    }}
                  >
                    {currentQuestionData.question}
                  </h3>

                  <CustomRadio
                    style={{ fontFamily: '"Roboto", Sans-serif' }}
                    options={currentQuestionData.options}
                    value={selectedValue}
                    onChange={handleAnswer}
                  />

                  <div className="grid grid-cols-2 gap-3 md:gap-5 mt-5 md:mt-7">
                    {currentQuestion > 0 && (
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        className="bg-transparent border-gray-700 text-white hover:bg-gray-800 py-3 md:py-5 text-sm md:text-base"
                        style={{ fontFamily: '"Roboto", Sans-serif' }}
                      >
                        VOLTAR
                      </Button>
                    )}
                    {currentQuestion === 0 && <div></div>}
                    <Button
                      onClick={handleNext}
                      disabled={!selectedValue}
                      className={`bg-teal-600 hover:bg-teal-700 text-white py-3 md:py-5 text-sm md:text-base ${
                        currentQuestion === 0 ? "col-span-2" : ""
                      }`}
                      style={{ fontFamily: '"Roboto", Sans-serif' }}
                    >
                      {isLastQuestion ? "ENVIAR" : "PRÓXIMA"}
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="mb-6 md:mb-8 text-center"
                style={{ color: "#fff" }}
              >
                <p
                  className="text-white text-xs md:text-sm mb-4 md:mb-5"
                  style={{ fontFamily: '"Roboto", Sans-serif' }}
                >
                  Após responder as questões, toque no botão abaixo
                  <br className="hidden md:block" />
                  para receber o link e materiais do evento:
                </p>

                <Button
                  className="w-full max-w-sm py-4 md:py-6 text-sm md:text-base hover:opacity-90 transition-opacity duration-300 rounded-3xl"
                  onClick={() => window.open(getWhatsappUrl(), '_blank')}
                  style={{
                    background:
                      "linear-gradient(96.48deg, #065100 -18.33%, #49E413 159.75%)",
                    fontFamily: '"Roboto", Sans-serif',
                  }}
                >
                  Clique aqui para entrar no Grupo no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rodapé com copyright */}
      <footer className="w-full bg-black h-[150px] flex items-center justify-center">
        <p
          className="text-gray-400 text-sm md:text-base text-center"
          style={{ color: "#fff", fontFamily: '"Roboto", Sans-serif' }}
        >
          © 2023. All rights reserved. Política de Privacidade.
        </p>
      </footer>
    </div>
  );
}
