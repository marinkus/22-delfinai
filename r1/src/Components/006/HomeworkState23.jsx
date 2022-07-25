/* Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. Paspaudus mygtuką skaičius didėtų vienetu. Panaudoti localStorage ir padaryti taip, kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0, o nuo prieš tai buvusio skaičiaus */

import { useLocalStorage } from "./LocalStorage";

function HomeworkState23() {
   
    const [ number, setNumber ] = useLocalStorage(0);
    const addNumber = () => setNumber(s => s + 1);

    return (
        <>
        <h2>Homework 2.3</h2>
            <div>
                {number}
            <button onClick={addNumber}>+</button>
            </div>
        </>
    )
    
};

export default HomeworkState23;