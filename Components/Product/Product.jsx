import React from 'react';

const Product = () => {
  return (
    <div className="px-3 py-2">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Recommended Items</h2>
      <div className="px-7 py-2 grid grid-cols-5 gap-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="shirt.png" alt="T-shirt" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">T-shirts with multiple colors, for men</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="hoodie.png" alt="Hoodie" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Jeans shorts for men, blue color</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="coat.png" alt="Coat" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$12.50</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Brown winter coat, medium size</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="wallet.png" alt="Wallet" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$34.00</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Jeans bag for travel</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="bagpng.png" alt="Bag" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$99.00</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Leather wallet</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="pant.png" alt="Camera" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$9.99</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Canon camera black, 100x zoom</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="headphoni.png" alt="Headphones" />
          </a>
          <div className="p-9">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$8.99</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Headset for gaming with mic</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="bagpng.png" alt="Smartwatch" />
          </a>
          <div className="p-7">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Smartwatch, silver color</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="pot.png" alt="Wallet" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$10.30</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Blue wallet for men, leather material</p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="kettlee.png" alt="Kettle" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$80.95</h5>
            </a>
            <p className="mb-2 font-normal text-gray-400 dark:text-gray-400">Electric kettle for quick boiling</p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Product;