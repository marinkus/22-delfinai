import { useState, useEffect } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import axios from 'axios';




function App() {

  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [msg, setMsg] = useState('Labas');
  const [lastUpdate, setLastUpdate] = useState(Date.now());


  useEffect(() => {
    axios.get('http://animals.zoo/react/list')
      .then(res => setAnimals(res.data));
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post('http://animals.zoo/react/list', createData)
      .then(res => {
        setLastUpdate(Date.now());
      })

  }, [createData])

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios.put('http://animals.zoo/react/list/' + editData.id, editData)
    .then(res => {
      setLastUpdate(Date.now());
    })
  }, [editData]);
  
  const showMsg = msg => {
    setMsg(msg);
    setTimeout(() => setMsg(null), 3000);
  }

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios.delete('http://animals.zoo/react/list/' + deleteData.id)
      .then(res => {
        setLastUpdate(Date.now());
      })

  }, [deleteData])




  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Create setCreateData={setCreateData} />
        </div>
        <div className="col-7">
          <List list={animals} setDeleteData={setDeleteData} setModalData={setModalData}/>
        </div>
      </div>
    </div>
    <Edit setModalData={setModalData} modalData={modalData} setEditData={setEditData}/>
    </>
  );
}

export default App;