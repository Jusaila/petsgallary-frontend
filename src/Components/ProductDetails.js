import React, { useState } from "react";
import { FaHeart, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [selectedPackage, setSelectedPackage] = useState("3 kg");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  const productData = [
    {
      name: "Grapes",
      price: 550,
      title: "Lorem ipsum dolor sit amet\nconsectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Mattis nisl nam imperdiet bibendum\nnetus nisl fringilla a magna. Sed faucibus augue nec diam. Vitae adipiscing\nconsequat et aliquet nunc. Dolor pulvinar lectus vulputate sit porttitor.",
      packages: ["3 kg", "7 kg", "12 kg"],
      rating: 3.5,
      reviews: 155,
      image: "/productimage.png",
      about: {
        description: [
          "Lorem ipsum dolor sit amet consectetur. Nulla nibh convallis scelerisque mi quam vel sit. Aliquam lacus ut felis dui. Amet duis quisque quam odio bibendum fringilla vulputate elit. Volutpat sed malesuada tortor purus risus ut maecenas duis mus. Leo ornare luctus nisl orci amet dictumst. Dictum scelerisque volutpat enim volutpat dictumst amet. Pulvinar vitae neque et arcu neque id. Nibh gravida amet in enim vitae ipsum amet. Vulputate donec amet facilisi aliquam.",
          "Lorem ipsum dolor sit amet consectetur. Nulla nibh convallis scelerisque mi quam vel sit. Aliquam lacus ut felis dui. Amet duis quisque quam odio bibendum fringilla vulputate elit. Volutpat sed malesuada tortor purus risus ut maecenas duis mus. Leo ornare luctus nisl orci amet dictumst. Dictum scelerisque volutpat enim volutpat dictumst amet. Pulvinar vitae neque et arcu neque id. Nibh gravida amet in enim vitae ipsum amet. Vulputate donec amet facilisi aliquam."
        ],
        benefits: "Lorem ipsum dolor sit amet consectetur. Nulla nibh convallis scelerisque mi quam vel sit. Aliquam lacus ut felis dui. Amet duis quisque quam odio bibendum fringilla vulputate elit. Volutpat sed malesuada tortor purus risus ut maecenas duis mus. Leo ornare luctus nisl orci amet dictumst. Dictum scelerisque volutpat enim volutpat dictumst amet. Pulvinar vitae neque et arcu neque id. Nibh gravida amet in enim vitae ipsum amet. Vulputate donec amet facilisi aliquam.",
        details: [
          { label: "Sku", value: "125458634" },
          { label: "Orientation", value: "125458634" },
          { label: "Food Type", value: "125458634" },
          { label: "Age", value: "Puppies" },
          { label: "Origin", value: "125458634" },
          { label: "Weight", value: "125458634" },
          { label: "Ingredients features", value: "125458634" },
          { label: "Sky", value: "125458634" },
          { label: "Sku", value: "125458634" }
        ]
      }
    }
  ];

  const product = {
    name: productData[0].title,
    price: productData[0].price,
    package: selectedPackage,
    quantity: quantity,
    image: productData[0].image,
    sku: productData[0].about.details[0].value
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F5EB] p-4 sm:p-6 md:p-8 lg:p-[80px]">
      <div className="mb-6">
        <Link to="/store">
          <button className="text-gray-600 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </Link>
      </div>
      
      <div className="mx-auto flex flex-col lg:flex-row gap-6">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full lg:w-1/2">
          {/* Main Image */}
          <div className="w-full md:w-3/4 aspect-square bg-white flex items-center justify-center rounded-lg">
            <img
              src={productData[0].image}
              alt="Product"
              className="max-w-[60%] max-h-[60%] object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 w-full md:w-1/4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex-1 aspect-square bg-white flex items-center justify-center rounded-lg"
              >
                <img
                  src={productData[0].image}
                  alt={`Thumbnail ${index + 1}`}
                  className="max-w-[60%] max-h-[60%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full lg:w-1/2 space-y-4 mt-6 lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium" dangerouslySetInnerHTML={{ __html: productData[0].title.replace(/\n/g, '<br/>') }} />

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xl font-bold">₹{productData[0].price}</span>
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <span className="text-gray-500 text-sm">({productData[0].reviews})</span>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">Package</p>
            <div className="flex flex-wrap gap-2">
              {productData[0].packages.map((pkg) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    selectedPackage === pkg
                      ? "bg-[#FF9B57] text-black"
                      : "border-[#FF9B57] text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  {pkg}
                </button>
              ))}
            </div>
          </div>

          <p className="text-black text-base md:text-lg lg:text-lg" dangerouslySetInnerHTML={{ __html: productData[0].description.replace(/\n/g, '<br/>') }} />

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <div className="flex items-center border border-orange-500 rounded-full h-10 px-2 mb-2 sm:mb-0">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="w-6 h-6 flex items-center justify-center hover:bg-orange-50 rounded-full"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-6 h-6 flex items-center justify-center hover:bg-orange-50 rounded-full"
              >
                +
              </button>
            </div>

            <button 
              onClick={() => addProduct(product)} 
              className="flex-1 min-w-[150px] h-10 bg-[#FF9B57] text-black font-semibold rounded-full hover:bg-orange-600 transition-colors mb-2 sm:mb-0"
            >
              Add to cart
            </button>

            <button className="w-10 h-10 flex items-center justify-center bg-orange-500 text-black rounded-full hover:bg-orange-600 transition-colors">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
      
      {/* About Product Section */}
      <div className="px-0 sm:px-2 md:px-4 lg:px-6 py-8 md:py-12">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Product</h2>
        <hr className="mb-8 md:mb-12 border-gray-600" />

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Left Column - Description */}
          <div className="md:w-3/5 text-base md:text-lg">
            {productData[0].about.description.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}

            {/* Benefits Section */}
            <h3 className="text-lg md:text-xl font-semibold mb-3">Benefits</h3>
            <p className="text-gray-700">
              {productData[0].about.benefits}
            </p>
          </div>

          {/* Right Column - Product Details Table */}
          <div className="md:w-2/5 text-base md:text-lg mt-6 md:mt-0">
            <table className="w-full">
              <tbody>
                {productData[0].about.details.map((item, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="py-2 md:py-3 text-gray-700">{item.label}</td>
                    <td className="py-2 md:py-3 text-gray-700 text-right">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;