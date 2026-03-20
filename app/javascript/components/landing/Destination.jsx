import React from 'react'

function Destination() {
  return (
    <>
      <div className="border p-3 rounded shadow bg-white w-65 h-[420px] flex flex-col justify-between cursor-pointer">

          {/* <!-- IMAGE SECTION --> */}
          <div>
            {/* <% if destination.images.attached? %> */}
            <div data-controller="auto-scroll" className="w-full">
              <div data-auto-scroll-target="container"
              className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth gap-2 h-40">
              {/* <% destination.images.each do |image| %> */}
              {/* <%= image_tag(image, className: "rounded-lg h-40 w-full object-cover") %> */}
              {/* <% end %> */}
            </div>
          </div>
          {/* <% else %> */}
          <div className="h-40 flex items-center justify-center bg-gray-100 rounded">
            <p>No images attached.</p>
          </div>
          {/* <% end %> */}
        </div>

        {/* <!-- CONTENT SECTION --> */}
        <div className="flex flex-col gap-1 mt-3 flex-grow">

          <h2 className="text-lg font-medium truncate">
            {/* <%= destination.name %> */}
          </h2>

          <p className="text-sm text-gray-600 truncate">
            {/* <%= destination.location %> */}
          </p>

          {/* <!-- DESCRIPTION WITH FIXED HEIGHT --> */}
          <div className="relative group">
            <p className="text-sm line-clamp-2 overflow-hidden">
              {/* <%= destination.description.presence || "" %> */}
            </p>

            {/* <!-- HOVER FULL TEXT --> */}
            <div className="absolute hidden group-hover:block bg-white border p-1 rounded shadow-lg text-sm z-10 w-58 break-words">
              {/* <%= destination.description %> */}
            </div>
          </div>

        </div>

        {/* <!-- BUTTON SECTION --> */}
        <div className="mt-3">
          {/* <%= link_to "Check Buses",
          destination_buses_path(destination),
          className: "block text-center px-4 py-2 bg-black text-white rounded" %> */}
        </div>

        </div>
    </>
  )
}

export default Destination
