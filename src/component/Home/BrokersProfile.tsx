import { Broker, Data } from "../../assets/Styles/Home";
import { useRef, useState } from "react";
import formatPhone from "../../utils/FormatPhone"

export default function BrokersProfileHome() {

    const [seePhone, setSeePhone] = useState<boolean[]>([]);

  const listBroker = [
    { image: "https://img.freepik.com/fotos-gratis/mulher-de-negocios-elegante-e-confiante-sorrindo_176420-19466.jpg", name: "Monique", points: "1200", telephone: "38998152601" },
    { image: "https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg", name: "Patrick", points: "1100", telephone: "34997734653" }
  ];

  const brokersRef = useRef(null);

  const phoneVisibility = (index: number) => {
    setSeePhone(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
            <p className="data-points">{broker.points} pontos</p>
            {seePhone[index] ? (
              <p className="data-telephone">{formatPhone(broker.telephone)}</p>
            ) : (
              <p className="data-seePhone" onClick={() => phoneVisibility(index)}>
                ver telefone
              </p>
            )}
          </div>
        </Data>
      ))}
    </Broker>
  );
}
