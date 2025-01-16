import React from 'react';

const Header = () => {
  return (
    <header className=" w-full h-[86px] left-0 top-0 bg-white flex items-center py-5 px-12">
      {/* Brand Section */}
      <div className="flex items-center ml-20 space-y-[2px] space-x-2">
        <img src="logo-symbol.png" alt="Brand" className="h-6 opacity-80" />
        <img src="Brand.png" alt="Brand" className="h-7" />
      </div>

      {/* Search Section */}
      <div className="flex-grow flex items-center justify-center ml-2 relative gap-2">
        <div className="flex items-center w-[70%] max-w-[800px]"> {/* Responsive width for search */}
          <div class="flex items-center flex-grow max-w-lg mx-auto border border-blue-500 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">

            <input
              type="text"
              placeholder="Search"
              class="flex-grow px-3 py-1 text-sm focus:outline-none"
            />
            <div class="h-full w-px bg-blue-500"></div>

            <select class="px-3 py-1 text-sm focus:outline-none">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
            </select>


            <div class="h-full w-px bg-blue-500"></div>


            <button class="bg-blue-500 text-white px-5 py-1 text-sm hover:bg-blue-600 focus:outline-none">
              Search
            </button>
          </div>

        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-2 mr-20 leading-[22px]">
        <button className="flex flex-col items-center text-xs ml-4">
          <img src="person.svg" alt="Profile" className="h-5" />
          <h2 className="mt-1">Profile</h2>
        </button>
        <button className="flex flex-col items-center text-xs">
          <img src="message.svg" alt="Message" className="h-5" />
          <h2 className="mt-1">Message</h2>
        </button>
        <button className="flex flex-col items-center text-xs">
          <img src="favorite.svg" alt="Orders" className="h-5" />
          <h2 className="mt-1">Orders</h2>
        </button>
        <button className="flex flex-col items-center text-xs">
          <img src="cart.svg" alt="My Cart" className="h-5" />
          <h2 className="mt-1">My Cart</h2>
        </button>
      </div>
    </header>
  );
};

export default Header;