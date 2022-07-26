import { useState } from "react";

function Select() {

    const [select, setSelect] = useState(1000);
    const [selected, setSelected] = useState(1000);

    const handleInput = e => {
        setSelect(e.target.value);
        };

    return (
        <>
        <fieldset>
            <legend>Selected: {selected}</legend>
            <select value={select} onChange={handleInput}>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="1000">Thousand</option>
            </select>
            <button onClick={() => setSelected(select)}>Button</button>
        </fieldset>
        </>
    )
};

export default Select;