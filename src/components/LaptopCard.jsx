import { useState } from "react";
import { Link } from "react-router-dom";

export default function LaptopCard({ laptop }) {
  const [mainImage, setMainImage] = useState(
    laptop.images?.[0] || "/images/no-image.jpg"
  );

  const savings = laptop.price - laptop.discountPrice;

  const whatsappMessage = encodeURIComponent(
    `Hello KASSTECH, I'm interested in the ${laptop.name} (${laptop.processor}, ${laptop.ram}, ${laptop.storage}) priced at GH₵${laptop.discountPrice}.`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={mainImage}
          alt={laptop.name}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Save GH₵{savings}
        </div>

        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {laptop.brand}
        </div>
      </div>

      {/* Thumbnails */}
      {laptop.images.length > 1 && (
        <div className="flex justify-center gap-2 p-3">
          {laptop.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={laptop.name}
              onClick={() => setMainImage(img)}
              className={`w-14 h-14 rounded-lg object-cover cursor-pointer border-2 ${
                mainImage === img
                  ? "border-blue-600"
                  : "border-gray-200"
              }`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">
          {laptop.name}
        </h3>

        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Processor:</span>{" "}
            {laptop.processor}
          </p>

          <p>
            <span className="font-semibold">RAM:</span>{" "}
            {laptop.ram}
          </p>

          <p>
            <span className="font-semibold">Storage:</span>{" "}
            {laptop.storage}
          </p>

          <p>
            <span className="font-semibold">Display:</span>{" "}
            {laptop.display}
          </p>

          <p>
            <span className="font-semibold">Graphics:</span>{" "}
            {laptop.graphics}
          </p>

          <p>
            <span className="font-semibold">OS:</span>{" "}
            {laptop.os}
          </p>

          <p>
            <span className="font-semibold">Warranty:</span>{" "}
            {laptop.warranty}
          </p>

          <p>
            <span className="font-semibold">Condition:</span>{" "}
            {laptop.condition}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-5">
          <span className="line-through text-gray-400 text-lg">
            GH₵{laptop.price.toLocaleString()}
          </span>

          <span className="text-2xl font-bold text-blue-600">
            GH₵{laptop.discountPrice.toLocaleString()}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Link
            to={`/laptops/${laptop.id}`}
            className="flex-1 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>

          <a
            href={`https://wa.me/233540232557?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}