import { useState } from "react";

const options = [
    {value: 1, text: 'One'},
    {value: 2, text: 'Two'},
    {value: 3, text: 'Three'},
    {value: 1000, text: 'Thousand'},
];


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
                {
                    options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)
                }
            </select>
            <button onClick={() => setSelected(options.find(o => select == o.value).text)}>Button</button>
        </fieldset>
        </>
    )
};

export default Select;