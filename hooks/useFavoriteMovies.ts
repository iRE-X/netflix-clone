import { fetchAllFavoriteMovies } from "@/actions/favorite";
import useSWR from "swr";

export const useFavoriteMovies = () => {
    const { data, error, isLoading, mutate } = useSWR(
        "-",
        fetchAllFavoriteMovies,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return { data, error, isLoading, mutate };
};
