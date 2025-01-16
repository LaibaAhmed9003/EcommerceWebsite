import React from 'react';
import { useRouter } from 'next/router';
const products = [
  {
    id: 1,
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    oldPrice: '$1128.00',
    price: '$998.00',
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    image: 'image1.png',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'vectorheart.png',
  },
  {
    id: 2,
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: null,
    rating: 4.5,
    orders: 154,
    freeShipping: true,
    image: 'image2.png',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'vectorheart.png',
  },
  {
    id: 3,
    name: 'Smartphone Model XYZ',
    price: '$750.00',
    oldPrice: '$850.00',
    rating: 4.9,
    orders: 220,
    freeShipping: true,
    image: 'image3.png',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'vectorheart.png',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: '$199.00',
    oldPrice: '$250.00',
    rating: 4.7,
    orders: 180,
    freeShipping: false,
    image: 'image4.png',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'vectorheart.png',
  },
  {
    id: 5,
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    oldPrice: '$1128.00',
    price: '$998.00',
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    image: 'image5.png',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem et nisi vitae eligendi sed facilis dolores, facere quidem voluptate, impedit adipisci sunt.',
    icon: 'vectorheart.png',
  },
  {
    id: 6,
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    oldPrice: '$1128.00',
    price: '$998.00',
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    image: 'image6.png',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem et nisi vitae eligendi sed facilis dolores, facere quidem voluptate, impedit adipisci sunt.',
    icon: 'vectorheart.png',
  },
];
const ProductListing = () => {
  const router = useRouter();

  return (
    <div className="flex mx-auto px-6 py-8 bg-white">


      <div className="flex w-full">

        <aside className="w-1/3 bg-gray-100 p-4 rounded shadow">
          <nav className=" text-gray-600 ">
            <a href="#" className="text-blue-500">Home</a> &gt;
            <a href="#" className="mx-1">Clothing</a> &gt;
            <a href="#" className="mx-1">Men's Wear</a> &gt;
            <span className="mx-1">Summer Clothing</span>
          </nav>
          <h2 className="text-lg font-semibold mb-4">Category</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-500 hover:underline">Mobile Accessory</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Electronics</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Smartphones</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Modern Tech</a></li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-4">Brands</h2>
          <ul className="space-y-2">
            <li><label><input type="checkbox" className="mr-2" /> Samsung</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Apple</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Huawei</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Poco</label></li>
            <li><label><input type="checkbox" className="mr-2" /> Lenovo</label></li>
          </ul>


          <div class="mb-6">
            <h2 class="text-lg font-semibold mb-4">Features</h2>
            <ul class="space-y-2">
              <li><label><input type="checkbox" class="mr-2" /> Metallic</label></li>
              <li><label><input type="checkbox" class="mr-2" /> Plastic Cover</label></li>
              <li><label><input type="checkbox" class="mr-2" /> 8GB RAM</label></li>
              <li><label><input type="checkbox" class="mr-2" /> Super Power</label></li>
              <li><label><input type="checkbox" class="mr-2" /> Large Memory</label></li>
            </ul>
          </div>

          <div class="mb-6">
            <h2 class="text-sm font-semibold text-gray-700 mb-4">Price range</h2>


            <div class="flex items-center space-x-2 mb-4">
              <input type="range" class="w-full appearance-none h-1 bg-blue-300 rounded outline-none" />
              <input type="range" class="w-full appearance-none h-1 bg-blue-300 rounded outline-none" />
            </div>


            <div class="flex items-center justify-between mb-2">
              <input type="number" placeholder="Min" class="w-20 text-center border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="number" placeholder="Max" class="w-20 text-center border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>


            <button class="w-full bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition">
              Apply
            </button>
          </div>


          <div class="mb-6">
            <h2 class="text-sm font-semibold text-gray-700 mb-4">Ratings</h2>
            <ul class="space-y-3">

              <li class="flex items-center">
                <input type="checkbox" class="w-4 h-4 mr-3 border-gray-300 rounded" />
                <div class="flex space-x-1">
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                </div>
              </li>

              <li class="flex items-center">
                <input type="checkbox" class="w-4 h-4 mr-3 border-gray-300 rounded" />
                <div class="flex space-x-1">
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-gray-300">★</span>
                </div>
              </li>

              <li class="flex items-center">
                <input type="checkbox" class="w-4 h-4 mr-3 border-gray-300 rounded" />
                <div class="flex space-x-1">
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-gray-300">★</span>
                  <span class="text-gray-300">★</span>
                </div>
              </li>

              <li class="flex items-center">
                <input type="checkbox" class="w-4 h-4 mr-3 border-gray-300 rounded" />
                <div class="flex space-x-1">
                  <span class="text-orange-500">★</span>
                  <span class="text-orange-500">★</span>
                  <span class="text-gray-300">★</span>
                  <span class="text-gray-300">★</span>
                  <span class="text-gray-300">★</span>
                </div>
              </li>

              <li class="flex items-center">
                <input type="checkbox" class="w-4 h-4 mr-3 border-gray-300 rounded" />
                <div class="flex space-x-1">
                  <span class="text-orange-500">★</span>
                  <span class="text-gray-300">★</span>
                  <span class="text-gray-300">★</span>
                  <span class="text-gray-300">★</span>
                  <span class="text-gray-300">★</span>
                </div>
              </li>
            </ul>
          </div>

        </aside>

        <main className="ml-4">
          <h1 className="text-2xl font-semibold">12,911 items in Mobile Accessory</h1>
          <div className="space-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="border p-2 rounded-lg hover:shadow-lg cursor-pointer"
                onClick={() => {
                  router.push(`/details/${product.id}`);
                }}
              // Redirect on click
              >
                <div className="flex justify-end">
                  <img src={product.icon} alt="Favorite Icon" />
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className=" rounded-lg"
                />

                <div className="text-gray-500 text-start mt-2">
                  <h2 className="text-lg font-semibold text-black">{product.name}</h2>
                  <div className="flex items-center">
                    <span className="text-black">{product.price}</span>
                    {product.oldPrice && (
                      <span className="line-through text-gray-400 ml-2">{product.oldPrice}</span>
                    )}
                  </div>

                  <div className="flex items-center">
                    <img src="rating.png" alt="Rating" />
                    <span className="ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-2">{product.orders} orders</span>

                    {product.freeShipping && (
                      <span className="text-sm px-4 text-green-600">Free Shipping</span>
                    )}
                  </div>

                  <p className="text-sm text-black mt-2">{product.details}</p>
                  <p className="text-sm text-blue-400">View Details</p>

                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

    </div>
  );
};

export default ProductListing;

