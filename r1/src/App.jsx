import './App.css';
import Kosmosas from './Components/005/Kosmosas.jsx';

const ms = {color: 'crimson', backgroundColor: 'white'};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MAIN CONTENT</h1>
        <Kosmosas spalva='magenta' krastas='40px'></Kosmosas>
        <Kosmosas manoStilius={ms}></Kosmosas>
      </header>
    </div>
  );
};

export default App;
