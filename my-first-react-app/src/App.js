import logo from './logo.svg';
import './App.css';
import { useState } from 'react'




function App() {
  const [name, setName] = useState('mario')

  const [events, setEvents] = useState ([
    {title: "mario's bday bash", id: 1},
    {title: "toads's bday bash", id: 2},
    {title: "peachy's bday bash", id: 3},
  ])



const handleClick = () => {
  setName('luigi')
  console.log(name)
}

  return (
    <div className="App">
      <h1> my name is {name}</h1>
      <button onClick = {handleClick} > Change Name</button>
      {events.map((event, index ) => (
        <div key={event.id}> 
          <h2>{index} - {event.title} </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
