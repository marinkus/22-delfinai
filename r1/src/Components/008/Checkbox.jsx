import { useEffect } from "react";
import { useState } from "react";



function Checkbox() {

    const [checkbox, setCheckbox] = useState({A: false, B: true, C:true, D:false});

    const [checked, setChecked] = useState(['B', 'C']);

    const handleInput = e => {
        setCheckbox(c => ({...c, [e.target.value] : !c[e.target.value]}));
        };


    useEffect(() => {
        const box = [];
        for (const b in checkbox) {
            if (checkbox[b]) {
                box.push(b);
            }
        }
        setChecked(box);
    }, [checkbox])

    return (
        <>
        <fieldset>
            <legend>Checked: {
                    checked.map(b => <b key={b}>{b}</b>)  
                }
            </legend>
            A <input type='checkbox' value='A' checked={checkbox.A} onChange={handleInput}></input>
            B <input type='checkbox' value='B' checked={checkbox.B} onChange={handleInput}></input>
            C <input type='checkbox' value='C' checked={checkbox.C} onChange={handleInput}></input>
            D <input type='checkbox' value='D' checked={checkbox.D} onChange={handleInput}></input>
        </fieldset>
        </>
    )
};

export default Checkbox;