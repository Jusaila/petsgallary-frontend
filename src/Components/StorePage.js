import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Heart, Star, Search, Sliders, X } from "lucide-react";

const ProductCard = ({ price, discount, name }) => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate("/ProductDetails")}
        >
            <div className="relative mb-4 flex justify-center items-center min-h-[200px]">
                <button className="absolute right-0 top-0 z-10">
                    <Heart className="w-6 h-6 text-gray-400" />
                </button>
                <span className="absolute left-0 top-0 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                    {discount}
                </span>
                <img
                    src="/envato-labs-image-edit (8) 1.png"
                    alt="Product"
                    className="w-[180px] h-[180px] object-contain"
                />
            </div>

            <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Star
                        key={index}
                        className={`w-4 h-4 ${index < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                ))}
            </div>

            <p className="text-gray-700 text-md mb-2 min-h-[40px] line-clamp-2">{name}</p>
            <p className="text-xl font-bold mb-4">{price} AED</p>

            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-full text-sm font-medium transition-colors">
                Add To Cart
            </button>
        </div>
    );
};

const StorePage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/get-all-active-products")
            .then((response) => {
                console.log("API response:", response.data);
                setProducts(response.data.products); // ✅ Correctly setting products
                setLoading(false); // ✅ Mark loading as done!
            })
            .catch((error) => {
                console.error("API fetch error:", error);
                setLoading(false); // Also stop loading in case of error
            });
    }, []);
    
      
      

    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 bg-[#F5F6ED] min-h-screen">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold">Store</h1>
                <div className="relative flex-1 max-w-md">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-orange-400 rounded-full p-2">
                        <Search className="w-4 h-4 text-white" />
                    </div>
                </div>
                <button
                    className="lg:hidden flex items-center gap-2 bg-orange-400 text-white px-4 py-2 rounded-full"
                    onClick={() => setIsFilterOpen(true)}
                >
                    <Sliders className="w-5 h-5" /> Filters
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <aside
                    className={`fixed top-0 left-0 w-3/4 sm:w-2/3 md:w-1/2 h-full bg-white p-6 transition-transform transform z-50 ${
                        isFilterOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:relative lg:w-[250px] lg:translate-x-0 lg:block`}
                >
                    <button
                        className="lg:hidden absolute right-4 top-4 text-gray-600"
                        onClick={() => setIsFilterOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <h2 className="text-xl font-semibold mb-4">Pet Type</h2>
                    {["Cats", "Dogs", "Birds", "Fish"].map((pet, index) => (
                        <label key={pet} className="flex items-center justify-between mb-3 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="petType" className="accent-orange-400" />
                                <span>{pet}</span>
                            </div>
                            <span className="text-gray-500">{[125, 111, 75, 50][index]}</span>
                        </label>
                    ))}

                    <h2 className="text-xl font-semibold mt-6 mb-4">Product Type</h2>
                    {["Food", "Accessories", "Cloth", "Toys"].map((type) => (
                        <details key={type} className="mb-2">
                            <summary className="flex items-center justify-between cursor-pointer py-1">
                                <span>{type}</span>
                                <span className="text-gray-400">›</span>
                            </summary>
                        </details>
                    ))}

                    <PriceRangeSlider />
                </aside>

                <main className="flex-1">
                    {loading ? (
                        <p className="text-center text-lg">Loading products...</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          {products?.map(product => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price || 0}
                                discount="30%" // replace with actual discount if available
                               
                            />
                        ))}


                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

const PriceRangeSlider = () => {
    const [range, setRange] = useState(175);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Price</h2>
            <div className="flex gap-2 mb-6">
                <div className="flex-1 border rounded-full px-4 py-2">
                    <span>₹100</span>
                </div>
                <div className="flex-1 border rounded-full px-4 py-2">
                    <span>₹250</span>
                </div>
            </div>

            <div className="relative mb-6">
                <div className="h-1 bg-gray-200 rounded">
                    <div
                        className="absolute h-1 bg-orange-400 rounded"
                        style={{ width: `${((range - 100) / 150) * 100}%` }}
                    />
                </div>
                <input
                    type="range"
                    min="100"
                    max="250"
                    value={range}
                    onChange={(e) => setRange(Number(e.target.value))}
                    className="absolute w-full h-1 opacity-0 cursor-pointer"
                />
                <div
                    className="absolute w-4 h-4 bg-orange-400 rounded-full -mt-1.5"
                    style={{ left: `${((range - 100) / 150) * 100}%` }}
                />
            </div>

            <button className="w-full bg-orange-400 text-white rounded-full py-2 mb-2">
                Apply Filter
            </button>
            <button className="w-full border border-gray-300 rounded-full py-2">
                Reset
            </button>
        </div>
    );
};

export default StorePage;
