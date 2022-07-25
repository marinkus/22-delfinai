import './App.css';
import Homework3 from './Homework3';
import Homework4 from './Homework4';
import Homework5 from './Homework5';
import Kosmosas from './Kosmosas.jsx';
import Homework1 from './Homework1';
import rand from '../../Functions/rand';
import HomeworkList1 from './HomeworkList1';
import HomeworkList2 from './HomeworkList2';
import HomeworkList3 from './HomeworkList3';
import HomeworkList4 from './HomeworkList4';
import HomeworkList5 from './HomeworkList5';

const ms = {color: 'crimson', backgroundColor: 'white'};

const arr = ['Pilkis', 'Murkis', 'Gagarinas'];
const kvadratas = {border: 'solid 2px', height: '150px', width: '150px', display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', marginTop: '5px'};
const apskritimas = {border: 'solid 2px', borderRadius: '100px', height: '150px', width: '150px', display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', marginTop: '5px'};



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
        <HomeworkList1 squareStyle={kvadratas}></HomeworkList1>
        <HomeworkList2 circleStyle={apskritimas}></HomeworkList2>
        <HomeworkList3 squareStyle={kvadratas} circleStyle={apskritimas}></HomeworkList3>
        <HomeworkList4></HomeworkList4>
        <HomeworkList5></HomeworkList5>
        </body>

    </div>
  );
};

export default App;
