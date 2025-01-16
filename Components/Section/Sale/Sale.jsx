import React from 'react';

const Sale = () => {
  return (
    <div className="grid grid-cols-6 py-7 px-12 bg-green-50">
      <div className="py-9 border bg-white">
        <h1 className="font-bold text-black text-[18px] px-5">
          Deals and offers
        </h1>
        <p className="text-gray-200 px-5">
          Hygiene equipments
        </p>
        <img src="time.png" alt="" className="py-6 px-5" />
      </div>
      <div className="border py-6 px-7  bg-white">
        <img src="watch.png" alt="" />
        <h2 className="py-5 text-black">Smart Watches</h2>
        <span className="pb-3 px-7">
          <button className="bg-pink-200 text-sm text-red-700 px-3 rounded-lg">-25%</button>
        </span>
      </div>
      <div className="border py-6 px-7 space-x-2  bg-white">
        <img src="laptop.png" alt="" />
        <h2 className="py-8 text-black px-8">Laptops</h2>
        <span className="pb-3 px-7">
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-15%</button>
        </span>
      </div>
      <div className="border py-6 px-7  bg-white">
        <img src="camera.png" alt="" />
        <h2 className="py-12 text-black">GoPro cameras</h2>
        <span className="pb-2 px-8">
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-40%</button>
        </span>
      </div>
      <div className="border py-6 px-7  bg-white">
        <img src="headphones.png" alt="" />
        <h2 className="py-5 text-black">Headphones</h2>
        <span className="pb-3 px-7">
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-25%</button>
        </span>
      </div>
      <div className="border py-6 px-7 gap-5  bg-white">
        <img src="mobile.png" alt="" />
        <h2 className="py-6 text-black">Canon Cameras</h2>
        <span className="pb-3 px-7">
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-25%</button>
        </span>
      </div>
    </div>
  );
};

export default Sale;