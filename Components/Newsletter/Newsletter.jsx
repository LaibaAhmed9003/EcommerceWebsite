import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-gray-100 px-12 py-9 items-center">
      <h2 className="items-center text-black font-semibold  text-[18px] px-4 bg-opacity-70 rounded text-center">
        Subscribe on our newsletter
      </h2>
      <p className="items-center bg-opacity-70 text-gray-400 rounded text-center py-1">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="items-center text-center py-5 m-0">
        <input type="Email" placeholder='Email' className="py-1 rounded px-2" />
        <button className="bg-blue-500 text-white rounded ml-2 px-3 py-1">
          Subscribe
        </button>
      </div>
    </div>
  )
}
export default Newsletter