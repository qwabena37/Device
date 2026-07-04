import { Link } from "react-router-dom";
import { laptops } from "../data/laptops";

export default function Home() {
  const featured = laptops.slice(0, 3);

  return (
    <div className="bg-gray-50">

     {/* HERO SECTION */}
<section
  className="text-white px-4 bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
  style={{
    backgroundImage: "url('./images/KASSTECHD.png')",
  }}
>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Quality Laptops for Work, Business & Study
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Shop quality laptops at affordable prices. Whether for business, school, gaming or everyday use, KASSTECH has the perfect device for you.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/laptops"
              className="bg-black text-yellow-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-700"
            >
              Get Now
            </Link>

            <a
              href="https://wa.me/233540232557"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Laptops
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((laptop) => (
            <div
              key={laptop.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={laptop.images[0]}
                alt={laptop.name}
                className="h-72 w-full object-cover"
              />

             <div className="p-5">
  <h3 className="font-bold text-lg">
    {laptop.name}
  </h3>

  <p className="text-gray-500 text-sm mt-2">
    {laptop.processor}
  </p>

  <p className="text-gray-500 text-sm">
    {laptop.ram} RAM • {laptop.storage}
  </p>

  <p className="text-gray-500 text-sm">
    {laptop.display}
  </p>

  <div className="mt-3 flex justify-between items-center">
    <span className="text-gray-400 line-through">
      GH₵{laptop.price.toLocaleString()}
    </span>

    <span className="text-yellow-700 font-bold text-xl">
      GH₵{laptop.discountPrice.toLocaleString()}
    </span>
  </div>

  <Link
    to={`/laptops/${laptop.id}`}
    className="block mt-4 text-center bg-black text-yellow-700 py-2 rounded-lg hover:bg-gray-700"
  >
    View Details
  </Link>
</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Get a Laptop from KASSTECH?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                💎 Premium Quality
              </h3>
              <p className="text-gray-600">
                Carefully evaluated laptops designed for performance and durability.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                🚚 Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick delivery across Ghana with reliable service.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-lg mb-2">
                💬 Easy Ordering
              </h3>
              <p className="text-gray-600">
                Order instantly via WhatsApp with fast response support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-yellow-700 py-16 text-center px-4">
        <h2 className="text-3xl font-bold">
          Ready to buy or upgrade your laptop?
        </h2>

        <p className="mt-3 text-white/90">
          Explore our latest collection now.
        </p>

        <Link
          to="/laptops"
          className="inline-block mt-6 bg-white text-yellow-700 px-8 py-3 rounded-full font-semibold hover:bg-black"
        >
          Shop Collection
        </Link>
      </section>

    </div>
  );
}