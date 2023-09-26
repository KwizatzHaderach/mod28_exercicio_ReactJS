import React, { useState } from 'react';
import style from './Formulario.module.css'

const Formulario = ({ onFormSubmit }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({ altura, peso });
    };

    return (
        <body class="body" > 
            <div class='container'>
                <form onSubmit={handleSubmit}>
                    <div className={style.div}> 
                        <h1 className="">Calculadora de IMC</h1>
                    </div>
                    <div className={style.div}>
                        <label htmlFor="altura">Altura (cm):</label>
                        <input type="number" id="altura"value={altura}onChange={(e) => setAltura(e.target.value)} placeholder='ex: 1,75'/>
                    </div>
                    <div className={style.div}>
                        <label htmlFor="peso">Peso (kg):</label>
                        <input type="number" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder='ex: 80'/>
                    </div>
                    <button className={style.button} type="submit">Calcular IMC</button>
                </form>
            </div>
        </body>
        
    );
};

export default Formulario;
