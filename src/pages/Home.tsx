import { OnPop, BrokersProfile, Message, Rule3, Below, Broker, Data } from "../assets/Styles/Home";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Home() {
  const listBroker = [
    { image: "https://img.freepik.com/fotos-gratis/mulher-de-negocios-elegante-e-confiante-sorrindo_176420-19466.jpg", name: "Monique", points: "1200", telephone: "38998152601" },
    { image: "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg", name: "Patrick", points: "1100", telephone: "34997734653" }
  ];

  // Referência para o container dos corretores que será capturado
  const brokersRef = useRef(null);

  // Função para capturar e baixar a imagem
  const downloadImage = () => {
    if (brokersRef.current) {
      html2canvas(brokersRef.current).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'brokers.png';
        link.click();
      });
    }
  };

  return (
    <>
      <OnPop>
        <BrokersProfile ref={brokersRef}>
          <Broker >
            {listBroker.map((broker, index) => (
              <Data key={index}>
                <>    
                <img src={broker.image} alt="Broker profile" />
                </>
                <>
                <h2>{broker.name}</h2>
                <p>Points: {broker.points}</p>
                <p>Telephone: {broker.telephone}</p>
                </>
              </Data>
            ))}
          </Broker>
        </BrokersProfile>
        <Message>

        </Message>
        <Rule3>

        </Rule3>
      </OnPop>
      <Below>

      </Below>
    </>
  );
}
