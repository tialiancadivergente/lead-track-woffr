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

  const getLaunchTag = () => {
    const temperatureMap = {
      f: "Frio",
      m: "Morno",
      q: "Quente",
      org: "Organico",
    };

    const temperaturaKey = (temperatura || "").toLowerCase();
    const temperaturaLabel =
      temperatureMap[temperaturaKey as keyof typeof temperatureMap] || "Frio";

    return `[OFRR] [OUT25] [${temperaturaLabel}]`;
  };

  const launch = getLaunchTag();

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
    const basePath = `/quest/${params.headline}/${params.version}/${
      params.temperature
    }/${params.slug?.[0] || ""}/typ`;

    // Iniciar com os parâmetros de email e telefone
    const queryParams = new URLSearchParams();
    queryParams.append("email", email);
    queryParams.append(
      "phone",
      `${ddi}${whatsapp.replace(/\s+|-|\(|\)|\./g, "")}`
    );

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
    <div>
      <section
        id="hero"
        className={`relative flex flex-col items-center p-0 justify-center bg-[url('/images/ofrr/v1/bg-clouds.png')] bg-cover bg-center overflow-hidden bg-[#021217] z-0`}
      >
        <div className="w-full">
          <div className="bg-[#C0964B] w-full py-4 text-center text-white lg:text-base text-sm">
            RECOMENDADO PARA SOLTEIRAS, CASADAS E DIVORCIADAS
          </div>
          <div className="absolute top-20 2xl:right-80 xl:right-40 right-0 w-[373px] bg-no-repeat hidden md:flex">
            <Image
              src="/images/ofrr/v1/woman-rose.png"
              alt="DEPENDÊNCIA EMOCIONAL"
              width={373}
              height={762}
              className="object-contain"
            />
          </div>
          <div
            className={`lg:container mx-auto px-4 pt-10 pb-24 relative lg:w-[1080px] w-full`}
          >
            {/* Coluna única centralizada ou duas colunas */}
            <div className="w-full">
              {isLogo && (
                <div className="mb-8 flex md:justify-start justify-center">
                  <Image
                    src="/images/ofrr/o-fim-das-relacoes-ruins.png"
                    alt="Logotipo Resgate dos otimistas"
                    width={155}
                    height={70}
                    priority
                    className="object-contain select-none pointer-events-none"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              )}
              <div className="mt-8 text-left sm:max-w-[60%] max-w-[390px] mx-auto md:mx-0">
                {!titleRedLine ? (
                  <>
                    <p className="text-white lg:text-[34px] text-xl lg:leading-10 leading-7 font-semibold mb-1">
                      Descubra como evitar frustrações e encontrar o homem certo
                      antes mesmo de sair com ele -{" "}
                      <span className="text-[#C0964B]">
                        o método que poupa seu tempo e te conecta com o parceiro
                        ideal.
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <div
                      className={`text-2xl lg:text-5xl max-w-2xl leading-none ${
                        isDark ? "text-[#f4f0e1]" : "text-[#07242c]"
                      }`}
                    >
                      {titleRedLine}
                    </div>
                  </>
                )}
              </div>

              <p className="my-4 flex items-center text-white font-special-elite text-left lg:text-2xl text-sm sm:max-w-[60%] max-w-[390px] mx-auto md:mx-0">
                {redLine ? <span>{redLine}</span> : <></>}
              </p>

              <p className="lg:text-2xl text-sm text-left text-white font-special-elite mt-6 md:w-full w-[390px] md:mx-0 mx-auto">
                Comprovado por mais de 53 mil mulheres.
              </p>
              <p className="lg:text-2xl text-[14px] text-left text-[#C0964B] font-semibold mb-6 md:w-full w-[390px] md:mx-0 mx-auto">
                06, 07 e 08 de outubro - às 20h (Horário de Brasília)
              </p>

              <form
                onSubmit={handleSubmit}
                id="cadastro"
                name={launch}
                className={`space-y-4 lg:max-w-[486px] max-w-[400px] mx-auto md:mx-0`}
              >
                <div>
                  <input
                    type="email"
                    id="form-field-email"
                    placeholder="Seu melhor e-mail"
                    className={`w-full px-4 py-3 rounded-full bg-white text-[#104448] placeholder:text-[#104448]`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={18} className="text-gray-500" />
                  </div>
                  <div className="flex">
                    <select
                      className={`py-3 pl-10 pr-2 rounded-l-full bg-white text-[#104448] placeholder:text-[#104448] border-r border-gray-300 focus:ring-0 focus:outline-none`}
                      value={ddi}
                      onChange={(e) => setDdi(e.target.value)}
                    >
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+351">🇵🇹 +351</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+54">🇦🇷 +54</option>
                      <option value="+56">🇨🇱 +56</option>
                      <option value="+57">🇨🇴 +57</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Seu WhatsApp"
                      id="form-field-telefone"
                      className={`flex-1 px-4 py-3 rounded-r-full bg-white text-[#104448] placeholder:text-[#104448] focus:outline-none ${
                        !isDark ? "border border-gray-300" : ""
                      }`}
                      value={whatsapp}
                      onChange={handleChange}
                      name="whatsapp"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    boxShadow: "0 10px 50px 10px rgba(10, 109, 109, 0.6)",
                  }}
                  className="w-full bg-[#C0964B] text-white font-bold py-3 px-6 rounded-full shadow-md text-base md:text-lg uppercase tracking-wide transition-all hover:brightness-110"
                  disabled={isSubmitting}
                >
                  <span className="text-white">
                    {isSubmitting
                      ? "PROCESSANDO..."
                      : success
                      ? "SUCESSO! AGUARDE..."
                      : "QUERO PARTICIPAR!"}
                  </span>
                </button>
              </form>

              <div className="flex items-center gap-6 justify-start w-[390px] md:w-full mx-auto md:mx-0 mt-8 text-white font-bold lg:text-base text-sm">
                <div className="flex items-center gap-1">
                  <MonitorSmartphone className="lg:size-6 size-5" />
                  Online
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="lg:size-6 size-5" />
                  Gratuito
                </div>
                <div className="flex items-center gap-1">
                  <Ban className="lg:size-6 size-5" />
                  Vagas Limitadas
                </div>
              </div>

              <p
                className={`text-white lg:text-2xl text-sm mt-1 text-left font-extrabold w-[390px] md:w-full md:mx-0 mx-auto`}
              >
                Atenção: Não ficará disponível depois, cadastre-se!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
