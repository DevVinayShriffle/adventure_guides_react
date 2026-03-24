import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Bus() {
  const {id}=useParams()
  const[bus, setBus]=useState(null)
  const navigate=useNavigate()

  const handleGoBack = ()=>{
    navigate(-1)
  }
  
  useEffect(()=>{
    axios.get(`/api/v1/buses/${id}`)
    .then(response=>{
      setBus(()=>(response.data))
    }).catch(error=>console.error(`Error fetching API : ${error}`))
  },[id])
  
  if(!bus){
    return (
    <>
      <p>Loading bus....</p>
    </>
    )
  }

  return (
    <>
      <div className='m-auto w-full p-3 '>
        <button className='bg-black text-white px-3 py-2 rounded' onClick={handleGoBack}>
          Go Back
        </button>
        <p>Bus Name: {bus.name}</p>
        <p>Type: {bus.bus_type}</p>
        <p>Capacity: {bus.capacity}</p>
        <p>Price: {bus.price}</p>
        {
          bus.image_urls.map((image, index)=>(
            <img key={index} src={image} className='w-50 h-50 rounded' />
          ))
        }
        {bus.bus_stops.map((stop, index)=>(
          <div key={index} className='flex justify-around items-center gap-2'>
            <p>{stop.name}</p>
            <p> {stop.stop_type}</p>
          </div>
        ))}
        {
          bus.schedules.map((schedule, index)=>(
            <div key={index} className='border-4 border-blue-500 border-dashed rounded-lg p-4'>
              <p>Arrival: {schedule.arrival}</p>
              <p>Departure: {schedule.departure}</p>
              <p>Available seats: {schedule.available_seats}</p>
              <button className='bg-black text-white rounded px-3 py-2'>Book schedule</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Bus
