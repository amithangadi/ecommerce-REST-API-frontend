import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CategoryCard({ id, title, image }) {

    const navigate = useNavigate();


    const handleClick = () => {

        navigate(`/products?category=${id}`);

    };


    return (

        <motion.div

            whileHover={{
                y: -8,
                scale: 1.03
            }}

            onClick={handleClick}

            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"

        >

            {/* Image */}

            <div className="h-48 overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />

            </div>


            {/* Category Name */}

            <div className="p-5">

                <h2 className="text-xl font-bold">
                    {title}
                </h2>

            </div>

        </motion.div>

    );

}

export default CategoryCard;