import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import axios from "axios";
import { api } from '../utils/api'; 


const ProductImageGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images?.[0]?.image_url);
  const isSingleImage = product.images?.length === 1;

  return (
    <div className={`flex ${isSingleImage ? "justify-center" : "flex-col md:flex-row"} gap-4 w-full lg:w-1/2`}>
      <div className="w-full aspect-square bg-white flex items-center justify-center rounded-lg">
        <img
          src={selectedImage || "/placeholder.jpg"}
          alt="Product"
          className="max-w-[60%] max-h-[60%] object-contain"
        />
      </div>

      {!isSingleImage && (
        <div className="flex md:flex-col gap-2 w-full md:w-1/4">
          {product.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img.image_url)}
              className={`flex-1 aspect-square bg-white flex items-center justify-center rounded-lg cursor-pointer ${
                selectedImage === img.image_url ? "ring-2 ring-[#FF9B57]" : ""
              }`}
            >
              <img
                src={img.image_url}
                alt={`Thumbnail ${index + 1}`}
                className="max-w-[60%] max-h-[60%] object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPetType, setSelectedPetType] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
   
    //api.get(`/get-product-details/${id}`)   
    axios.get(`http://127.0.0.1:8000/api/get-product-details/${id}`)
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

  if (loading) return <p className="p-8">Loading...</p>;
  if (!product) return <p className="p-8">No product found</p>;

  return (
    <div className="w-full min-h-screen bg-[#F5F5EB] p-4 sm:p-6 md:p-8 lg:p-[80px]">
      <div className="mb-6">
        <Link to="/store">
          <button className="text-gray-600 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back To Store
          </button>
        </Link>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row gap-6">
        <ProductImageGallery product={product} />
        <div className="w-full lg:w-1/2 space-y-4 mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="text-2xl font-semibold text-[#FF9B57] mb-4">
            {product.price} <span className="text-sm text-gray-500">AED</span>
          </div>
          {product.product_attributes && product.product_attributes.length > 0 && (
          <div className="mb-4">
            
            <div className="space-y-2">
            {product.product_attributes.map((attr) => (
              <div
                key={attr.id}
                className="flex items-center gap-4 border rounded-md px-4 py-2 text-sm text-gray-700 bg-white shadow-sm"
              >
                <span className="font-semibold text-gray-800">{attr.name}:</span>
                <span>{attr.pivot?.value || "-"}</span>
              </div>
            ))}
          </div>


          </div>
        )}


          <div className="flex md:flex-row flex-col gap-4 items-start">
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
                        : "border-[#FF9B57] text-black-800 bg-orange-400"
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/6">
              <p className="font-semibold mb-1">Pet Type</p>
              <div className="flex flex-wrap gap-2">
                {product.product_pet_types?.map((pet) => (
                  <button
                    key={pet.id}
                    onClick={() => setSelectedPetType(pet.name)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      selectedPetType === pet.name
                        ? "bg-[#FF9B57] text-black"
                        : "border-[#FF9B57] text-black-800 bg-orange-400"
                    }`}
                  >
                    {pet.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <p className="font-semibold mb-1">Product Type</p>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full border border-[#FF9B57] text-black-800 bg-orange-400 cursor-default">
                  {product.product_type?.name || "N/A"}
                </button>
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
            <button
              onClick={addProduct}
              className="flex-1 h-10 bg-[#FF9B57] text-black font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              Add to cart
            </button>
            <button className="w-10 h-10 bg-orange-500 text-black rounded-full hover:bg-orange-600 flex items-center justify-center">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>

      <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Details</h2>
          <hr className="mb-8 border-gray-300" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* About Product */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">About Product</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.about_product}
              </p>
            </div>

            {/* Key Features / Benefits */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-xl font-semibold text-[#1F2937] mb-3">Key Features / Benefits</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {product.benefits.replace(/^Key Features\/Benefits:\s*/i, '')}
        </p>

            </div>
          </div>
        </div>

    </div>
  );
};

export default ProductDetails;
