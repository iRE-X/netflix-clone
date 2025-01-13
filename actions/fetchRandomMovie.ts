"use server";

import { getRandomMovie } from "@/data/movie";

export const fetchRandomMovie = async () => {
    const movie = await getRandomMovie();
    if (!movie) return null;
    return movie;
};
