import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    getWishlist,
    removeFromWishlist
} from "../../services/wishlistService";

import WishlistItem from "../../components/wishlist/WishlistItem";

function Wishlist() {

    const userId = 1;

    const queryClient = useQueryClient();

    const {
        data: wishlist = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["wishlist", userId],
        queryFn: () => getWishlist(userId),
    });

    const removeMutation = useMutation({
        mutationFn: removeFromWishlist,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["wishlist", userId],
            });
        },
    });

    if (isLoading) {
        return <h2 className="text-center py-10">Loading...</h2>;
    }

    if (error) {
        return <h2 className="text-center py-10">Failed to load wishlist.</h2>;
    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-4xl font-bold mb-8">
                ❤️ My Wishlist
            </h1>

            <div className="space-y-6">

                {wishlist.length === 0 ? (

                    <div className="bg-white rounded-xl shadow p-10 text-center">

                        <h2 className="text-2xl">
                            Your wishlist is empty.
                        </h2>

                    </div>

                ) : (

                    wishlist.map(item => (

                        <WishlistItem
                            key={item.id}
                            item={item}
                            onRemove={() =>
                                removeMutation.mutate(item.id)
                            }
                        />

                    ))

                )}

            </div>

        </div>

    );

}

export default Wishlist;