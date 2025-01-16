import React from "react";

const thumbnail$ = [
  'pic1.png',
  'pic2.png',
  'pic3.png',
  'pic4.png',
  'pic5.png',
  'pic6.png',
];
const ProductDetails = () => {
  return (
    <div className="bg-gray-100  p-6">
      <div class="max-w-6xl mx-auto bg-white rounded-lg shadow-md grid grid-cols-12 gap-6 p-6">
        {/* Product Image Section */}
        <div className="col-span-2">
          <div className="w-full h-50 relative rounded-lg border border-gray-300">
            <img
              src="/pics.png" // Replace with your image path  
              alt="Men's Long Sleeve T-shirt"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex mt-4 space-x-4">
            {thumbnail$.map((path, index) => (
              <div
                key={index}
                className=" border rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  src={path} // Use the specific path from the array  
                  alt={`Thumbnail ${index + 1}`}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-span-2 space-y-4">
          <h2 className="text-sm  text-green-500"> ✔️In stock
          </h2>
          <h1 className="text-xl font-bold">
            Men's Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
          <div className="flex ">
            <img src="rating.png" alt="" className="h-15 w-15" />
            <span className="ml-2 text-yellow-400 ">9.3</span>
            <img src="message.png" alt="" className="px-2" />
            <span className="text-black">32 reviews</span>
            <img src="shopping.png" alt="" className="px-2" />
            <span className="text-black">154 sold</span>
          </div>



          {/* Pricing Section */}
          <div className="grid grid-cols-3 border-b bg-orange-200 text-center pb-4 mb-4">
            <div>
              <p className="text-red-500 font-bold text-lg">$98.00</p>
              <p className="text-sm text-gray-500">50-100 pcs</p>
            </div>
            <div>
              <p className="text-gray-800 font-bold text-lg">$90.00</p>
              <p className="text-sm text-gray-500">100-700 pcs</p>
            </div>
            <div>
              <p className="text-gray-800 font-bold text-lg">$78.00</p>
              <p className="text-sm text-gray-500">700+ pcs</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-2 text-sm ">
            <div className="flex gap-12 border-b">
              <span className="text-gray-400 font-thin">Price:</span>
              <span>Negotiable</span>
            </div>
            <div className="flex gap-12 ">
              <span className="text-gray-400 font-thin ">Type:</span>
              <span className="text-black">Classic shoes</span>
            </div>
            <div className="flex gap-10 " >
              <span className=" text-gray-400 font-thin">Material:</span>
              <span className="text-black">Plastic material</span>
            </div>
            <div className="flex gap-12 border-b">
              <span className="text-gray-400 font-thin">Design:</span>
              <span className="text-black">Modern nice</span>
            </div>
            <div className="flex gap-3 ">
              <span className="text-gray-400 font-thin">Customization:</span>
              <span className="text-black">Customized logo and design custom packages</span>
            </div>
            <div className="flex gap-8">
              <span className="text-gray-400 font-thin">Protection:</span>
              <span className="text-black">Refund Policy</span>
            </div>
            <div className="flex gap-10 border-b">
              <span className="text-gray-400 font-thin">Warranty:</span>
              <span className="text-black">2 years full warranty</span>
            </div>
          </div>
        </div>
        {/* Seller Info Section */}
        <div className="col-span-1 border border-gray-200 pl-2 w-85  h-80 space-y-3">
          <span className="flex py-2">
            <img src="r.png" alt="" className="w-20 h-10 " />
            <span className="px-2 text-sm">
              Supplier: GuangJi Trading LLC
            </span>
          </span>

          <span className="flex py-1">
            <img src="Germany.png" alt="" className="w-6 h-4 " />
            <span className="px-2 text-sm">
              Germany, Berlin
            </span>
          </span>

          <span className="flex py-1">
            <img src="verified_user.png" alt="" className="w-4 h-5 " />
            <span className="px-2 text-sm">
              Verified Seller
            </span>
          </span>
          <span className="flex py-1">
            <img src="shipping.png" alt="" className="w-4 h-5 " />
            <span className="px-2 text-sm">
              Worldwide Shipping
            </span>
          </span>
          <button className=" bg-blue-600 text-white p-2 px-7 py-2 rounded-md hover:bg-blue-700">
            Send Inquiry
          </button>
          <button className=" bg-gray-200 p-2 px-6 py-2  rounded-md hover:bg-gray-300">
            Seller's Profile
          </button>
          <span className="flex py-4">
            <img src="vectorheart.png" alt="" className="w-7 h-8 " />
            <span className="px-3 pt-1 text-sm text-blue-400">
              Save for later
            </span>
          </span>
        </div>

      </div>
      <div>


        <div class="col-span-8">
          <div class="border-b border-gray-200">
            <ul class="flex text-sm font-medium text-gray-500">
              <li class="mr-6">
                <a href="#" class="text-blue-500 border-b-2 border-blue-500 pb-2">Description</a>
              </li>
              <li class="mr-6">
                <a href="#" class="hover:text-blue-500">Reviews</a>
              </li>
              <li class="mr-6">
                <a href="#" class="hover:text-blue-500">Shipping</a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-500">About seller</a>
              </li>
            </ul>
          </div>

          <div class="mt-4">
            <p class="text-gray-700 text-sm leading-relaxed">
              Welcome to [Your E-commerce Website Name], your one-stop destination for all your shopping needs! Discover a wide range of high-quality products, from fashion and electronics to home essentials and beyond. Our platform is designed to provide you with a seamless shopping experience, featuring competitive prices, exclusive deals, and fast, reliable delivery. Whether you’re upgrading your wardrobe, finding the perfect gadget, or sprucing up your home, we’ve got you covered. Shop with confidence knowing that customer satisfaction is our top priority, supported by secure payment options and a hassle-free return policy. Explore today and redefine the way you shop!
            </p>

            <table class="mt-6 text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
              <tbody>
                <tr class="border-b">
                  <td class="py-2 px-4 font-medium text-gray-900">Model</td>
                  <td class="py-2 px-4">#8786867</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2 px-4 font-medium text-gray-900">Style</td>
                  <td class="py-2 px-4">Classic style</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2 px-4 font-medium text-gray-900">Certificate</td>
                  <td class="py-2 px-4">ISO-898921212</td>
                </tr>
                <tr class="border-b">
                  <td class="py-2 px-4 font-medium text-gray-900">Size</td>
                  <td class="py-2 px-4">34mm x 450mm x 19mm</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 font-medium text-gray-900">Memory</td>
                  <td class="py-2 px-4">36GB RAM</td>
                </tr>
              </tbody>
            </table>
            <ul class="mt-4 space-y-2 text-gray-700 text-sm">
              <li>• Some great feature name here</li>
              <li>• Lorem ipsum dolor sit amet, consectetur</li>
              <li>• Duis aute irure dolor in reprehenderit</li>
              <li>• Some great feature name here</li>
            </ul>
          </div>
        </div>
        <div class="col-span-4">
          <h3 class="text-sm font-medium text-gray-700 mb-4">You may like</h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-4">
              <img src="image5.png" alt="Men Blazer" class="w-16 h-16 rounded" />
              <div>
                <p class="text-sm text-gray-900">Men Blazers Sets Elegant Formal</p>
                <p class="text-sm text-gray-500">$7.00 - $99.50</p>
              </div>
            </li>
            <li class="flex items-center space-x-4">
              <img src="image4.png" alt="Men Shirt" class="w-16 h-16 rounded" />
              <div>
                <p class="text-sm text-gray-900">Men Shirt Sleeve Polo Contrast</p>
                <p class="text-sm text-gray-500">$7.00 - $99.50</p>
              </div>
            </li>
            <li class="flex items-center space-x-4">
              <img src="image3.png" alt="Apple Watch" class="w-16 h-16 rounded" />
              <div>
                <p class="text-sm text-gray-900">Apple Watch Series Space Gray</p>
                <p class="text-sm text-gray-500">$7.00 - $99.50</p>
              </div>
            </li>
            <li class="flex items-center space-x-4">
              <img src="image2.png" alt="Basketball Crew" class="w-16 h-16 rounded" />
              <div>
                <p class="text-sm text-gray-900">Basketball Crew Socks Long Stuff</p>
                <p class="text-sm text-gray-500">$7.00 - $99.50</p>
              </div>
            </li>
            <li class="flex items-center space-x-4">
              <img src="image1.png" alt="T-Shirt" class="w-16 h-16 rounded" />
              <div>
                <p class="text-sm text-gray-900">New Summer Men's Castrol T-Shirts</p>
                <p class="text-sm text-gray-500">$7.00 - $99.50</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div >

  );
};
export default ProductDetails;
