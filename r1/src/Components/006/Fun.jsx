import { useState } from "react";

function Fun({spalva}) {


    const [bg, setBg] = useState('indigo');
    const [count, setCount] = useState(0);

    const changeBg = () => {
        // setBg('crimson');
        setBg(b => b === 'indigo' ? 'crimson' : 'indigo')
        console.log(bg);

    };
    const addOne = () => {
        setCount(c => c + 1);
    };

    return (
        <>
        <h2 style={{
            color: spalva,
            backgroundColor: bg
        }}>Fun {count}</h2>
        <button onClick={changeBg}>Do Crimson</button>
        <button onClick={addOne}>+ 1</button>
        </>
    )
};

export default Fun;