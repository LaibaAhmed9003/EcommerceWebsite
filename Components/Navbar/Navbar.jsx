import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="relative text-black h-14 bg-white py-5 px-12">
      <nav className="flex justify-between items-center h-full ">
        <div className="flex items-center space-x-6 gap-4">
          <svg className="w-6 h-6 text-white" /* Your icon here */>
            {/* Icon SVG path */}
          </svg>
          <Link href="/about" class="font-inter font-medium text-[16px] leading-[22px] text-gray-800">All Categories</Link>
          <Link href="/Hot Offers" class="font-inter font-medium text-[16px] leading-[22px] text-gray-800">Hot Offers</Link>
          <Link href="/Gift Boxes" class="font-inter font-medium text-[16px] leading-[22px] text-gray-800">Gift Boxes</Link>
          <Link href="/Projects" class="font-inter font-medium text-[16px] leading-[22px] text-gray-800">Projects</Link>
          <Link href="/Menu Items" class="font-inter font-medium text-[16px] leading-[22px] text-gray-800">Menu Items</Link>
          <div className="relative group">
            <Link href="/Help" class="font-inter font-medium text-[16px] leading-[22px] text-gray-800">Help</Link>
            <ul className="absolute hidden group-hover:block bg-white text-black border border-gray-300 mt-1">
              {/* Dropdown items could be added here */}
            </ul>
          </div>
        </div>

        <div className="flex items-center px-12">

          <div class="flex items-center space-x-4 font-inter font-medium text-[16px] leading-[22px]">
            <a href="#" class="hover:text-blue-500 ">English, USD</a>
            <a href="#" class="hover:text-blue-500 flex items-center space-x-1">
              <span>Ship to</span>
              <img src="icon.png" alt="Country Flag" class="h-4 w-4 rounded-full" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;