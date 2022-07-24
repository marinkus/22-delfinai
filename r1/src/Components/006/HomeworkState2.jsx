/* Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25 */

import { useState } from "react";
import rand from "../../Functions/rand";

function HomeworkState2() {
    const [shape, setShape] = useState('0px');
    const changeShape = () => setShape(f => f === '0px' ? '100px' : '0px');

    const [number, setNumber] = useState(0);
    const changeNumber = () =>setNumber(n => n === 0 ? rand(5, 25) :  rand(5, 25));

    return (
        <>
        <h2>Homework 1.2</h2>
        <div style={{
        border: 'solid 2px',
        borderRadius: shape,
        height: '150px',
        width: '150px',
        display: 'flex', 
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '5px'
        }}>{number}
        </div>
        <button onClick={changeShape}>Change shape</button>
        <button onClick={changeNumber}>Change number</button>
        </>
    )
    
};

export default HomeworkState2;