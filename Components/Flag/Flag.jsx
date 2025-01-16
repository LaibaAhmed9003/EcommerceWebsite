import React from 'react';

const Flag = () => {
  return (
    <div className="text-black text-[18px] px-12 py-6">
      <h1 className="font-black">Suppliers by region</h1>
      <div className="justify-start flex-col items-start grid grid-cols-5 gap-4 py-3">
        <div className="mr-4">
          <img src="ArabicEmirates.png" alt="Arabic Emirates" />
          <h1>Arabic Emirates</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.ae</p>
        </div>
        <div className="mr-4">
          <img src="Australia.png" alt="Australia" />
          <h1>Australia</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.com.au</p>
        </div>
        <div className="mr-4">
          <img src="UnitedStates.png" alt="United States" />
          <h1>United States</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.ae</p>
        </div>
        <div className="mr-4">
          <img src="Russia.png" alt="Russia" />
          <h1>Russia</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.ru</p>
        </div>
        <div className="mr-4">
          <img src="Italy.png" alt="Italy" />
          <h1>Italy</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.it</p>
        </div>
        <div className="mr-4">
          <img src="Denmark.png" alt="Denmark" />
          <h1>Denmark</h1>
          <p className="font-thin text-[12px] text-gray-400">denmark.com.dk</p>
        </div>
        <div className="mr-4">
          <img src="France.png" alt="France" />
          <h1>France</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.com.fr</p>
        </div>
        <div className="mr-4">
          <img src="ArabicEmirates.png" alt="Arabic Emirates" />
          <h1>Arabic Emirates</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.ae</p>
        </div>
        <div className="mr-4">
          <img src="China.png" alt="China" />
          <h1>China</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.ae</p>
        </div>
        <div>
          <img src="GreatBritain.png" alt="Great Britain" />
          <h1>Great Britain</h1>
          <p className="font-thin text-[12px] text-gray-400">shopname.co.uk</p>
        </div>

      </div>
    </div>
  );
}

export default Flag;