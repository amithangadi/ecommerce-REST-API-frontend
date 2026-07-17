import { motion } from "framer-motion";

function CategoryCard({ title, image }) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
        >
            <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-bold">
                    {title}
                </h2>

            </div>

        </motion.div>
    );
}

export default CategoryCard;