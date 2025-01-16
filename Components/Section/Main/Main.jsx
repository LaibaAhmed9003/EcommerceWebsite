import React from 'react';
import Link from 'next/link';

const Main = () => {
  return (
    <div className=" bg-white grid grid-cols-12 space-x-2 py-3 px-12">
      {/* Sidebar Navigation */}
      <nav className="col-span-2 p-4 rounded-lg  bg-white">
        <ul className="space-y-4 text-[16px] text-gray-600 font-normal">
          <li>
            <Link href="/" className="font-medium text-blue-500">
              Automobiles
            </Link>
          </li>
          <li>
            <Link href="/Clothes and Wears">Clothes and Wears</Link>
          </li>
          <li>
            <Link href="/Home Interiors">Home Interiors</Link>
          </li>
          <li>
            <Link href="/Computer and Tech">Computer and Tech</Link>
          </li>
          <li>
            <Link href="/Tools, Equipments">Tools, Equipments</Link>
          </li>
          <li>
            <Link href="/Sports and Outdoor">Sports and Outdoor</Link>
          </li>
          <li>
            <Link href="/Animals and Pets">Animals and Pets</Link>
          </li>
          <li>
            <Link href="/Machinery Tools">Machinery Tools</Link>
          </li>
          <li>
            <Link href="/More Category">More Category</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="col-span-6 bg-white object-cover rounded-lg shadow-md relative ">
        <img
          src="Mask group.png"
          alt="Trending Electronics"
          className="w-full h-[90%]"
        />
        <div className="absolute top-1 py-5 justify-start mt-9 px-8 ">
          <h2 className="text-lg font-medium">Latest trending</h2>
          <h3 className="text-xl font-bold">Electronic Items</h3>
          <button className="mt-4 px-8 py-2 bg-white text-black rounded-md hover:bg-blue-600">
            Learn more
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-4 space-y-4">
        {/* User Greeting */}
        <div className="bg-white rounded-lg shadow-md ">
          <img
            src="avatar.png"
            alt="User Avatar"
            className="w-12 h-12 mx-auto rounded-full"
          />
          <p className="font-medium mb-2 text-right">Hi, User</p>
          <p className="text-sm text-gray-500">Let's get started</p>

          <div className="bg-blue-500 p-2 px-5 py-3 rounded-lg text-white text-center shadow-md">
            <p className="font-medium">Join now</p>

          </div>
          <div className=" p-2 rounded-lg text-center shadow-md bg-white text-blue-500">
            <p className="font-medium">Login Now</p>

          </div>

        </div>

        {/* Join Now Section */}

        {/* Promotions */}
        <div className="bg-orange-500 px-7 p-2 py-4 rounded-lg text-white shadow-md text-center">
          <p>Get US $10 off</p>
          <p>
            with a new supplier
          </p>

        </div>
        <div className="bg-teal-500 p-3 px-7 py-4 rounded-lg text-white shadow-md text-center pr-4">
          <p>Send quotes with </p>
          <p>
            supplier
          </p>
          <p>
            preferences
          </p>

        </div>
      </div>
    </div>
  );
};

export default Main;
