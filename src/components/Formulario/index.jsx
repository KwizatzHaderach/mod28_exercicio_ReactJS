
import React, { useState } from 'react';

const Formulario = ({ onFormSubmit }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit({ altura, peso });
    };

    return (
        <header> 
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="altura">Altura (cm):</label>
                        <input type="number" id="altura"value={altura}onChange={(e) => setAltura(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="peso">Peso (kg):</label>
                        <input type="number" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                    </div>
                    <button type="submit">Calcular IMC</button>
                </form>
            </div>
        </header>
        
    );
};

export default Formulario;
