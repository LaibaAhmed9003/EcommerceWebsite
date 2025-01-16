import React from 'react';

const Sale = () => {
  return (
    <div className="grid grid-cols-6 py-7 px-12 bg-green-50">
      {/* First Sale Item: Deals and offers Section */}
      <div className="py-9 border bg-white">
        <h1 className="font-bold text-black text-[18px] px-5">
          Deals and offers
        </h1>
        <p className="text-gray-200 px-5">
          Hygiene equipments
        </p>
        {/* Image for the hygiene equipment deal */}
        <img src="time.png" alt="Hygiene Equipments" className="py-6 px-5" />
      </div>

      {/* Second Sale Item: Smart Watches Section */}
      <div className="border py-6 px-7 bg-white">
        <img src="watch.png" alt="Smart Watch" />
        <h2 className="py-5 text-black">Smart Watches</h2>
        <span className="pb-3 px-7">
          {/* Discount Button */}
          <button className="bg-pink-200 text-sm text-red-700 px-3 rounded-lg">-25%</button>
        </span>
      </div>

      {/* Third Sale Item: Laptops Section */}
      <div className="border py-6 px-7 space-x-2 bg-white">
        <img src="laptop.png" alt="Laptop" />
        <h2 className="py-8 text-black px-8">Laptops</h2>
        <span className="pb-3 px-7">
          {/* Discount Button */}
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-15%</button>
        </span>
      </div>

      {/* Fourth Sale Item: GoPro Cameras Section */}
      <div className="border py-6 px-7 bg-white">
        <img src="camera.png" alt="GoPro Camera" />
        <h2 className="py-12 text-black">GoPro cameras</h2>
        <span className="pb-2 px-8">
          {/* Discount Button */}
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-40%</button>
        </span>
      </div>

      {/* Fifth Sale Item: Headphones Section */}
      <div className="border py-6 px-7 bg-white">
        <img src="headphones.png" alt="Headphones" />
        <h2 className="py-5 text-black">Headphones</h2>
        <span className="pb-3 px-7">
          {/* Discount Button */}
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-25%</button>
        </span>
      </div>

      {/* Sixth Sale Item: Canon Cameras Section */}
      <div className="border py-6 px-7 gap-5 bg-white">
        <img src="mobile.png" alt="Canon Camera" />
        <h2 className="py-6 text-black">Canon Cameras</h2>
        <span className="pb-3 px-7">
          {/* Discount Button */}
          <button className="bg-pink-200 text-sm text-red-700 px-2 rounded-lg">-25%</button>
        </span>
      </div>
    </div>
  );
};

export default Sale;
