import { useState } from "react";


const animals = [
    {value: 1, text: 'avis'},
    {value: 2, text: 'antis'},
    {value: 3, text: 'antilope'},
];

function Crud() {
    const [select, setSelect] = useState(1);
    const [selected, setSelected] = useState(1);

    const handleInput = e => {
        setSelect(e.target.value);
        };

    return (
        <>
        <fieldset>
            <legend>Ganykla</legend>
            <select value={select} onChange={handleInput}>
                {
                    animals.map(o => <option key={o.value} value={o.value}>{o.text}</option>)
                }
            </select>
            <button onClick={() => setSelected(animals.find(o => select == o.value).text)}>Button</button>
        </fieldset>
        </>
    )
};

export default Crud;