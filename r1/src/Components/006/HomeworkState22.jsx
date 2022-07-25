/* Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina
 */

import { useState } from "react";

function HomeworkState22() {
   
    const [ square, setSquare ] = useState([]);
    const addSquare = () => {setSquare(s => [...s, ''])};

    return (
        <>
        <h2>Homework 2.2</h2>
            <div>
            <button onClick={addSquare}>Add black square</button>
            </div>
        <div style={{display: 'flex', width: '100%', flexWrap: "wrap"}}>
            {
                square.map((a, i) => <div style={{margin: '20px 20px', width: '50px', height: '50px', backgroundColor: 'black', color: 'white'}} key={i}>{i}</div>)
            }
        </div>
        </>
    )
    
};

export default HomeworkState22;