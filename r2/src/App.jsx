import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';
import { useEffect, useState } from 'react';
import { create, read, destroy } from './Functions/localStorage';
import List from './Components/List';
import Edit from './Components/Edit';

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

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [animals, setAnimals] = useState(null);


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
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(keyLock, deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);


  return (
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData,
      animals,
      setDeleteData,
      modalData,
      setModalData
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
      <Edit></Edit>
    </AnimalsContext.Provider>
  );
}

export default App;
