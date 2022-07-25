/* Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.
 */

import { useState } from "react";

function HomeworkState21() {
   
    const [ azuolas, setAzuolas ] = useState([]);
    const [ berzas, setBerzas ] = useState([]);
    const [ uosis, setUosis ] = useState([]);
    const addAzuolas = () => {setAzuolas(s => [...s, 'Azuolas'])};
    const addBerzas = () => {setBerzas(s => [...s, 'Berzas'])};
    const addUosis = () => {setUosis(s => [...s, 'Uosis'])};

    return (
        <>
        <h2>Homework 2.1</h2>
        <div style={{display: 'flex', width: '100%', height: '800px', backgroundColor: 'green', boxSizing: 'border-box'}}>
            <div style={{width: '30%px', backgroundColor: 'green'}}>
            <button onClick={addAzuolas} style={{width: '45px', height: '40px'}}>Add azuolas</button>
            {
                azuolas.map((a, i) => <div style={{margin: '20px 20px', width: '100px', height: '100px', border: '1px solid black'}} key={i}>{a}</div>)
            }
            </div>
            <div style={{width: '30%', backgroundColor: 'green'}}>
            <button onClick={addBerzas} style={{width: '45px', height: '40px'}}>Add berzas</button>
                {
                    berzas.map((a, i) => <div style={{margin: '20px 20px', width: '100px', height: '100px', border: '1px solid red'}} key={i}>{a}</div>)
                }
            </div>
            <div style={{width: '30%', backgroundColor: 'green'}}>
            <button onClick={addUosis} style={{width: '45px', height: '40px'}}>Add uosis</button>
            {
                uosis.map((a, i) => <div style={{margin: '20px 20px', width: '100px', height: '100px', border: '1px solid red'}} key={i}>{a}</div>)
            }
            </div>
        </div>
        </>
    )
    
};

export default HomeworkState21;