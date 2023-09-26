import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Calculadora from "./components/Calculadora";

function App () {
  const [dadosFormulario, setDadosFormulario] = useState('');

  const handleFormSubmit = (dados) => {
    setDadosFormulario(dados);
  };

  return (
    <>
      <div className="container top"> 
      <h1 className="top">Calculadora de IMC</h1>
      <Formulario onFormSubmit = {handleFormSubmit} />
      {dadosFormulario && <Calculadora {...dadosFormulario} />}
      </div>
    </>
  );
};

export default App;
