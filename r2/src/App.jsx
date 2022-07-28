import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';
import { useEffect, useState } from 'react';
import { create, read } from './Functions/localStorage';
import List from './Components/List';

const animalsTypes = [
  { id: 1, type: 'Antis' },
  { id: 2, type: 'Avis' },
  { id: 3, type: 'Antilopas' },
  { id: 4, type: 'Bebras' },
  { id: 5, type: 'Briedis' },
  { id: 6, type: 'Barsukas' }
];
const keyLock = 'myHerd';

function App() {

  const [createData, setCreateData] = useState(null);
  const [animals, setAnimals] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    setAnimals(read(keyLock))
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(keyLock, createData);
    setLastUpdate(Date.now());
  }, [createData]);
  

  return (
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData,
      animals
    }}>
      <div className='container'>
        <div className="row">
          <div className="col-4">
            <Create></Create>
          </div>
          <div className="col-8">
            <List></List>
          </div>
        </div>
      </div>
    </AnimalsContext.Provider>
  );
}

export default App;
