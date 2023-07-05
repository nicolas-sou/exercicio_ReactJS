import React, { useState } from 'react';
import styles from './formulario.module.css';

const IMCCalculator = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
    if (altura && peso) {
        const alturaMetros = altura / 100;
        const imcResultado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        setIMC(imcResultado);
        setClassificacao(classificarIMC(imcResultado));
    }
    };

    const classificarIMC = (imc) => {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        return 'Obesidade Grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        return 'Obesidade Grau 2';
    } else {
        return 'Obesidade Grau 3';
    }
    };

    const handleAlturaChange = (e) => {
        setAltura(e.target.value);
    };

    const handlePesoChange = (e) => {
        setPeso(e.target.value);
    };

    return (
    <div className={styles.container}>
        <div>
        <h2 className={styles.title}>Calculadora de IMC</h2>
        </div>
        <div className={styles.inputs}>
        <h2 className={styles.text}>Coloque suas informações:</h2>
            <label className={styles.textlabel}>Altura (cm):</label>
            <input className={styles.campo} type="number" value={altura} onChange={handleAlturaChange} />
            <label className={styles.textlabel}>Peso (kg):</label>
            <input className={styles.campo} type="number" value={peso} onChange={handlePesoChange} />
        <button className={styles.button} onClick={calcularIMC}>Calcular</button>
        </div>

        {imc !== null && (
        <div>
            <h3 className={styles.imc}>Seu IMC é: {imc}</h3>
            <p className={styles.imc}>Classificação: {classificacao}</p>
        </div>
        )}

    <div className={styles.text}>
        <table className={styles.tabela} border="2" width="50%">
            <thead>
            <tr>
                <th>Classificação</th>
                <th>IMC</th>
            </tr>
        </thead>
        <tbody className={styles.text}>
            <tr>
                <td>Abaixo do peso</td>
                <td>Menor que 18.5</td>
            </tr>
            <tr>
                <td>Peso normal</td>
                <td>18.5 - 24.9</td>
            </tr>
            <tr>
                <td>Sobrepeso</td>
                <td>25 - 29.9</td>
            </tr>
            <tr>
                <td>Obesidade Grau 1</td>
                <td>30 - 34.9</td>
            </tr>
            <tr>
                <td>Obesidade Grau 2</td>
                <td>35 - 39.9</td>
            </tr>
            <tr>
                <td>Obesidade Grau 3</td>
                <td>Maior ou igual a 40</td>
            </tr>
        </tbody>
        </table>
        </div>
    </div>
    );
};

export default IMCCalculator;