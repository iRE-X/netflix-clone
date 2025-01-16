import { fetchMovie } from "@/actions/movie";
import useSWR from "swr";

const useMovie = (movieId: string) => {
    const { data, error, isLoading } = useSWR(movieId, fetchMovie, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return { data, error, isLoading };
};

export default useMovie;
