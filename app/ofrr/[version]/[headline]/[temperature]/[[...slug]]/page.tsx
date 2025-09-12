"use client";

import { useState } from "react";
import SplashScreenOfrr from "@/app/components/SplashScreenOfrr";
import Formv1 from "@/app/ofrr/[version]/v1";
import { CircleX } from "lucide-react";
import Image from "next/image";

const listText = [
  {
    id: 1,
    text: (
      <p className={`lg:text-base/5 text-[14px]/4 text-start font-bold`}>
        Se envolver com homens que somem, traem ou não querem nada sério.
      </p>
    ),
  },
  {
    id: 2,
    text: (
      <p className={`lg:text-base/5 text-[14px]/4 text-start`}>
        <span className="font-bold">Se sentir solitária,</span> mesmo quando
        está em um relacionamento, porque o parceiro não te dá o valor que você
        merece.
      </p>
    ),
  },
  {
    id: 3,
    text: (
      <p className={`lg:text-base/5 text-[14px]/4 text-start`}>
        <span className="font-bold">
          Acreditar que existe algo de errado com você,{" "}
        </span>
        por não conseguir manter um relacionamento estável e saudável.
      </p>
    ),
  },
  {
    id: 4,
    text: (
      <p className={`lg:text-base/5 text-[14px]/4 text-start`}>
        <span className="font-bold">
          Perder seu tempo com homens que só querem te usar,{" "}
        </span>
        sem oferecer compromisso ou segurança.
      </p>
    ),
  },
  {
    id: 5,
    text: (
      <p className={`lg:text-base/5 text-[14px]/4 text-start`}>
        <span className="font-bold">Ter medo de ficar sozinha </span>
        para sempre ou de não conseguir encontrar alguém que realmente esteja à
        altura.
      </p>
    ),
  },
  {
    id: 6,
    text: (
      <p className={`lg:text-base/5 text-[14px]/4 text-start`}>
        <span className="font-bold">
          Carregar a culpa por não ter casado ou por ter passado por um
          divórcio,{" "}
        </span>
        e temer que sua história de frustrações continue se repetindo.
      </p>
    ),
  },
];

const listTextWorkshop = [
  {
    id: 1,
    path: "/images/ofrr/v1/icon-1.png",
    text: (
      <p className={`lg:text-2xl/7 text-base/6 md:text-start text-center`}>
        <span className="font-bold">
          Identificar e evitar homens errados antes de sair com eles,{" "}
        </span>
        eliminando decepções e frustrações.
      </p>
    ),
  },
  {
    id: 2,
    path: "/images/ofrr/v1/icon-2.png",
    text: (
      <p className={`lg:text-2xl/7 text-base/6 md:text-start text-center`}>
        <span className="font-bold">
          Quebrar padrões tóxicos que te levam a relacionamentos insatisfatórios
        </span>{" "}
        e abrir caminho para um amor saudável e verdadeiro.
      </p>
    ),
  },
  {
    id: 3,
    path: "/images/ofrr/v1/icon-3.png",
    text: (
      <p className={`lg:text-2xl/7 text-base/6 md:text-start text-center`}>
        <span className="font-bold">
          Reconstruir sua confiança e autoestima,
        </span>{" "}
        para atrair um parceiro que realmente te valorize.
      </p>
    ),
  },
  {
    id: 4,
    path: "/images/ofrr/v1/icon-4.png",
    text: (
      <p className={`lg:text-2xl/7 text-base/6 md:text-start text-center`}>
        <span className="font-bold">
          Superar o medo de ficar sozinha e acabar com a ansiedade por não
          encontrar a pessoa certa,
        </span>{" "}
        desbloqueando seu verdadeiro potencial amoroso.
      </p>
    ),
  },
  {
    id: 5,
    path: "/images/ofrr/v1/icon-5.png",
    text: (
      <p className={`lg:text-2xl/7 text-base/6 md:text-start text-center`}>
        <span className="font-bold">
          Atrair um homem pronto para um relacionamento sério,
        </span>{" "}
        entendendo o que faz a diferença na escolha de um parceiro ideal.
      </p>
    ),
  },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = () => {
    setIsSubmitting(true);

    // Pequeno atraso para garantir que a página tenha tempo de renderizar completamente
    setTimeout(() => {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Elemento com id 'cadastro' não encontrado");
      }
      setIsSubmitting(false);
    }, 100);
  };
  return (
    <SplashScreenOfrr>
      <Formv1 />

      <div className="relative bg-[#F4F0E1] 2xl:max-h-[350px] xl:max-h-[290px] lg:max-h-[240px] md:max-h-[170px] sm:max-h-[170px] max-h-[100px] max-[550px]:max-h-[60px] max-[475px]:max-h-[20px] max-[380px]:max-h-[0px]">
        <div className="absolute xl:top-[-150px] lg:top-[-120px] top-[-120px] w-full bg-no-repeat z-10 hidden md:flex">
          <Image
            src="/images/ofrr/v1/papel-rasgado-com-homens-ruins.png"
            alt="DEPENDÊNCIA EMOCIONAL"
            width={1921}
            height={584}
            className="object-contain"
          />
        </div>
        <div className="invisible hidden md:flex">
          <Image
            src="/images/ofrr/v1/papel-rasgado-com-homens-ruins.png"
            alt=""
            width={1921}
            height={300}
          />
        </div>

        <div className="absolute xl:top-[-150px] lg:top-[-120px] top-[-100px] w-full bg-no-repeat z-10 md:hidden">
          <Image
            src="/images/ofrr/v1/papel-rasgado-com-homens-ruins-mobile.png"
            alt="DEPENDÊNCIA EMOCIONAL"
            width={360}
            height={213}
            className="object-contain w-full"
          />
        </div>
        <div className="invisible md:hidden">
          <Image
            src="/images/ofrr/v1/papel-rasgado-com-homens-ruins-mobile.png"
            alt=""
            width={360}
            height={100}
            className="object-contain w-full"
          />
        </div>
      </div>

      <div className="relative bg-[#F4F0E1] overflow-hidden">
        <div className="absolute top-44 2xl:left-32 xl:left-[-25px] left-[-90px] w-[253px] bg-no-repeat hidden lg:flex">
          <Image
            src="/images/ofrr/v1/petalas-1.png"
            alt="Petalas"
            width={253}
            height={518}
            className="object-contain"
          />
        </div>
        <div className="absolute top-20 2xl:right-28 xl:right-0 lg:right-[-120px] w-[228px] bg-no-repeat hidden lg:inline-flex">
          <Image
            src="/images/ofrr/v1/petalas-2.png"
            alt="Petalas"
            width={228}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 pt-5 pb-8 lg:w-[950px] w-auto">
          <div className="md:grid lg:grid-cols-[auto_1fr] md:grid-cols-[auto_auto] lg:gap-10 gap-4 items-start flex flex-col w-full px-4">
            <div className="max-w-[328px] hidden md:flex">
              <Image
                src="/images/ofrr/v1/rosa-bem-me-quer.png"
                alt="DEPENDÊNCIA EMOCIONAL"
                width={328}
                height={699}
                className="object-contain w-full"
              />
            </div>
            <div className="md:pt-14 pt-36 lg:text-2xl text-[17px]/1 text-[#104448] font-bold">
              O Workshop{" "}
              <span className="text-[#C0964B]">“O FIM DAS RELAÇÕES RUINS”</span>{" "}
              é para você, que está{" "}
              <span className="text-[#C0964B]">
                cansada de viver relacionamentos frustrantes
              </span>{" "}
              e de{" "}
              <span className="text-[#C0964B]">
                atrair homens que não te valorizam.
              </span>{" "}
              Portanto, se não aguenta mais:
              <div className="flex flex-col gap-2 mt-6 font-normal">
                {listText.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 mt-2">
                    <div>
                      <CircleX className="text-[#7B2122] size-7" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
              <p className="text-[#006D71] lg:text-2xl/7 text-[14px]/5 font-normal mt-6">
                Este Workshop é o primeiro passo para transformar sua vida
                amorosa de vez!
              </p>
              <button
                type="button"
                onClick={handleClick}
                className="w-full bg-[#C0964B] text-white font-bold py-3 px-6 rounded-full shadow-md lg:text-base text-[14px] uppercase tracking-wide transition-all hover:brightness-110 mt-6"
              >
                <span className="text-white">É isso que eu quero</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-no-repeat md:hidden flex">
          <Image
            src="/images/ofrr/v1/rosa-bem-me-quer-mobile.png"
            alt="Petalas"
            width={360}
            height={174}
            className="object-contain w-full"
          />
        </div>
      </div>

      <div className="relative bg-[url('/images/ofrr/v1/bg.png')] bg-cover bg-center">
        <div className="absolute bottom-0 w-full bg-no-repeat">
          <Image
            src="/images/ofrr/v1/moldura-papel.png"
            alt="Moldura"
            width={1920}
            height={37}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 py-12 relative lg:w-[1080px] w-auto">
          <div className="text-center lg:text-2xl text-[18px]">
            <p className="text-[#917E5A]">Veja o que você vai aprender no</p>
            <p className="text-[#104448]">
              Workshop “O FIM DAS RELAÇÕES RUINS”:
            </p>
          </div>
          <div className="grid md:grid-cols-[auto_auto] gap-8 items-start mt-14 text-[#104448]">
            {listTextWorkshop.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-start items-center md:gap-3 gap-0"
              >
                <Image
                  src={item.path}
                  alt="Icon"
                  width={70}
                  height={70}
                  className="object-contain"
                />
                {item.text}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 mb-4">
            <button
              type="button"
              onClick={handleClick}
              className="max-w-[430px] w-full bg-[#C0964B] text-white font-bold py-3 px-6 rounded-full shadow-md text-base md:text-lg uppercase tracking-wide transition-all hover:brightness-110"
            >
              <span className="text-white">Estou Pronta!</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-[url('/images/ofrr/v1/bg-clouds-2.png')] bg-cover bg-center">
        <div className="absolute bottom-0 2xl:right-72 xl:right-20 right-0 w-[462px] bg-no-repeat lg:flex hidden">
          <Image
            src="/images/ofrr/v1/RMN-10A.png"
            alt="DEPENDÊNCIA EMOCIONAL"
            width={462}
            height={748}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 lg:py-12 pt-12 pb-0 relative lg:w-[1080px] w-auto">
          <div className="lg:w-[50%] text-[#104448]">
            <div className="text-2xl">
              <p className="text-white">Quem será o seu professor</p>
              <p className="text-[#C0964B]">neste workshop?</p>
              <div className="flex flex-col xl:gap-6 gap-3 text-white text-base mt-10">
                <p>
                  <span className="text-[#C0964B]">RAMON GALIMBERTI</span> será
                  seu mentor Workshop “O FIM DAS RELAÇÕES RUINS”.
                </p>
                <p>
                  Terapeuta e especialista em desenvolvimento humano, Ramon é
                  mentor da Aliança Divergente, um movimento que já transformou
                  a vida de mais de 70 mil pessoas em mais de 60 países.
                </p>
                <p>
                  Utilizando o poderoso método baseado na Teoria da Permissão,
                  Ramon vai te ensinar de forma prática e direta a identificar
                  os padrões que sabotam seus relacionamentos e a atrair o
                  parceiro certo.
                </p>
                <p>
                  Suas orientações vão além do conhecimento teórico: ele traz
                  ferramentas e protocolos testados que você pode aplicar
                  imediatamente para transformar sua vida amorosa.
                </p>
                <p>
                  Com clareza e empatia, Ramon te ajudará a desmentir crenças
                  limitantes e a superar a dependência emocional, trabalhando ao
                  seu lado para fortalecer sua capacidade de atrair um
                  relacionamento saudável e recíproco.
                </p>
                <p>
                  Prepare-se para aprender com um mentor que não só entende suas
                  dores, mas que já ajudou milhares de mulheres a superá-las e a
                  viverem relacionamentos memoráveis!
                </p>
              </div>

              <div className="flex lg:justify-start justify-center my-10">
                <button
                  type="button"
                  onClick={handleClick}
                  className="max-w-[430px] w-full bg-[#C0964B] text-white font-bold md:py-3 py-2 px-6 rounded-full shadow-md text-[14px] md:text-lg uppercase tracking-wide transition-all hover:brightness-110"
                >
                  <span className="text-white">Entrar Agora</span>
                </button>
              </div>
              <div className="bottom-0 max-w-[285px] mx-auto lg:hidden">
                <Image
                  src="/images/ofrr/v1/RMN-10A-mobile.png"
                  alt="DEPENDÊNCIA EMOCIONAL"
                  width={285}
                  height={367}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#104448] w-full text-white">
        <div className="container flex lg:flex-row flex-col justify-between items-center mx-auto py-6 px-4 relative lg:w-[1080px] w-auto gap-2">
          <p className="uppercase text-[13px]">
            Termos de Uso | Políticas de Privacidade
          </p>
          <Image
            src="/images/logo.png"
            alt="Aliança Divergente"
            width={250}
            height={32}
            className="object-contain"
          />
          <div className="lg:text-right text-center text-[10px] uppercase">
            <p>Copyright © WORKSHOP O FIM DAS RELAÇÕES RUINS</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </SplashScreenOfrr>
  );
}
