import React, { useEffect, useState } from 'react'
import Destination from './Destination'
import axios from 'axios'

function Destinations() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    axios.get('/api/v1/destinations', {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        setDestinations(response.data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  // console.log(destinations)
  return (
    <div className="px-20 py-10">
      <div className="mb-8">
        <p className="text-2xl font-semibold">Start Your Adventure</p>
        <p className="text-gray-500">Here’s Our Recommended Travel Destinations</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <Destination key={index} destination={destination} />
        ))}
      </div>
    </div>
  )
}

export default Destinations