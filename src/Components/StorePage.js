import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sliders, Heart, Star } from "lucide-react";
import FilterSidebar from "./FilterSidebar";
// import axios from "axios";
import { api } from '../utils/api'; 


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative mb-4 flex justify-center items-center min-h-[200px]">
        <button className="absolute right-0 top-0 z-10">
          <Heart className="w-6 h-6 text-gray-400" />
        </button>
        <span className="absolute left-0 top-0 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
          {product.discount || "30%"}
        </span>
        <img
          src={product.images?.[0]?.image_url || "/images/placeholder.png"}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 text-md mb-2 min-h-[40px] line-clamp-2">{product.name}</p>
      <p className="text-xl font-bold mb-4">{product.price} AED</p>

      <button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-full text-sm font-medium transition-colors">
        Add To Cart
      </button>
    </div>
  );
};

const StorePage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState([]);
  const [selectedPetTypes, setSelectedPetTypes] = useState([]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);

  // Initial load: get price range and all active products
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);

        // Fetch price range
        const priceRes = await 
        api.get('/get-all-active-products');        
        //axios.get("http://127.0.0.1:8000/api/get-products-price-range");
        const min = priceRes.data.min_price ?? 0;
        const max = priceRes.data.max_price ?? 5000;
        setMinPrice(min);
        setMaxPrice(max);
        setSelectedRange({ min, max });

        // Fetch all active products initially
        
        const productsRes = await api.get(`/get-all-active-products`)
        //axios.get("http://127.0.0.1:8000/api/get-all-active-products");
        const allProducts = productsRes.data.products || [];
        setProducts(allProducts);
        setFilteredProducts(allProducts);

        setLoading(false);
      } catch (error) {
        console.error("Initial load error:", error);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Function to fetch filtered products from backend
  const fetchFilteredProducts = async (
    search = "",
    productTypes = [],
    petTypes = [],
    priceRange = null
  ) => {
    setLoading(true);
    try {
      const params = {};

      if (search.trim() !== "") params.search = search;
      if (productTypes.length) params.productTypes = productTypes;
      if (petTypes.length) params.petTypes = petTypes;
      if (priceRange) {
        params.minPrice = priceRange.min;
        params.maxPrice = priceRange.max;
      }
      console.log("🔍 Sending filters to backend:", params); // DEBUG: See what is being sent

      const response = await 
      api.get('/get-filtered-products', { params });      
      //axios.get("http://127.0.0.1:8000/api/get-filtered-products", { params });
      const filtered = response.data.products || [];
      setFilteredProducts(filtered);
    } catch (error) {
      console.error("Filter fetch error:", error);
    }
    setLoading(false);
  };

  // When filters are applied from sidebar
  const onApplyFilters = (filters) => {
    setSelectedRange(filters.priceRange);
    setSelectedProductType(filters.productTypes);
    setSelectedPetTypes(filters.petTypes);

    fetchFilteredProducts(searchQuery, filters.productTypes, filters.petTypes, filters.priceRange);

    setIsFilterOpen(false);
  };

 
  // useEffect(() => {
  //   fetchFilteredProducts(searchQuery, selectedProductType, selectedPetTypes, selectedRange);
  // }, [searchQuery]);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-[#F5F6ED] min-h-screen">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Store</h1>
        <div className="relative flex-1 max-w-md">
        <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchFilteredProducts(searchQuery, selectedProductType, selectedPetTypes, selectedRange);
            }}
            className="relative flex-1 max-w-md"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-orange-400" />
            </button>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-orange-400 rounded-full p-2">
              <Search className="w-4 h-4 text-white" />
            </div>
          </form>

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
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          minPrice={minPrice}
          maxPrice={maxPrice}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
          selectedProductType={selectedProductType}
          setSelectedProductType={setSelectedProductType}
          selectedPetTypes={selectedPetTypes}
          setSelectedPetTypes={setSelectedPetTypes}
          onApplyFilters={onApplyFilters}
        />

        <main className="flex-1">
          {loading ? (
            <p className="text-center text-lg">Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-lg">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StorePage;
