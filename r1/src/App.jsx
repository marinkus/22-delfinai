import './App.css';
import Kosmosas from './Components/005/Kosmosas.jsx';

const ms = {color: 'crimson', backgroundColor: 'white'};

const arr = ['Pilkis', 'Murkis', 'Gagarinas'];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MAIN CONTENT</h1>

        {
          arr.map((n, i) => <h2 key={i}>{n}</h2>)
        }
        <Kosmosas spalva='magenta' krastas='40px'></Kosmosas>
        <Kosmosas manoStilius={ms}></Kosmosas>
      </header>
    </div>
  );
};

export default App;
