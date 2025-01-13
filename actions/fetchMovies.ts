"use server";

import { getAllMovies } from "@/data/movie";

export const fetchMovies = async () => {
    const movies = await getAllMovies();
    return movies;
};
