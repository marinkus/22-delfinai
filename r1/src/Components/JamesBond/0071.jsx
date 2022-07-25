import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Kv from './Kv.jsx';
import Count from './Components/JamesBond/Count';




function App() {

    const [kv, setKv] = useState([]);

    

    const kvPressed = () => {
        setKv(k => [...k, '']);
        console.log('Pressed 1')
    };

        useEffect(() => {
          if (!kv.length === 0) {
            return
          }
          console.log('Pressed 2');
        }, [kv]);
    

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={kvPressed}>State</h1>
            <div className='kv-bin'>
                {
                    kv.map((c, i) => <Kv key={i} c={c}></Kv>)
                }
                <Count start={127}></Count>
            </div>
      </header>
    </div>
  );
};

export default App;