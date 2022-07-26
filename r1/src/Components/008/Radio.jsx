import { useState } from "react";

function Radio() {
    
    const [radio, setRadio] = useState('B');

    const handler = e => (
        setRadio(e.target.value)
        )
    
    return (
        <>
        <fieldset className="radio">
            <legend>Radio: <b>{radio}</b>
            </legend>
            <label htmlFor='_a'>A </label><input type='radio' id='_a' name="b" value='A' onChange={handler} checked={radio === 'A'}></input>
            <label htmlFor='_b'>B </label><input type='radio' id='_b' name="b" value='B' onChange={handler} checked={radio === 'B'}></input>
            <label htmlFor='_c'>C </label><input type='radio' id='_c' name="b" value='C' onChange={handler} checked={radio === 'C'}></input>
        </fieldset>
        </>
    )
}


export default Radio;