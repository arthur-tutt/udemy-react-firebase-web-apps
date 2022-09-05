import logo from './logo.svg';
import './App.css';
import { useState } from 'react'




function App() {
  

  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState ([
    {title: "mario's bday bash", id: 1},
    {title: "toads's bday bash", id: 2},
    {title: "peachy's bday bash", id: 3},
  ])

console.log(events)

const handleClick = (id) => {
  setEvents((prevEvents) => {
    return prevEvents.filter((event) => {
      return id !== event.id
    })
  } )
  console.log(id)

}

  return (
    <div className="App">
     
     {showEvents && (
      <div>
      <button onClick ={() => setShowEvents (false) }>hide events</button>
      </div>
     )}


      {!showEvents && (
      <div>
      <button onClick ={() => setShowEvents (true) }>show events</button>
      </div>
      )}

      {showEvents && events.map((event, index ) => (
        <div key={event.id}> 
          <h2>{index} - {event.title} </h2>
          <button onClick ={() => { handleClick(event.id)}}> delete event </button>
        </div>
      ))}
    </div>
  );
}

export default App;
