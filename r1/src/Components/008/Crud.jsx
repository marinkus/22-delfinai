

const animals = [
    {value: 1, text: 'avis'},
    {value: 2, text: 'antis'},
    {value: 3, text: 'antilope'},
];

function Crud() {
    return (
        <>
        <fieldset>
            <legend>Ganykla</legend>
            <select value={select} onChange={handleInput}>
                {
                    animals.map(o => <option key={o.value} value={o.value}>{o.text}</option>)
                }
            </select>
            <button>Button</button>
        </fieldset>
        </>
    )
};

export default Crud;