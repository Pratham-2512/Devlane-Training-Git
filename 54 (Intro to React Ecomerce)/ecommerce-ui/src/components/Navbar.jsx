const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#232F3E] tracking-wide">
        amazon
      </h1>
      <select className="border border-gray-300 rounded p-2 text-gray-600 text-sm">
        <option>Default sorting</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </nav>
  );
};

export default Navbar;
