/* Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.
 */

import { useState } from "react";

function HomeworkState21() {
   
    const [ hardwood, setHardwood ] = useState([]);
    const addAzuolas = () => {setHardwood(s => [...s, 'Azuolas'])};
    const addBerzas = () => {setHardwood(s => [...s, 'Berzas'])};
    const addUosis = () => {setHardwood(s => [...s, 'Uosis'])};

    return (
        <>
        <h2>Homework 2.1</h2>
            <div style={{display: 'flex', width: '33%', flexWrap: "wrap", backgroundColor: 'green'}}>
            <button onClick={addAzuolas} style={{width: '45px', height: '25px'}}>Add azuolas</button>
            {
                hardwood.map((a, i) => <div style={{margin: '20px 20px', width: '160px', height: '160px', border: '1px solid black'}} key={i}>{a}</div>)
            }
            </div>
            <div style={{display: 'flex', width: '33%', flexWrap: "wrap", backgroundColor: 'green'}}>
            <button onClick={addBerzas} style={{width: '45px', height: '25px'}}>Add berzas</button>
                {
                    hardwood.map((a, i) => <div style={{margin: '20px 20px', width: '160px', height: '160px', border: '1px solid red'}} key={i}>{a}</div>)
                }
            </div>
            <div style={{display: 'flex', width: '33%', flexWrap: "wrap", backgroundColor: 'green'}}>
            <button onClick={addUosis} style={{width: '45px', height: '25px'}}>Add uosis</button>
            {
                hardwood.map((a, i) => <div style={{margin: '20px 20px', width: '160px', height: '160px', border: '1px solid red'}} key={i}>{a}</div>)
            }
            </div>
        <div>
        </div>
        </>
    )
    
};

export default HomeworkState21;