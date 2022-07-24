/* Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3
 */

import { useState } from "react";

function HomeworkState3() {
   
    const [number, setNumber] = useState(0);
    const increaseNumber = () => setNumber(n =>  n + 1);
    const decreaseNumber = () => setNumber(n =>  n - 3);

    return (
        <>
        <h2>Homework 1.3</h2>
        <div>
            {number}
        </div>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
        </>
    )
    
};

export default HomeworkState3;