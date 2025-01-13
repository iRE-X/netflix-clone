import { fetchRandomMovie } from "@/actions/fetchRandomMovie";
import { Movie } from "@prisma/client";
import { useEffect, useState } from "react";

export const useBillBoard = () => {
    const [movie, setMovie] = useState<Movie>({} as Movie);

    useEffect(() => {
        const handler = async () => {
            const random = await fetchRandomMovie();
            if (!random) return;
            setMovie(random);
        };

        handler();
    }, []);

    return movie;
};
