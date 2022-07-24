/* Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.
 */

import { useState } from "react";

function HomeworkState4() {
   
    const [ square, setSquare ] = useState([]);
    const addSquare = () => {setSquare(s => [...s, ''])};

    return (
        <>
        <h2>Homework 1.4</h2>
            <button onClick={addSquare}>Add square</button>
        <div style={{display: 'flex', width: '100%', flexWrap: "wrap"}}>
            {
                square.map((a, i) => <div style={{margin: '20px 20px', width: '50px', height: '50px', backgroundColor: 'blue'}} key={i}></div>)
            }
        </div>
        </>
    )
    
};

export default HomeworkState4;