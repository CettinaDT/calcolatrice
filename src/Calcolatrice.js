import React from "react";
import { useState } from "react";

function Calcolatrice() {
  const [calcolo, impostaCalcolo] = useState("");
  const [risultato, impostaRisultato] = useState("");

  const oper = ["/", "*", "-", "+", "."];

  const aggiornaCalcolo = (valore) => {
    if (
      (oper.includes(valore) && calcolo === "") ||
      (oper.includes(valore) && oper.includes(calcolo.slice(-1)))
    ) {
      return;
    }

    impostaCalcolo(calcolo + valore);

    if (!oper.includes(valore)) {
      impostaRisultato(eval(calcolo + valore).toString());
    }
  };

  const creaNumeri = () => {
    const numeri = [];

    for (let i = 1; i < 10; i++) {
      numeri.push(
        <button onClick={() => aggiornaCalcolo(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return numeri;
  };

  const calcolare = () => {
    impostaCalcolo(eval(calcolo).toString());
  };

  const elimina = () => {
    if (calcolo === "") {
      return;
    }
    const valore = calcolo.slice(0, -1);
    impostaCalcolo(valore);
  };

  return (
    <div className="calcolatrice">
      <div className="display">
        {risultato ? <span>({risultato})</span> : ""}
        &nbsp;
        {calcolo || "0"}
      </div>

      <div className="operatori">
        <button onClick={() => aggiornaCalcolo("/")}>/</button>
        <button onClick={() => aggiornaCalcolo("*")}>*</button>
        <button onClick={() => aggiornaCalcolo("-")}>-</button>
        <button onClick={() => aggiornaCalcolo("+")}>+</button>

        <button onClick={elimina}>C</button>
      </div>

      <div className="numeri">
        {creaNumeri()}
        <button onClick={() => aggiornaCalcolo("0")}>0</button>
        <button onClick={() => aggiornaCalcolo(".")}>.</button>
        <button onClick={calcolare}>=</button>
      </div>
    </div>
  );
}

export default Calcolatrice;
