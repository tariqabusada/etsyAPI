import {useState, useRef} from 'react';
// import axios from 'axios';
import './App.css';


function App() {
  const [keyword, setKeyword] = useState<string>('Christmas');
  const [open, setOpen] = useState<boolean>(false);
  const kInput = useRef<any>(null);

  const handleKeyword = () => {
    setOpen(true)
  }
  const handleInput = () => {
    if(kInput.current){
      console.log(kInput)
      setKeyword(kInput.current.value)
      kInput.current.value = null;
    }
  }
  // useEffect(()=>{
  //   axios.get()
  // },[keyword])
  return (
    <>
    <h3 className='App-header'>This is my successfully setup React App 💯🥇</h3>
    <label className='kw-labl'> keyword: <input className='kw-input' ref={kInput} value={keyword} onChange={handleInput}/></label>
    <button className='search-btn' type='button' onClick={handleKeyword}>search</button>
    {open? <p>the {keyword} already handled :alarm_clock :abacus:</p> : <></>}
    </>
  );
}

export default App;