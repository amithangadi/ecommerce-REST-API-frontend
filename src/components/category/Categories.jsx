import CategoryCard from "./CategoryCard";

const categories = [

    {
        title: "Electronics",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        title: "Fashion",
        image:
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
    },

    {
        title: "Books",
        image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794"
    },

    {
        title: "Shoes",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    }

];

function Categories() {

    return (

        <section className="max-w-7xl mx-auto py-16 px-6">

            <h1 className="text-4xl font-bold mb-10">

                Shop By Category

            </h1>

            <div className="grid md:grid-cols-4 gap-8">

                {
                    categories.map((category) => (

                        <CategoryCard
                            key={category.title}
                            {...category}
                        />

                    ))
                }

            </div>

        </section>

    );

}

export default Categories;