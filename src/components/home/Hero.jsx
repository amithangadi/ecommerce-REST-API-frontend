import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaShippingFast,
    FaShieldAlt,
    FaTags
} from "react-icons/fa";

function Hero() {

    return (

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">

            {/* Background Decorations */}

            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl"></div>


            <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">


                    {/* LEFT SIDE */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            x: -60
                        }}

                        animate={{
                            opacity: 1,
                            x: 0
                        }}

                        transition={{
                            duration: 0.7
                        }}

                    >

                        {/* Small Badge */}

                        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">

                            <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>

                            <span className="text-sm font-medium tracking-wide">
                                Everything you need, one place
                            </span>

                        </div>


                        {/* Main Heading */}

                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1]">

                            Discover.

                            <br />

                            Shop.

                            <br />

                            <span className="text-yellow-300">
                                Enjoy.
                            </span>

                        </h1>


                        {/* Description */}

                        <p className="mt-7 text-lg text-blue-50 max-w-xl leading-relaxed">

                            Discover products you'll love at prices that make
                            sense. Simple shopping, secure checkout and fast
                            delivery — all in one place.

                        </p>


                        {/* Buttons */}

                        <div className="flex flex-wrap gap-4 mt-8">

                            <Link

                                to="/products"

                                className="group flex items-center gap-3 bg-white text-blue-600 px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"

                            >

                                Start Shopping

                                <FaArrowRight
                                    className="group-hover:translate-x-1 transition"
                                />

                            </Link>


                            <Link

                                to="/products"

                                className="flex items-center px-7 py-3.5 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"

                            >

                                Browse Products

                            </Link>

                        </div>


                        {/* Features */}

                        <div className="flex flex-wrap gap-6 mt-10 text-sm">

                            <div className="flex items-center gap-2">

                                <FaShippingFast className="text-yellow-300 text-lg" />

                                <span>
                                    Fast Delivery
                                </span>

                            </div>


                            <div className="flex items-center gap-2">

                                <FaShieldAlt className="text-yellow-300 text-lg" />

                                <span>
                                    Secure Payment
                                </span>

                            </div>


                            <div className="flex items-center gap-2">

                                <FaTags className="text-yellow-300 text-lg" />

                                <span>
                                    Best Deals
                                </span>

                            </div>

                        </div>

                    </motion.div>


                    {/* RIGHT SIDE */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            x: 50
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0
                        }}

                        transition={{
                            duration: 0.8
                        }}

                        className="relative"

                    >


                        {/* Main Product Card */}

                        <div className="relative bg-white/15 backdrop-blur-xl border border-white/20 rounded-[40px] p-5 shadow-2xl">

                            <div className="bg-white rounded-[32px] overflow-hidden">

                                <img

                                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"

                                    alt="Featured Product"

                                    className="w-full h-[420px] object-cover"

                                />

                            </div>


                            {/* New Collection Badge */}

                            <div className="absolute top-10 left-10 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg">

                                <p className="text-xs text-gray-500">
                                    Explore
                                </p>

                                <p className="font-bold">
                                    New Collection
                                </p>

                            </div>

                        </div>


                        {/* Floating Discount Card */}

                        <motion.div

                            animate={{
                                y: [0, -10, 0]
                            }}

                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}

                            className="absolute -right-4 top-16 bg-white text-gray-900 rounded-2xl shadow-xl px-5 py-4"

                        >

                            <p className="text-sm text-gray-500">
                                Special Offers
                            </p>

                            <p className="text-2xl font-bold text-blue-600">
                                Great Deals
                            </p>

                        </motion.div>


                        {/* Floating Delivery Card */}

                        <motion.div

                            animate={{
                                y: [0, 10, 0]
                            }}

                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}

                            className="absolute -left-8 bottom-10 bg-white text-gray-900 rounded-2xl shadow-xl px-5 py-4"

                        >

                            <div className="flex items-center gap-3">

                                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">

                                    <FaShippingFast size={22} />

                                </div>

                                <div>

                                    <p className="font-bold">
                                        Fast Delivery
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Right to your doorstep
                                    </p>

                                </div>

                            </div>

                        </motion.div>


                    </motion.div>

                </div>

            </div>

        </section>

    );

}

export default Hero;