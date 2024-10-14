import { useState } from "react";
import { Rule3 } from "../../assets/Styles/Home";
import { calculateResult, toClean } from "./CalculateResultToclean";

export default function Rule() {
  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [third, setThird] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  
  return (
        <Rule3>
          <h1 className="title-rule">Regra de 3</h1>
          <div className="allBox-rule">
            <div className="firstBox-rule">
              <input
                className="value-rule"
                 placeholder="60"
                value={first}
                onChange={(e) => setFirst(e.target.value)} >
              </input>
              <div className="divider-rule"></div>
              <input
                className="value-rule"
                placeholder="100"
                value={second}
                onChange={(e) => setSecond(e.target.value)} >
              </input>
            </div>
            <div className="secondBox-rule">
              <input
                className="value-rule"
                 placeholder="30"
                value={third}
                onChange={(e) => setThird(e.target.value)} >
              </input>
              <div className="divider-rule"></div>
              <div className="result-rule">
                {result !== null && <span>{result.toFixed(2)}</span>}
              </div>
            </div>
          </div>
          <div className="calculateToClean-rule">
            <button className="calculate" onClick={() => calculateResult(Number(first), Number(second), Number(third), setResult)} >
              Calcular
            </button>
            <button className="calculate" 
            onClick={() => toClean(setFirst, setSecond, setThird, setResult)}>
              Limpar
            </button>
          </div>
        </Rule3>
  );
}
