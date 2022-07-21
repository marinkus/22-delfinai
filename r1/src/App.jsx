import './App.css';
import Homework3 from './Components/005/Homework3';
import Homework4 from './Components/005/Homework4';
import Homework5 from './Components/005/Homework5';
import Kosmosas from './Components/005/Kosmosas.jsx';
import Homework1 from './Components/005/Homework1';
import rand from './Functions/rand';

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
        <body className='App-header'>          
        <Homework1 capitalize='uppercase'></Homework1>
        <Homework3 randomProp={rand(1, 2)}></Homework3>
        <Homework4 text1='Bet koks tekstas h1 tage' text2='Bet koks tekstas h2 tage'></Homework4>
        <Homework5 text1='Bet koks tekstas h1 tage' text2='Bet koks tekstas h2 tage' color='magenta'></Homework5>
        </body>

    </div>
  );
};

export default App;
