import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start py-10  bg-white text-gray-700 pr-12 px-12">
      {/* Left Section: Logo and Social Media */}
      <div className="flex flex-col space-y-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 px-4">
          <div className=" p-2 rounded-lg">
            <img src="logo-colored.png" alt="Brand Logo" className="h-9" />
          </div>
        </div>

        {/* Paragraph Section */}
        <p className=" max-w-md text-sm text-center">
          Best information about the company goes
          here but now lorem ipsum is.
        </p>

        {/* Social Media Icons Section */}
        <div className="flex space-x-4 px-12">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="Facebook-icon.png" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="youtube-icon.png" alt="YouTube" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Middle Sections: Links */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm  px-12">
        {/* About Section */}
        <div className="pr-10">
          <h1 className="font-bold text-black mb-4">About</h1>
          <ul className="space-y-2 gap-5">
            <li><a href="#" className="text-gray-400 hover:text-gray-600">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Find Store</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Categories</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Blogs</a></li>
          </ul>
        </div>

        {/* Partnership Section */}
        <div>
          <h1 className="font-bold text-black mb-4">Partnership</h1>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-gray-600">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Find Store</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Categories</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Blogs</a></li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h1 className="font-bold text-black mb-4">Information</h1>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Help Center</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Money Refund</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Shipping</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Contact Us</a></li>
          </ul>
        </div>

        {/* For Users Section */}
        <div>
          <h1 className="font-bold text-black mb-4 ">For Users</h1>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Login</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Register</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">Settings</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-600">My Orders</a></li>
          </ul>
        </div>
      </div>

      {/* Right Section: App Download */}
      <div className="flex flex-col items-start space-y-2 pr-14"> {/* Adjusted spacing */}
        <h1 className="font-bold text-black">Get App</h1>
        <div className="flex flex-col space-y-2">
          <img src="button.png" alt="Download on App Store" className="h-10" />
          <img src="buttonn.png" alt="Get it on Google Play" className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
