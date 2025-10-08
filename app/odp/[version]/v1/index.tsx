"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Ban, CreditCard, MonitorSmartphone, Phone } from "lucide-react";
import Image from "next/image";
import { useParams, useSearchParams, useRouter } from "next/navigation";

export default function Formv1() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [temperatura, setTemperatura] = useState<string | null>(null);
  const [tipo, setTipo] = useState<string | null>(null);
  const [versao, setVersao] = useState<string | null>(null);
  const [formFields, setFormFields] = useState<Record<string, string> | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ddi, setDdi] = useState("+55");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [domain, setDomain] = useState<string>("");
  const [redLine, setRedLine] = useState<string | null>(null);
  const [titleRedLine, setTitleRedLine] = useState<React.ReactNode | null>(
    null
  );
  const [isLogo, setIsLogo] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isPicture, setIsPicture] = useState(false);

  const fullUrl = Object.values(params).flat().join("/");

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

  // Capturar UTMs da queryString
  useEffect(() => {
    if (searchParams) {
      const utmParams: Record<string, string> = {};
      let hasUtm = false;

      // Lista de parâmetros UTM comuns
      const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_id",
      ];

      // Verificar cada parâmetro UTM
      utmKeys.forEach((key) => {
        const value = searchParams.get(key);
        if (value) {
          utmParams[key] = value;
          hasUtm = true;
        }
      });

      // Adicionar outros parâmetros da query que não são UTM
      searchParams.forEach((value, key) => {
        if (!utmKeys.includes(key) && key !== "temperatura") {
          utmParams[key] = value;
          hasUtm = true;
        }
      });

      // Definir formFields apenas se houver UTMs
      if (hasUtm) {
        console.log("UTM params:", utmParams);
        setFormFields(utmParams);
      }
    }
  }, [searchParams]);

  // Mapeamento dos benefícios para exibição
  const benefitsMapping = [
    {
      id: "h1",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-white lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Encontre um homem de valor até no Tinder.
        </p>
      ),
      text: (
        <p>
          O lugar influencia, mas seus padrões ocultos definem quem te nota e
          quem você aceita.
        </p>
      ),
    },
    {
      id: "h2",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-white lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Descubra o segredo das mulheres que atraem homens de valor.
        </p>
      ),
      text: (
        <p>
          Elas não são melhores que você,{" "}
          <span className="font-bold">
            mas romperam com os padrões ocultos que só atraem homens ruins.
          </span>
        </p>
      ),
    },
    {
      id: "h3",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-[#C0964B] lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Relacionamentos ruins e vida financeira travada?
        </p>
      ),
      text: (
        <p>
          Elimine os 4 padrões que você repete inconscientemente que te impedem
          de ter o relacionamento que deseja...
          <p className="font-bold">e até de ser mais próspera.</p>
        </p>
      ),
    },
    {
      id: "h4",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-[#C0964B] lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Você merece mais do que migalhas de amor.
        </p>
      ),
      text: (
        <p>
          Elimine os padrões ocultos que te fazem atrair homens ruins{" "}
          <span className="font-bold">
            e construa um amor seguro, companheiro e próspero.
          </span>
        </p>
      ),
    },
    {
      id: "h5",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-[#C0964B] lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          O seu último relacionamento acabou mal?
        </p>
      ),
      text: (
        <p>
          Eu sei que não foi a primeira vez. E não será a última se você
          continuar com os padrões ocultos{" "}
          <span className="font-bold">
            que te impedem de encontrar um homem de valor.
          </span>
        </p>
      ),
    },
    {
      id: "h6",
      isPicture: false,
      isLogo: true,
      title: (
        <p
          className={`text-white lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1`}
        >
          Se você sempre escolhe o cara errado, isso vai mudar agora!
        </p>
      ),
      text: (
        <p>
          Descubra{" "}
          <span className="font-bold">
            como parar de atrair, aceitar e conviver
          </span>{" "}
          com homens ruins.
        </p>
      ),
    },
  ];

  useEffect(() => {
    if (params && params.temperature) {
      console.log("temperatura param", params.temperature);
      let tipoValue = params.headline;
      const versaoValue = params.version;
      const temperaturaValue = params.temperature;
      const isDarkValue = params.theme;

      if (isDarkValue === "2") {
        setIsDark(true);
      } else {
        setIsDark(false);
      }

      const redLineVersion = params.headline;
      tipoValue = `redline-${redLineVersion}`;
      console.log("RedLine Version:", redLineVersion);
      const redLineText = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.text;
      const titleRedLineText = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.title;
      const _isLogo = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.isLogo;
      const _isPicture = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.isPicture;
      if (redLineText) {
        setRedLine(redLineText as unknown as string);
        console.log("RedLine:", redLineText);
      }

      if (titleRedLineText) {
        setTitleRedLine(titleRedLineText);
        console.log("Title RedLine:", titleRedLineText);
      }

      if (_isPicture !== undefined) {
        setIsPicture(_isPicture);
      }

      if (_isLogo !== undefined) {
        setIsLogo(_isLogo);
      }

      console.log("Tipo:", tipoValue);
      console.log("Versão:", versaoValue);
      console.log("Temperatura:", temperaturaValue);

      setTipo(tipoValue);
      setVersao(versaoValue as string);
      setTemperatura(temperaturaValue as string);
    }
  }, [params]);

  // Função para construir a URL de redirecionamento
  const buildRedirectUrl = () => {
    // Construir o path base com os valores dinâmicos
    const basePath = `/quest-odp/${params.version}`;

    // Iniciar com os parâmetros de email e telefone
    const queryParams = new URLSearchParams();

    // Adicionar UTMs se existirem
    if (formFields) {
      Object.entries(formFields).forEach(([key, value]) => {
        queryParams.append(key, value);
      });
    }

    // Construir a URL completa
    return `${basePath}?${queryParams.toString()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const cleanedPhone = whatsapp.replace(/\s+|-|\(|\)|\./g, "");

      const fullPhone = `${ddi}${cleanedPhone}`;

      // Preparar o payload para a API
      const payload: Record<string, any> = {
        email,
        phone: fullPhone,
        temperature: temperatura,
        tipo,
        version: versao,
        parametroCompleto: fullUrl,
        domain,
        uri: domain,
        path: window.location.pathname,
      };

      // Adicionar formFields ao payload apenas se existir
      if (formFields) {
        payload.formFields = formFields;
      }

      const response = await fetch("/api/register-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha ao registrar lead");
      }

      // Preparar dados para localStorage
      const leadData: Record<string, any> = {
        email,
        whatsapp: fullPhone,
        temperature: temperatura,
        tipo,
        version: versao,
        launch,
        domain,
        parametroCompleto: fullUrl,
        date: new Date().toISOString(),
      };

      // Adicionar formFields aos dados do localStorage apenas se existir
      if (formFields) {
        leadData.formFields = formFields;
      }

      const leads = JSON.parse(localStorage.getItem("leads") || "[]");
      leads.push(leadData);
      localStorage.setItem("leads", JSON.stringify(leads));

      setSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    } finally {
      setIsSubmitting(false);

      // Redirecionar após um breve delay para mostrar a mensagem de sucesso
      setTimeout(() => {
        const redirectUrl = buildRedirectUrl();
        console.log("Redirecionando para:", redirectUrl);

        const funnels = {
          q: "https://sf.aliancadivergente.com.br/sf/?sfunnel=48",
          m: "https://sf.aliancadivergente.com.br/sf/?sfunnel=39",
          f: "https://sf.aliancadivergente.com.br/sf/?sfunnel=31",
        };

        // Adicionar parâmetros da URL atual
        const currentUrl = new URL(window.location.href);
        const currentParams = new URLSearchParams(currentUrl.search);

        // Construir URLs com parâmetros adicionais
        Object.keys(funnels).forEach((key) => {
          const url = new URL(funnels[key as keyof typeof funnels]);

          // Adicionar todos os parâmetros da URL atual
          currentParams.forEach((value, param) => {
            url.searchParams.append(param, value);
          });

          const fullPhone = whatsapp.replace(/\s+|-|\(|\)|\./g, "");
          // Adicionar email, telefone e país
          url.searchParams.append("email", email);
          url.searchParams.append("phone", fullPhone);
          url.searchParams.append("country", ddi.replace("+", ""));

          // Atualizar a URL no objeto funnels
          funnels[key as keyof typeof funnels] = url.toString();
        });

        // if (Object.keys(funnels).includes(temperatura || '')) {
        //   window.location.href = funnels[temperatura as keyof typeof funnels];
        //   return; // Interrompe a execução para evitar o redirecionamento padrão
        // }

        if (typeof window !== "undefined") {
          window.history.pushState({}, "", redirectUrl);
        }

        // Usar window.location.href para navegação completa
        if (typeof window !== "undefined") {
          window.location.href = redirectUrl;
        }
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      // Remove todos os caracteres não numéricos
      const numericValue = value.replace(/\D/g, "");

      // Aplica a formatação de acordo com a quantidade de dígitos
      let formattedValue = numericValue;
      if (ddi === "+55") {
        // Formato brasileiro: (XX) XXXXX-XXXX
        if (numericValue.length <= 2) {
          formattedValue = numericValue;
        } else if (numericValue.length <= 7) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
            2
          )}`;
        } else {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
            2,
            7
          )}-${numericValue.slice(7, 11)}`;
        }
      } else {
        // Formato genérico para outros países
        if (numericValue.length > 3 && numericValue.length <= 7) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(
            3
          )}`;
        } else if (numericValue.length > 7) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(
            3,
            7
          )}-${numericValue.slice(7)}`;
        }
      }

      setWhatsapp(formattedValue);
    } else {
      setWhatsapp(value);
    }
  };

  return (
    <>
      <div>
        <section
          id="hero"
          className={`lg:h-[770px] relative flex flex-col justify-end bg-[url('/images/odp/v1/herosection.png')] bg-no-repeat bg-top overflow-hidden bg-[#021217] z-0 w-full`}
        >
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
          <div
            className="absolute lg:bottom-0 top-[570px] w-full h-[200px]"
            style={{
              zIndex: 10,
              background:
                "linear-gradient(0deg, rgba(2, 18, 23, 1) 0%, rgba(2, 18, 23,0.7) 35%, rgba(2, 18, 23,0) 100%)",
            }}
          />
          <div className="relative max-w-screen-xl mx-auto w-full px-4">
            <div
              className={`absolute sm:w-[500px] w-[350px] lg:w-[798px] lg:bottom-0 lg:top-0 sm:top-36 top-16 xl:right-0 lg:-right-36 bg-no-repeat block lg:left-auto left-1/2 lg:translate-x-0 -translate-x-1/2`}
            >
              <Image
                src="/images/odp/v1/Experts.png"
                alt="Background top left"
                width={798}
                height={696}
                className="object-contain"
                style={{
                  transformOrigin: "center",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="relative sm:w-[532px] max-w-[532px] sm:h-[600px] h-auto m-auto lg:ml-0 sm:mt-[500px] mt-[300px] lg:mt-0 bg-[#02161C] rounded-xl lg:mb-20 mb-10 p-[2px] bg-gradient-to-b from-[#008489] to-[#004346] z-10">
              <div
                className="absolute top-[2px] w-full h-full"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(22,56,67,0.85) 0%, rgba(22,56,67,0.6) 40%, rgba(22,56,67,0.2) 80%, rgba(22,56,67,0) 100%)",
                  backgroundBlendMode: "normal",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                }}
              />
              <div className="w-full h-full bg-[#02161C] rounded-xl px-8 py-10 flex flex-col justify-between gap-6">
                <div className="flex justify-start">
                  <Image
                    src="/images/odp/logo.png"
                    alt="Logotipo Resgate dos otimistas"
                    width={250}
                    height={32}
                    priority
                    className="object-contain select-none pointer-events-none z-20"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="text-[#F4F0F1] sm:text-5xl text-2xl uppercase font-bold z-20">
                  Aqui está o seu presente!
                </div>
                <div className="text-[#F4F0F1] text-base z-20 flex flex-col gap-4">
                  <p>
                    Preparamos pessoalmente um{" "}
                    <span className="text-[#c0964b]">diagnóstico gratuito</span>{" "}
                    para você descobrir o que está travando sua vida financeira
                    e impedindo que o seu esforço se torne resultado real.
                  </p>{" "}
                  <p>
                    Um{" "}
                    <span className="text-[#c0964b]">mapeamento preciso,</span>{" "}
                    baseado em padrões de comportamento, que revela por que o
                    dinheiro parece nunca ser suficiente, por que você vive
                    ciclos de ganhar e perder, ou por que não consegue sustentar
                    quando conquista algo.
                  </p>{" "}
                  <p>
                    Esse diagnóstico é fundamental para que você tenha clareza
                    do que está te impedindo de avançar financeiramente e
                    enxergue o primeiro passo para mudar essa realidade.
                  </p>
                </div>
                <div className="w-full z-20 rounded-full p-[1px] bg-gradient-to-b from-[#0FFF52]/0 to-[#0FFFB7]">
                  <button
                    onClick={() => {
                      const redirectUrl = buildRedirectUrl();
                      window.location.href = redirectUrl;
                    }}
                    className="text-[#F4F0F1] text-base font-semibold py-4 px-8 rounded-full transition-all duration-200 bg-gradient-to-b from-[#12E998] to-[#06432C] hover:from-[#0bbf74] hover:to-[#04311f] uppercase tracking-wider z-20 w-full [@media(max-width:400px)]:text-[12px]"
                  >
                    começar diagnóstico
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
    </>
  );
}
