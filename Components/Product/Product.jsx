import React from 'react';

const Product = () => {
  return (
    <div className="px-3 py-2">
      {/* Heading for the recommended items section */}
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Recommended Items</h2>

      {/* Grid container for product items */}
      <div className="px-7 py-2 grid grid-cols-5 gap-4">
        {/* Product Card 1: T-shirt */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the T-shirt */}
            <img className="rounded-t-lg" src="shirt.png" alt="T-shirt" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">T-shirts with multiple colors, for men</p>
          </div>
        </div>

        {/* Product Card 2: Hoodie */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Hoodie */}
            <img className="rounded-t-lg" src="hoodie.png" alt="Hoodie" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Jeans shorts for men, blue color</p>
          </div>
        </div>

        {/* Product Card 3: Coat */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Coat */}
            <img className="rounded-t-lg" src="coat.png" alt="Coat" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$12.50</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Brown winter coat, medium size</p>
          </div>
        </div>

        {/* Product Card 4: Wallet */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Wallet */}
            <img className="rounded-t-lg" src="wallet.png" alt="Wallet" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$34.00</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Jeans bag for travel</p>
          </div>
        </div>

        {/* Product Card 5: Bag */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Bag */}
            <img className="rounded-t-lg" src="bagpng.png" alt="Bag" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$99.00</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Leather wallet</p>
          </div>
        </div>

        {/* Product Card 6: Camera */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Camera */}
            <img className="rounded-t-lg" src="pant.png" alt="Camera" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$9.99</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Canon camera black, 100x zoom</p>
          </div>
        </div>

        {/* Product Card 7: Headphones */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Headphones */}
            <img className="rounded-t-lg" src="headphoni.png" alt="Headphones" />
          </a>
          <div className="p-9">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$8.99</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Headset for gaming with mic</p>
          </div>
        </div>

        {/* Product Card 8: Smartwatch */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Smartwatch */}
            <img className="rounded-t-lg" src="bagpng.png" alt="Smartwatch" />
          </a>
          <div className="p-7">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Smartwatch, silver color</p>
          </div>
        </div>

        {/* Product Card 9: Wallet */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Wallet */}
            <img className="rounded-t-lg" src="pot.png" alt="Wallet" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            {/* Product description */}
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Blue wallet for men, leather material</p>
          </div>
        </div>

        {/* Product Card 10: Kettle */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            {/* Image of the Kettle */}
            <img className="rounded-t-lg" src="kettlee.png" alt="Kettle" />
          </a>
          <div className="p-5">
            <a href="#">
              {/* Product price */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$80.95</h5>
            </a>
            {/* Product description */}
            <p className="mb-2 font-normal text-gray-400 dark:text-gray-400">Electric kettle for quick boiling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
