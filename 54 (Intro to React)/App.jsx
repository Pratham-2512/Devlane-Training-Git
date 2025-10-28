import React from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
