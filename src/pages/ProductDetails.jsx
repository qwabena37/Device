import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { laptops } from "../data/laptops";

export default function ProductDetails() {
  const { id } = useParams();

  const laptop = laptops.find((item) => item.id === Number(id));

  const [mainImage, setMainImage] = useState(
    laptop?.images?.[0] || ""
  );

  if (!laptop) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Product Not Found
        </h1>

        <Link
          to="/laptops"
          className="bg-black text-yellow-700 px-6 py-3 rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const savings = laptop.price - laptop.discountPrice;

  const whatsappMessage = encodeURIComponent(
    `Hello KASSTECH, I'm interested in the ${laptop.name} priced at GH₵${laptop.discountPrice}.`
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>
          {" / "}
          <Link to="/laptops" className="hover:text-pink-600">
            Laptops
          </Link>
          {" / "}
          <span>{laptop.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Images */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow">
              <img
                src={mainImage}
                alt={laptop.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="flex gap-3 mt-4">
              {laptop.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={laptop.name}
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img
                      ? "border-black"
                      : "border-yellow-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="inline-block bg-black text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              Available
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {laptop.name}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-gray-400 line-through text-xl">
                GH₵{laptop.price}
              </span>

              <span className="text-4xl font-bold text-pink-600">
                GH₵{laptop.discountPrice}
              </span>
            </div>

            <div className="mt-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Save GH₵{savings}
              </span>
            </div>

        <div className="mt-8 space-y-4">
  <p>
    <strong>Brand:</strong> {laptop.brand}
  </p>

  <p>
    <strong>Processor:</strong> {laptop.processor}
  </p>

  <p>
    <strong>RAM:</strong> {laptop.ram}
  </p>

  <p>
    <strong>Storage:</strong> {laptop.storage}
  </p>

  <p>
    <strong>Display:</strong> {laptop.display}
  </p>

  <p>
    <strong>Graphics:</strong> {laptop.graphics}
  </p>

  <p>
    <strong>Operating System:</strong> {laptop.os}
  </p>

  <p>
    <strong>Battery:</strong> {laptop.battery}
  </p>

  <p>
    <strong>Warranty:</strong> {laptop.warranty}
  </p>

  <p>
    <strong>Condition:</strong> {laptop.condition}
  </p>

  <p>
    <strong>Availability:</strong> In Stock
  </p>
</div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">
                Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
  The {laptop.name} is a high-performance laptop powered by
  {` ${laptop.processor}`}, featuring {` ${laptop.ram}`} RAM and
  {` ${laptop.storage}`} storage. It is designed for business,
  study, remote work, and everyday productivity while delivering
  reliability, speed, and excellent performance.
</p>
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href={`https://wa.me/233540232557?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold"
              >
                Order on WhatsApp
              </a>

              <Link
                to="/laptops"
                className="bg-gray-200 hover:bg-gray-300 px-8 py-4 rounded-xl font-semibold"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Related Products
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {laptops
              .filter((item) => item.id !== laptop.id)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/laptops/${item.id}`}
                  className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-yellow-700 font-bold mt-2">
                      GH₵{item.discountPrice}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}