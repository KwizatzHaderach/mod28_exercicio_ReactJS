import React from 'react';


const Calculadora = ({ altura, peso }) => {
    const calcularIMC = () => {
        const alturaM = altura;
        return (peso / (alturaM * alturaM)).toFixed(2);
    };

    const resultadoClassificacao = (imc) => {
        if (imc < 18.5) return 'Abaixo do Peso';
        if (imc < 24.9) return 'Peso Normal';
        if (imc < 29.9) return 'Sobrepeso';
        return 'Obesidade';
    };

    const imc = calcularIMC();
    const classificacao = resultadoClassificacao(imc);

    return (
        <div className='container'>
            <h2>Resultado</h2>
            <p>IMC: {imc}</p>
            <p>Classificação: {classificacao}</p>
        </div>
    );
};

export default Calculadora;
