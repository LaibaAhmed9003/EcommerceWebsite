import React from 'react';

const Banner = () => {
  return (
    <section className="relative px-8 py-3 ">
      {/* Main Banner Section */}
      <div className="relative bg-blue-50 space-x-4">
        {/* Background Image */}
        <img
          src="group 1.png" // Replace with your actual image path
          alt="Factory Background"
          className="w-full h-auto object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 bg-opacity-40 flex flex-col space-y-2 gap-0 text-start py-8">
          <span className="text-2xl lg:text-3xl font-bold text-white ">
            An easy way to send
          </span>
          <span className="text-2xl lg:text-3xl font-bold text-white ">requests to all suppliers</span>
          <span className="text-gray-100 text-base text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          </span>
          <span className="text-gray-100 text-base text-[10px] ">
            quo debitis ipsam laborum temporibus adipisci ipsum?
          </span>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="absolute top-12 right-1 -translate-x-11 -translate-y-0 bg-white shadow-lg  rounded-lg px-5 py-5 w-full max-w-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Send quote to suppliers
        </h2>
        <form className="space-y-2 py-4 pb-4">
          {/* Item Input */}
          <input
            type="text"
            placeholder="What item do you need?"
            className="w-full border border-gray-300 text-black p-3 rounded-md focus:outline-none focus:ring-2  focus:ring-blue-500 "
          />
          {/* Details Input */}
          <textarea
            placeholder="Type more details"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
          {/* Quantity and Units */}
          <div className="flex space-x-3">
            <input
              type="number"
              placeholder="Quantity"
              className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="w-28 border border-gray-300 p-3 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pcs">Pcs</option>
              <option value="kg">Kg</option>
              <option value="liters">Liters</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Banner;
