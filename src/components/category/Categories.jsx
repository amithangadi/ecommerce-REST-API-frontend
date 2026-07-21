import { useQuery } from "@tanstack/react-query";

import CategoryCard from "./CategoryCard";
import { getCategories } from "../../services/categoryService";


// ----------------------------------------------------
// CATEGORY IMAGES
// Add a new category image here whenever required.
// The name MUST exactly match the category name in DB.
// ----------------------------------------------------

const categoryImages = {

    "Personal Care":
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",

    "Ice Creams":
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",

    "Beauty Products":
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",

    "Fruits":
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800",

    "Pen Corner":
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",

    "Fans and Air Coolers":
    "https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8e?w=800&auto=format&fit=crop",

    "Electronics":
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800",

    "Fashion":
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",

    "Books":
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800",

    "Shoes":
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",

    "Grocery":
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",

    "Furniture":
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",

    "Sports":
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",

    "Mobiles":
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",

    "Laptops":
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",

    "Home Appliances":
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800"

};


// ----------------------------------------------------
// DEFAULT IMAGE
// Used when a category does not exist in categoryImages
// ----------------------------------------------------

const defaultCategoryImage =
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800";


function Categories() {

    // Fetch categories from backend

    const {
        data: categories = [],
        isLoading,
        error
    } = useQuery({

        queryKey: ["categories"],

        queryFn: getCategories

    });


    // ----------------------------------------------------
    // LOADING
    // ----------------------------------------------------

    if (isLoading) {

        return (

            <section className="max-w-7xl mx-auto py-16 px-6">

                <h1 className="text-4xl font-bold mb-10">
                    Shop By Category
                </h1>

                <div className="text-center py-10">

                    <p className="text-gray-500 text-lg">
                        Loading categories...
                    </p>

                </div>

            </section>

        );

    }


    // ----------------------------------------------------
    // ERROR
    // ----------------------------------------------------

    if (error) {

        return (

            <section className="max-w-7xl mx-auto py-16 px-6">

                <h1 className="text-4xl font-bold mb-10">
                    Shop By Category
                </h1>

                <div className="text-center py-10">

                    <p className="text-red-500 text-lg">
                        Failed to load categories.
                    </p>

                </div>

            </section>

        );

    }


    // ----------------------------------------------------
    // EMPTY CATEGORIES
    // ----------------------------------------------------

    if (categories.length === 0) {

        return (

            <section className="max-w-7xl mx-auto py-16 px-6">

                <h1 className="text-4xl font-bold mb-10">
                    Shop By Category
                </h1>

                <div className="text-center py-10">

                    <p className="text-gray-500 text-lg">
                        No categories available.
                    </p>

                </div>

            </section>

        );

    }


    // ----------------------------------------------------
    // CATEGORY LIST
    // ----------------------------------------------------

    return (

        <section className="max-w-7xl mx-auto py-16 px-6">

            {/* Heading */}

            <div className="mb-10">

                <h1 className="text-4xl font-bold">
                    Shop By Category
                </h1>

                <p className="text-gray-500 mt-2">
                    Explore products from your favorite categories
                </p>

            </div>


            {/* Category Grid */}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {categories.map((category) => {

                    /*
                        Find image using category name.

                        Example:

                        category.name = "Fruits"

                        categoryImages["Fruits"]
                    */

                    const image =
                        categoryImages[category.name] ||
                        defaultCategoryImage;


                    return (

                        <CategoryCard

                            key={category.id}

                            id={category.id}

                            title={category.name}

                            image={image}

                        />

                    );

                })}

            </div>

        </section>

    );

}

export default Categories;