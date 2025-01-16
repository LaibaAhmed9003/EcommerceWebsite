import React from 'react'

const Services = () => {
  return (
    <div className="px-12 py-6 gap-5">
      {/* Main Header for Services */}
      <h1 className="font-bold text-[17px] lg:text-2xl">
        Our extra services
      </h1>

      {/* Grid layout for the services section */}
      <div className="grid grid-cols-4 p-2 gap-3">
        
        {/* Service 1: Source from Industry Hub */}
        <div className="border border-gray-300 relative">
          <img src="image one.png" alt="Industry Hub" className="object-cover w-full" />
          {/* Overlapping circle image */}
          <img src="circle.png" alt="Circle" className="absolute object-cover" />
          {/* Overlapping vector image */}
          <img src="vector1.png" alt="Vector" className="absolute object-cover py-4 px-3" />
          <p>Source from</p>
          <p>Industry Hub</p>
        </div>

        {/* Service 2: Customize Your Products */}
        <div className="border border-gray-300 relative">
          <img src="image two.png" alt="Custom Products" className="object-cover w-full" />
          {/* Overlapping circle image */}
          <img src="circle.png" alt="Circle" className="absolute space-x-1" />
          {/* Overlapping vector image */}
          <img src="vector2.png" alt="Vector" className="absolute object-cover py-4 px-3" />
          <p>Customize Your Products</p>
        </div>

        {/* Service 3: Fast, reliable shipping */}
        <div className="border border-gray-300 relative">
          <img src="image three.png" alt="Fast Shipping" className="object-cover w-full" />
          <div>
            {/* Overlapping circle image */}
            <img src="circle.png" alt="Circle" className="absolute object-cover" />
            {/* Overlapping vector image */}
            <img src="Vector3.png" alt="Vector" className="absolute object-cover py-4 px-3" />
          </div>
          <p>Fast, reliable shipping</p>
          <p>by ocean or air</p>
        </div>

        {/* Service 4: Product monitoring and inspection */}
        <div className="border border-gray-300 relative">
          <img src="image four.png" alt="Product Monitoring" className="object-cover w-full" />
          <div className="px-5 py- space-x-2">
            {/* Overlapping circle image */}
            <img src="circle.png" alt="Circle" className="absolute object-cover" />
            {/* Overlapping vector image */}
            <img src="vector4.png" alt="Vector" className="absolute object-cover py-4 px-3" />
          </div>
          <p>Product monitoring</p>
          <p>and inspection</p>
        </div>
      </div>
    </div>
  )
}

export default Services;
