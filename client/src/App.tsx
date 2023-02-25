/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [keyword, setKeyword] = useState<string>('Christmas');
  const [open, setOpen] = useState<boolean>(false);
  // const [input, setinput] = useRef()
  const handleKeyword = () => {
    setOpen(true)
  }
  // useEffect(()=>{
  //   axios.get()
  // },[keyword])
  return (
    <>
    <h3 className='App-header'>This is my successfully setup React App 💯🥇</h3>
    <label className='kw-labl'> keyword: <input className='kw-input' value={keyword}/></label>
    <button className='search-btn' type='button' onClick={handleKeyword}>search</button>
    {open? <p>the key word already handled :alarm_clock :abacus:</p> : <></>}
    </>
  );
}

export default App;