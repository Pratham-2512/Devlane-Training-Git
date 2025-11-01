import React from "react";
import ProductCard from "../components/ProductCard";
import mugBlack from "../assets/coffemug.jpg";
import mugFather from "../assets/mugfather.jpg";
import tshirtGreen from "../assets/tshirtgreen.jpg";
import mugPersonalized from "../assets/mugpersonalized.jpg";

const products = [
  { id: 1, name: "Black Printed Coffee Mug", image: mugBlack, category: "Mugs / T-Shirts", price: 15, oldPrice: 25, discount: "-40%" },
  { id: 2, name: "Father’s Day Coffee Mug", image: mugFather, category: "Mugs / T-Shirts", price: 12, oldPrice: 20, discount: "-30%" },
  { id: 3, name: "Green Printed T-shirt", image: tshirtGreen, category: "Mugs / T-Shirts", price: 19, oldPrice: 25, discount: "-25%" },
  { id: 4, name: "Personalized Mug", image: mugPersonalized, category: "Mugs / T-Shirts", price: 10, oldPrice: 15, discount: "-35%" },
];

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">amazon</h1>
        <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
