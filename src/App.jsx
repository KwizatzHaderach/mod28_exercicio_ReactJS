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
      <Formulario onFormSubmit = {handleFormSubmit} />
      {dadosFormulario && <Calculadora {...dadosFormulario} />}
    </>
  );
};

export default App;
