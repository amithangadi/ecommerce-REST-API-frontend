import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-widest text-yellow-300 mb-4">
              Welcome to ShopEase
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Shop Smart.
              <br />
              Live Better.
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Explore thousands of premium products with fast delivery,
              secure payments, and amazing discounts.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                to="/products"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition"
              >
                Explore
              </Link>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
              alt="Shopping"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;