import { X } from "lucide-react";
import React, { useState } from "react";

const FilterSidebar = ({
  isOpen,
  onClose,
  onApplyFilters,
  minPrice = 0,
  maxPrice = 5000,
}) => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState([]);
  const [selectedPetTypes, setSelectedPetTypes] = useState([]);

  const predefinedRanges = [
    { label: "Below AED 100", min: 0, max: 100 },
    { label: "AED 100 - 300", min: 100, max: 300 },
    { label: "AED 300 - 600", min: 300, max: 600 },
    { label: "Above AED 600", min: 600, max: 5000 },
  ];

  const petTypes = [
    { label: "Cats", value: "cat" },
    { label: "Dogs", value: "dog" },
    { label: "Birds", value: "bird" },
    { label: "Fish", value: "fish" },
  ];
  const petCounts = [125, 111, 75, 50];

  const productTypes = [
    { label: "Food", value: "food" },
    { label: "Accessories", value: "accessories" },
    { label: "Cloth", value: "cloth" },
    { label: "Toys", value: "toys" },
  ];

  const handlePetTypeToggle = (value) => {
    setSelectedPetTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  const handleProductTypeToggle = (value) => {
    setSelectedProductType((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  const handleReset = () => {
    setSelectedRange(null);
    setSelectedProductType([]);
    setSelectedPetTypes([]);
    onApplyFilters?.({
      priceRange: null,
      productTypes: [],
      petTypes: [],
    });
  };

  const handleApply = () => {
    onApplyFilters?.({
      priceRange: selectedRange,
      productTypes: selectedProductType,
      petTypes: selectedPetTypes,
    });
  };

  return (
    <aside
    className={`fixed top-0 left-0 w-full sm:w-2/3 md:w-1/2 h-full bg-white p-4 sm:p-6 transition-transform transform z-50 overflow-y-auto max-h-screen
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:relative lg:w-[250px] lg:translate-x-0 lg:block`}
  >
    <button
      className="lg:hidden sticky top-4 right-4 ml-auto block text-gray-600 z-50"
      onClick={onClose}
    >
      <X className="w-6 h-6" />
    </button>
  
    {/* Pet Type */}
    <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Pet Type</h2>
    {petTypes.map(({ label, value }, index) => (
      <label
        key={value}
        className="flex items-center justify-between mb-2 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="petType"
            className="accent-orange-400"
            checked={selectedPetTypes.includes(value)}
            onChange={() => handlePetTypeToggle(value)}
          />
          <span className="text-sm">{label}</span>
        </div>
        <span className="text-xs text-gray-500">{petCounts[index]}</span>
      </label>
    ))}
  
    {/* Product Type */}
    <h2 className="text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-3 sm:mb-4">Product Type</h2>
    <div className="grid grid-cols-2 gap-2 mb-6">
      {productTypes.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          onClick={() => handleProductTypeToggle(value)}
          className={`px-2 py-1.5 rounded-full border text-xs w-full whitespace-nowrap text-ellipsis ${
            selectedProductType.includes(value)
              ? "bg-orange-400 text-white border-orange-400"
              : "text-gray-600 border-gray-300"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  
    {/* Price Range */}
    <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Price</h2>
    <div className="flex flex-col gap-2 mb-5 sm:mb-6">
      {predefinedRanges.map((range) => (
        <label
          key={range.label}
          className={`flex items-center justify-between px-4 py-2 rounded-full border cursor-pointer ${
            selectedRange?.label === range.label
              ? "bg-orange-400 text-white border-orange-400"
              : "text-gray-600 border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="priceRange"
            value={range.label}
            checked={selectedRange?.label === range.label}
            onChange={() => setSelectedRange(range)}
            className="hidden"
          />
          <span className="text-sm">{range.label}</span>
        </label>
      ))}
    </div>
  
    <button
      className="w-full bg-orange-400 text-white rounded-full py-2 mb-2 text-sm"
      onClick={handleApply}
    >
      Apply Filter
    </button>
    <button
      className="w-full border border-gray-300 rounded-full py-2 text-sm"
      onClick={handleReset}
    >
      Reset
    </button>
  </aside>
  
  );
};

export default FilterSidebar;
