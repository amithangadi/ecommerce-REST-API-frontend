import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/categoryService";

function FilterSidebar({ selectedCategory, onCategoryChange }) {

    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="font-bold text-2xl">
                Filters
            </h2>

            <hr className="my-4" />

            <h3 className="font-semibold mb-3">
                Category
            </h3>

            <div className="space-y-3">

                <label className="flex items-center gap-2 cursor-pointer">

                    <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === ""}
                        onChange={() => onCategoryChange("")}
                    />

                    All Categories

                </label>

                {categories.map((category) => (

                    <label
                        key={category.id}
                        className="flex items-center gap-2 cursor-pointer"
                    >

                        <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === String(category.id)}
                            onChange={() =>
                                onCategoryChange(String(category.id))
                            }
                        />

                        {category.name}

                    </label>

                ))}

            </div>

        </div>
    );
}

export default FilterSidebar;