/* Sukurti aplikaciją su vienu mygtuku “pridėti”. Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje. Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus 3 - atsirastų 3 ir t.t. Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje esantis skaičius didėtų vienetu (kiekviename kvadrate atskirai).
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