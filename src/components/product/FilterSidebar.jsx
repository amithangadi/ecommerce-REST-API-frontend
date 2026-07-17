function FilterSidebar() {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="font-bold text-2xl">

                Filters

            </h2>

            <hr className="my-4"/>

            <h3 className="font-semibold">

                Category

            </h3>

            <div className="space-y-2 mt-3">

                <label>

                    <input type="checkbox"/>

                    Electronics

                </label>

                <label>

                    <input type="checkbox"/>

                    Fashion

                </label>

                <label>

                    <input type="checkbox"/>

                    Books

                </label>

                <label>

                    <input type="checkbox"/>

                    Shoes

                </label>

            </div>

        </div>

    );

}

export default FilterSidebar;