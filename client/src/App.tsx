import {useState} from 'react';
import './App.css'

function App() {
  const [keyword, setKeyword] = useState<string>('Christmas');
  
  return (

    <h3 className='App-header'>This is my successfully setup React App 💯🥇</h3>
  );
}

export default App;