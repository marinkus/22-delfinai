import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import M1 from './Components/009/M1';
import GlobalContext from './Contexts/GlobalContext';





function App() {

  const sandeliukas = useRef(5);

  const good = useRef();

  const [count, setCount] = useState(0);

  const doCount = () => {

    const knopke = good.current;

    console.log(knopke);

    setCount(c => c + 1);
    sandeliukas.current++;
    console.log(sandeliukas.current);
  };

  return (
    <GlobalContext.Provider value={{
      pirmas: 'Valio',
      spalva: 'pink'
    }}>
      <div className="App">
        <header className="App-header">
          <h1>009: useContext & useRef {count}</h1>
          <M1 kas='Penki'></M1>
          <button ref={good} onClick={doCount}>+1</button>
        </header>
      </div>
    </GlobalContext.Provider>
  );
};


export default App;