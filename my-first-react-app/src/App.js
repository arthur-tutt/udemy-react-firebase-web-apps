import logo from './logo.svg';
import './App.css';
import { useState } from 'react'




function App() {
  const [name, setName] = useState('mario')



const handleClick = () => {
  setName('luigi')
  console.log(name)
}

  return (
    <div className="App">
      <h1> my name is {name}</h1>
      <button onClick = {handleClick} > Change Name</button>
    </div>
  );
}

export default App;
