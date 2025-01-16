import { fetchMovies } from "@/actions/movie";
import { Movie } from "@prisma/client";
import { useEffect, useState } from "react";

export const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const handler = async () => {
            const movies = await fetchMovies();
            if (!movies) return;
            setMovies(movies);
        };

        handler();
    }, []);

    return movies;
};
