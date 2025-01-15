import { addToFavorites, deleteFromFavorites } from "@/actions/favorite";
import { useFavoriteMovies } from "@/hooks/useFavoriteMovies";
import { Movie } from "@prisma/client";
import React, { useCallback } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface Props {
    movieId: string;
}

const FavoriteButton = ({ movieId }: Props) => {
    const { data: favorites = [], mutate } = useFavoriteMovies();

    let isFavorite = !!favorites.find((f: Movie) => f.id == movieId);

    const toggle = useCallback(async () => {
        let res = null;

        if (isFavorite) {
            res = await deleteFromFavorites(movieId);
        } else res = await addToFavorites(movieId);

        if (!!res?.success) {
            isFavorite = !isFavorite;
        }

        mutate();
    }, [movieId, favorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <div
            className="
            cursor-pointer
            border-2
            rounded-full
            group/item
            w-6
            h-6
            lg:w-10
            lg:h-10
            flex
            items-center
            justify-center
            transition
            border-white
            hover:border-neutral-300
    "
            onClick={toggle}
        >
            <Icon className="text-white" size={30} />
        </div>
    );
};

export default FavoriteButton;
