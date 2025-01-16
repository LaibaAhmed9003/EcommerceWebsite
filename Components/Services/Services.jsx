import React from 'react'

const Services = () => {
  return (
    <div className="px-12 py-6 gap-5">
      <h1 className="font-bold text-[17px] lg:text-2xl">
        Our extra services
      </h1>
      <div className="grid grid-cols-4 p-2 gap-3 ">
        <div className=" border border-gray-300">
          <img src="image one.png" alt="" className="object-cover w-full" />
          <img src="circle.png" alt="" className="absolute object-cover" />
          <img src="vector1.png" alt="" className="absolute object-cover py-4 px-3 " />
          <p>
            Source from </p>
          <p>
            Industry Hub
          </p>

        </div>

        <div className=" border border-gray-300">
          <img src="image two.png" alt="" className="object-cover w-full" />
          <img src="circle.png" alt="" className="absolute space-x-1" />
          <img src="vector2.png" alt="" className="absolute object-cover py-4 px-3 " />
          <p>
            Customize Your Products</p>

        </div>
        <div className=" border border-gray-300">
          <img src="image three.png" alt="" className="object-cover w-full" />
          <div>

            <img src="circle.png" alt="" className="absolute object-cover" />
            <img src="Vector3.png" alt="" className="absolute object-cover py-4 px-3 " />
          </div>

          <p>
            Fast, reliable shipping </p>
          <p>
            by ocean or air
          </p>

        </div>
        <div className=" border border-gray-300">
          <img src="image four.png" alt="" className="object-cover w-full" />
          <div className="px-5 py- space-x-2" >

            <img src="circle.png" alt="" className="absolute object-cover" />
            <img src="vector4.png" alt="" className="absolute object-cover py-4 px-3 " />
          </div>
          <p>
            Product monitoring </p>
          <p>
            and inspection
          </p>

        </div>
      </div>
    </div>
  )
}

export default Services
