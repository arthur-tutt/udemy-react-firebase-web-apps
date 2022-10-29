import { useState, useEffect } from "react"

// styles 
import './TripList.css'


export default function TripList() {

    const [trips, setTrips] = useState([])
    const [url, setURL] = useState('http://localhost:3000/trips')

  useEffect(() => {
    fetch (url) 
    .then(response => response.json())
    .then(json => setTrips(json))
  } , [url])

    console.log(trips)



  return (
    <div className="trip-list">
        <h2>Trip List</h2>
        <ul>
          {trips.map(trip => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
        </ul>
        <div className="filters">
          <button onClick ={() => setURL('http://localhost:3000/trips?location=europe')}>
            Europe Trips
          </button>
          <button onClick ={() => setURL('http://localhost:3000/trips?location=usa')}>
            USA Trips
          </button>
        </div>
    </div>
  )
}
