/* Sukurti komponentą su mygtuku ir įvedimo laukeliu. Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių kvadratėlių papildomai prisideda naujas laukelyje nurodytas kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti pavaizduotas rand skaičius 100 - 200.
 */

import { useState } from "react";

function HW1() {
    const [text, setText] = useState('');
    const handleInput = e => {
        setText(e.target.value);
    };

    return (
        <>
        <fieldset>
            <legend>Homework: Forms #1</legend>
            <input type="text" value={text} onChange={handleInput}/>
            <button>Click</button>
            <div></div>
        </fieldset>
        </>
    );
};

export default HW1;