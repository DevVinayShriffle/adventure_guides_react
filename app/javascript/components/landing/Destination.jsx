import React from 'react'

function Destination({ destination }) {
  return (
    <div className="border p-3 rounded shadow bg-white w-65 h-[420px] flex flex-col justify-between">

      <div className="h-40 flex items-center justify-center bg-gray-100 rounded">
        <p>No images attached.</p>
      </div>

      <div className="flex flex-col gap-1 mt-3 flex-grow">

        <h2 className="text-lg font-medium truncate">
          {destination.name}
        </h2>

        <p className="text-sm text-gray-600 truncate">
          {destination.location}
        </p>

        <p className="text-sm line-clamp-2">
          {destination.description}
        </p>

      </div>

      <div className="mt-3">
        <button className="px-4 py-2 bg-black text-white rounded">
          Check Buses
        </button>
      </div>

    </div>
  )
}

export default Destination
