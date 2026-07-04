import { useState } from "react";
import { laptops } from "../data/laptops";
import LaptopCard from "../components/LaptopCard";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLaptops = laptops.filter((laptop) => {
    const search = searchTerm.toLowerCase();

    return (
      laptop.name.toLowerCase().includes(search) ||
      laptop.brand.toLowerCase().includes(search) ||
      laptop.processor.toLowerCase().includes(search) ||
      laptop.ram.toLowerCase().includes(search) ||
      laptop.storage.toLowerCase().includes(search) ||
      laptop.display.toLowerCase().includes(search) ||
      laptop.graphics.toLowerCase().includes(search) ||
      laptop.os.toLowerCase().includes(search) ||
      laptop.condition.toLowerCase().includes(search) ||
      laptop.price.toString().includes(search) ||
      laptop.discountPrice.toString().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Our Laptop Collection
          </h1>

          <p className="text-lg max-w-3xl mx-auto">
            Discover powerful laptops, notebooks and computing
            accessories designed for work, business, study and
            entertainment. Carefully selected to deliver performance,
            reliability and value.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Search by laptop name, brand, processor, RAM, storage or price..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mt-4 text-gray-600">
          Showing {filteredLaptops.length} laptop
          {filteredLaptops.length !== 1 ? "s" : ""}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        {filteredLaptops.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLaptops.map((laptop) => (
              <LaptopCard
                key={laptop.id}
                laptop={laptop}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              No Laptops Found
            </h2>

            <p className="text-gray-500">
              Try searching with a different laptop name,
              brand, processor, RAM, storage, or price.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}