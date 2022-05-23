import React from 'react';
import './App.css';
import Login from './components/FormArea'
import Render from './components/RenderArea';
import {useState} from 'react';

function App() {
  const [data, setData] = useState(new Array)
  console.log(data)
  return (
    <div className='App'>
      <Login data={data} setData={setData}/>
      <Render data={data} setData={setData}/>
    </div>
  );
}

export default App;
