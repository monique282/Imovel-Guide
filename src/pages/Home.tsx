import { OnPop, Rule3, Below } from "../assets/Styles/Home";
import BrokersProfileHome from "../component/BrokersProfile";
import MessageHome from "../component/Message";

export default function Home() {

  return (
    <>
      <OnPop>
        <BrokersProfileHome />
        <MessageHome />
        <Rule3>
          <h1 className="title-rule">Regra de 3</h1>
          <div className="allBox-rule">
            <div className="firstBox-rule">
              <input className="value-rule"></input>
              <div className="divider-rule"></div>
              <input className="value-rule"></input>
            </div>
           
            <div className="secondBox-rule">
              <input className="value-rule" ></input>
              <div className="divider-rule"></div>
              <div className="result-rule"></div>
            </div>
          </div>
          <button className="calculate" >
            Calcular
          </button>
        </Rule3>
      </OnPop>
      <Below>

      </Below>
    </>
  );
}
