import Card from "@/components/card";
import Separator from "@/components/separator";
export default function Home() {
  return (
    <main className="flex flex-col gap-2 w-full mx-auto m-10 md:max-w-[850px]">
      <span className="text-[22px] sm:text-[28px] lg:text-[44px] text-white text-center whitespace-nowrap font-extrabold px-2">
        <h1 className="">Protegendo-se Digitalmente:</h1>
        <h1 className="mt-2 text-[18px] sm:text-[24px] lg:text-[38px]">
          {" "}
          Dicas Contra Golpes e Notícias Falsas
        </h1>
      </span>
      <div className="mt-6 mb-4">
        <Separator />
      </div>
      <div className="px-8 flex flex-col gap-8">
        <Card
          direction="left"
          imgSrc="https://www.serasa.com.br/assets/cms/2020/gJBsHZPe-LAYOUT_MEDUSA_6-1.png"
          title={`Dicas para uma \n Navegação Segura`}
          subtitle=" Evite clicar em links suspeitos e verifique sempre a autenticidade dos sites antes de fornecer informações pessoais. É crucial garantir que os sites tenham o protocolo HTTPS, indicado por um cadeado verde na barra de endereço, para proteger seus dados durante a transmissão."
        />
        <Card
          direction="right"
          imgSrc="/fake.png"
          title={`Combatendo Notícias \n Falsas Online`}
          subtitle="Esteja atento a títulos chamativos, erros gramaticais e textos opinativos disfarçados como notícia. Verifique a credibilidade da fonte e evite sites desconhecidos. Além disso, confira a data da publicação, a URL do site e consulte agências de checagem para garantir a veracidade da informação."
        />
        <Card
          direction="left"
          imgSrc="https://cdn-icons-png.flaticon.com/512/3067/3067833.png"
          title={`Mantenha-se atento \n no seu Email`}
          subtitle="Preste atenção aos avisos do Google, que muitas vezes identificam mensagens suspeitas. Além disso, nunca responda a solicitações de informações pessoais por email e evite digitar sua senha após clicar em links duvidosos. Mantenha-se vigilante quanto a mensagens que parecem urgentes ou promessas muito boas para serem verdade,  são táticas comuns usadas por golpistas online."
        />
        <Card
          direction="right"
          imgSrc="/fakeBuy.png"
          title={`Sinais de Fraude em \n Compras Virtuais`}
          subtitle="Fique atento a sinais que possam indicar possíveis fraudes, evite sites com detalhes de contato limitados, como falta de endereço físico ou número de telefone. Desconfie de preços muito baixos em comparação com outras lojas confiáveis, pois podem ser indícios de produtos falsificados. Atenção ao design do site, especialmente se parecer amador, e às imagens de baixa qualidade, que são indícios de um site falso."
        />
      </div>
      <div className="mt-10">
        <Separator />
      </div>
      <div className="my-[30px]">
        <footer className="h-20 flex items-center text-white px-6">
          <img
            src="/unex.png"
            className="md:w-42 md:h-32 md:mx-0 -mx-8 h-24 mr-4 rounded-full"
            alt="Logo"
          />
          <div>
            <p className="text-lg font-semibold mb-2">Desenvolvido Por:</p>
            <div className="flex space-x-4">
              <a className="text-white font-semibold hover:opacity-70 transition-colors">
                Gabriel Torres
              </a>
              <a className="text-white font-semibold hover:opacity-70 transition-colors">
                Tony Cleriston
              </a>
              <a className="text-white font-semibold hover:opacity-70 transition-colors">
                Vinicius Cerqueira
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
