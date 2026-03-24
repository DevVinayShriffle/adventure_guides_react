import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Buses() {
  const {id}=useParams()
  const[buses, setBuses]=useState([]);
  const navigate=useNavigate();
  
  const handleGoBack = ()=>{
    navigate(-1)
  }

  useEffect(()=>{
    axios.get('/api/v1/buses', {params: {destination_id: id}})
    .then(response=>{
      setBuses([...response.data])
      // console.log(buses)
    }).catch(error=>console.error(`Error Fetching data: ${error}`))
  },[id])

  function handleBus(bus) {
    // console.log(bus)
    navigate(`/buses/${bus.id}`)
  }

  return (
    <>
      <div>
        <div className="px-20 py-10">
          <div className="mb-8">
            <p className="text-2xl font-semibold">Start Your Adventure</p>
            <p className="text-gray-500">Here’s Our Recommended Travel Destinations</p>
          </div>
          <button className='bg-black text-white px-3 py-2 rounded' onClick={handleGoBack}>
            Go Back
          </button>

          {/* <div className="grid grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Destination key={destination.id} destination={destination} />
            ))}
          </div> */}
          {buses.map((bus, index)=>(
            <div key={index} className="border p-3 rounded shadow bg-white w-65 h-[420px] flex flex-col justify-between"
              onClick={()=>handleBus(bus)}>

              <div className="h-40 flex items-center justify-center bg-gray-100 rounded">
                <p>No images attached.</p>
              </div>

              <div className="flex flex-col gap-1 mt-3 flex-grow">

                <h2 className="text-lg font-medium truncate">
                  {bus.name}
                </h2>

                <p className="text-sm text-gray-600 truncate">
                  {bus.type}
                </p>

                <p className="text-sm text-gray-600 truncate">
                  {bus.capacity}
                </p>

                <p className="text-sm text-gray-600 truncate">
                  {bus.price}
                </p>

              </div>

              <div className="mt-3">
                <button className="px-4 py-2 bg-black text-white rounded">
                  Check Schedule
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default Buses
