import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHeart, FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { api } from '../utils/api'; 
import axios from "axios";  
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  
const packages = product?.product_sizes?.map(size => size.name) || [];
const [selectedPetType, setSelectedPetType] = useState(null);

  const addProduct = () => {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
        package: selectedPackage,
      })
    );
  };

  useEffect(() => {
    api.get(`/get-product-details/${id}`)
    // axios
    //   .get("http://127.0.0.1:8000/api/get-product-details/1") 
      .then((res) => {
        console.log("Product details:", res.data.product);
        
        setProduct(res.data.product);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product details", err);
        setLoading(false);
      });
  }, [id]);
  

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>No product found</p>;

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
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full lg:w-1/2">
          <div className="w-full md:w-3/4 aspect-square bg-white flex items-center justify-center rounded-lg">
          <img
              src={product.images?.[0]?.image_url || "/placeholder.jpg"}
              alt="Product"
              className="max-w-[60%] max-h-[60%] object-contain"
            />
          </div>
          <div className="flex md:flex-col gap-2 w-full md:w-1/4">
          {product.images?.map((img, index) => (
              <div key={index} className="flex-1 aspect-square bg-white flex items-center justify-center rounded-lg">
               <img
              src={img.image_url}
              alt={`Thumbnail ${index + 1}`}
              className="max-w-[60%] max-h-[60%] object-contain"
            />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4 mt-6 lg:mt-0">
          <h1 className="text-3xl font-medium">{product.name}</h1>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xl font-bold">₹{product.price}</span>
            {/* <div className="flex text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            </div>
            <span className="text-gray-500 text-sm">({product.reviews || 0})</span> */}
          </div>
          <div className="flex text-yellow-500">
              <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
            </div>
            <span className="text-gray-500 text-sm">({product.reviews || 0})</span>

            <div className="flex md:flex-row flex-col gap-0 items-start">
            {/* Quantity Section */}
            <div className="w-full md:w-1/6">
              <p className="font-semibold mb-1">Quantity</p>
              <div className="flex flex-wrap gap-2">
                {product.product_sizes?.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedPackage(size.name)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      selectedPackage === size.name
                        ? "bg-[#FF9B57] text-black"
                        : "border-[#FF9B57] text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Pet Type Section */}
            <div className="w-full md:w-1/2">
              <p className="font-semibold mb-1">Pet Type</p>
              <div className="flex flex-wrap gap-2">
                {product.product_pet_types?.map((pet) => (
                  <button
                    key={pet.id}
                    onClick={() => setSelectedPetType(pet.name)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      selectedPetType === pet.name
                        ? "bg-[#FF9B57] text-black"
                        : "border-[#FF9B57] text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {pet.name}
                  </button>
                ))}
              </div>
            </div>
          </div>



          <p className="text-base">{product.description}</p>

          <div className="flex flex-wrap items-center gap-2 mt-4">
            <div className="flex items-center border border-orange-500 rounded-full h-10 px-2">
              <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
              <span className="w-12 text-center">{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button onClick={addProduct} className="flex-1 h-10 bg-[#FF9B57] text-black font-semibold rounded-full hover:bg-orange-600 transition-colors">
              Add to cart
            </button>
            <button className="w-10 h-10 bg-orange-500 text-black rounded-full hover:bg-orange-600 flex items-center justify-center">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-2xl font-semibold mb-4">About Product</h2>
        <hr className="mb-8 border-gray-600" />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-3/5 text-base">
            {product.about?.description?.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
            ))}
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <p className="text-gray-700">{product.about?.benefits}</p>
          </div>
          <div className="md:w-2/5 mt-6 md:mt-0">
            <table className="w-full">
              <tbody>
                {product.about?.details?.map((item, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="py-2 text-gray-700">{item.label}</td>
                    <td className="py-2 text-gray-700 text-right">{item.value}</td>
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
