import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover"
        />
        {product.sale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {product.sale}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-indigo-600 font-bold">${product.price}</span>
          <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
