import { Broker, Data } from "../assets/Styles/Home";
import { useRef } from "react";
export default function BrokersProfileHome() {
  const listBroker = [
    { image: "https://img.freepik.com/fotos-gratis/mulher-de-negocios-elegante-e-confiante-sorrindo_176420-19466.jpg", name: "Monique", points: "1200", telephone: "38998152601" },
    { image: "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg", name: "Patrick", points: "1100", telephone: "34997734653" }
  ];

  const brokersRef = useRef(null);

  return (
          <Broker ref={brokersRef}>
            {listBroker.map((broker, index) => (
              <Data key={index}>
                <div className="image-container">
                  <img className="blurred-image" src={broker.image} alt={`${broker.name} blurred`} />
                  <img className="sharp-image" src={broker.image} alt={`${broker.name} sharp`} />
                </div>
                <div className="data-container">
                  <h2 className="data-name">{broker.name}</h2>
                  <p className="data-points" >{broker.points} pontos</p>
                  <p className="data-telephone">Telephone: {broker.telephone}</p>
                </div>
              </Data>
            ))}
          </Broker>  
   
  );
}
