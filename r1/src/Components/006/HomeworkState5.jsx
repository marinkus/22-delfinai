/* Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina
 */

import { useState } from "react";

function HomeworkState5() {
   
    const [ square, setSquare ] = useState([]);
    const addRedSquare = () => {setSquare(s => [...s, 'red'])};
    const addBlueSquare = () => {setSquare(s => [...s, 'blue'])};
    const resetSquare = () => {setSquare([])}

    return (
        <>
        <h2>Homework 1.5</h2>
            <div>
            <button onClick={addRedSquare}>Add red square</button>
            <button onClick={addBlueSquare}>Add blue square</button>
            <button onClick={resetSquare}>Reset</button>
            </div>
        <div style={{display: 'flex', width: '100%', flexWrap: "wrap"}}>
            {
                square.map((a, i) => <div style={{margin: '20px 20px', width: '50px', height: '50px', backgroundColor: a}} key={i}></div>)
            }
        </div>
        </>
    )
    
};

export default HomeworkState5;