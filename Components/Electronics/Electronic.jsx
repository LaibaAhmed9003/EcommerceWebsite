import React from 'react';

const Electronics = () => {
  return (
    <div className="flex items-start py-2 px-10">
      {/* Left Panel */}
      <div className="relative flex bg-pink-100">
        <img
          src="image 2.png"
          alt="Home and Outdoor"
          className="rounded-t-lg h-full w-full shadow"
        />
        <div className="absolute top-2 text-black w-full h-full space-x-1  gap-4 bg-opacity-30 flex flex-col items-start px-5 py-4 rounded">
          <span className="font-bold">Consumer Electronics and Gadget </span>
          <button className="bg-white text-black py-2 p-3  px-5 rounded">
            Source now
          </button>
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-4 ml-0 ">
        {/* Card 1 */}
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Smart Watches</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 19</p>
          </div>
          <img src="watch.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Cameras</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 89</p>
          </div>
          <img src="camera.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Headphones</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 10</p>
          </div>
          <img src="headphone.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Smart Watches</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 90</p>
          </div>
          <img src="kettle.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Gaming Set</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 35</p>
          </div>
          <img src="headphones.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Laptops and PC</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 340</p>
          </div>
          <img src="laptop.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Smart Phones</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 19</p>
          </div>
          <img src="phone.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
        <div className="border p-2 flex flex-col justify-between text-start bg-white rounded shadow h-[130px]">
          <div>
            <h2 className="text-black  text-[15px]">Iphone</h2>
            <p className="text-gray-400 text-[11px]">From</p>
            <p className="text-gray-400  text-[11px]">USD 240</p>
          </div>
          <img src="iphone.png" alt="Soft chairs" className="h-16 self-end" />
        </div>
      </div >
    </div >

  );
};

export default Electronics;









