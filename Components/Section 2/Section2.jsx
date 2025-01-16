import React from "react";

const Section = () => {
  return (
    <div className="flex items-start py-7 px-10">
      {/* Left Panel */}
      <div className="relative flex bg-pink-100">
        <img
          src="images.jpg"
          alt="Home and Outdoor"
          className="rounded-t-lg h-full w-full shadow"
        />
        <div className="absolute top-2 text-black w-full h-full space-x-1  gap-4  bg-opacity-30 flex flex-col items-start px-5 py-4 rounded">
          <span className="font-bold">Home and outdoor</span>

          <button className="bg-white text-black py-2 p-3 px-5 rounded">
            Source now
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-3/4 grid grid-cols-4 ml-0 ">
        {/* Card 1 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Soft chairs</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 19</p>
          </div>
          <img src="1.png" alt="Soft chairs" className="h-16 self-end" />
        </div>

        {/* Card 2 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black text-[13px]">Sofa & chair</h2>
            <p className="text-gray-400 text-[10px]">From</p>
            <p className="text-gray-400  text-[10px]">USD 19</p>
          </div>
          <img src="lamp.png" alt="Sofa and chair" className="h-18 self-end" />
        </div>

        {/* Card 3 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Kitchen dishes</h2>
            <p className="text-gray-400 text-[10px]">From</p>
            <p className="text-gray-400  text-[10px]">USD 19</p>
          </div>
          <img src="5.png" alt="Kitchen dishes" className="h-16 self-end" />
        </div>

        {/* Card 4 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black text-[15px]">Smart watches</h2>
            <p className="text-gray-500 text-[11px]">From</p>
            <p className="text-gray-500  text-[11px]">USD 19</p>
          </div>
          <img src="3.png" alt="Smart watches" className="h-16 self-end" />
        </div>

        {/* Card 5 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black text-[15px]">Kitchen mixer</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400 text-[11px]">USD 100</p>
          </div>
          <img src="9.png" alt="Kitchen mixer" className="h-16 self-end" />
        </div>

        {/* Card 6 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Blenders</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400 text-[11px]">USD 39</p>
          </div>
          <img src="8.png" alt="Blenders" className="h-16 self-end" />
        </div>

        {/* Card 7 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">
              Home appliances
            </h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 19</p>
          </div>
          <img src="7.png" alt="Home appliances" className="h-16 self-end" />
        </div>

        {/* Card 8 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Coffee maker</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 10</p>
          </div>
          <img src="4.png" alt="Coffee maker" className="h-16 self-end" />
        </div>
      </div>
    </div>
  );
};
export default Section;
