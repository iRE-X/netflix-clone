"use server";

import { getAllMovies, getMovie, getRandomMovie } from "@/data/movie";

export const fetchMovies = async () => {
    const movies = await getAllMovies();
    return movies;
};

export const fetchRandomMovie = async () => {
    const movie = await getRandomMovie();
    if (!movie) return null;
    return movie;
};

export const fetchMovie = async (movieId: string) => {
    if (!movieId) return null;
    const movie = await getMovie(movieId);
    if (!movie) return null;
    return movie;
};
