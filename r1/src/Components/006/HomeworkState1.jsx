//Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

import { useState } from "react"

function HomeworkState1() {
    const [shape, setShape] = useState('0px');
    const changeShape = () => setShape(f => f === '0px' ? '100px' : '0px')

    return (
        <>
        <h2>Homework 1.1</h2>
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
        }}>
        </div>
        <button onClick={changeShape}>Change shape</button>
        </>
    )
    
};

export default HomeworkState1;