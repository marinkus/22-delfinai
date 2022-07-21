import { useState } from 'react';
import './App.css';
// import Fun from './Components/006/Fun';
// import Sad from './Components/006/Sad';



function App() {
    // const [count, setCount] = useState(0);
    const [kv, setKv] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={()=> setKv(k => [...k, ''])}>State</h1>
            {/* <Fun spalva='magenta' setCount={setCount}></Fun>
            <Sad count={count}></Sad> */}
            <div className='kv-bin'>
                {
                    kv.map((_, i) => <div className='kv' key={i}></div>)
                }
            </div>
      </header>
    </div>
  );
};

export default App;