"use server";

import { currentUser } from "@/lib/currentUser";
import prisma from "@/prisma/db";

/**
 * Add movies to favorites.
 * @param movieId
 * @returns
 */
export const addToFavorites = async (movieId: string) => {
    const user = await currentUser();

    if (!user || !user.email) return null;

    const validMovieId = await prisma.movie.findUnique({
        where: {
            id: movieId,
        },
    });

    if (!validMovieId) return { error: "Invalid movieId." };

    const res = await prisma.user.update({
        where: {
            email: user.email,
        },
        data: {
            favoriteIds: {
                push: movieId,
            },
        },
    });

    if (!res) return { error: "Something went wrong!" };

    return { success: "Added to favorites." };
};

/**
 * Remove movies from favorites
 * @param movieId
 * @returns
 */
export const deleteFromFavorites = async (movieId: string) => {
    const user = await currentUser();

    if (!user || !user.email) return null;

    const validMovieId = await prisma.movie.findUnique({
        where: {
            id: movieId,
        },
    });

    if (!validMovieId) return { error: "Invalid movieId." };

    const currUser = await prisma.user.findUnique({
        where: {
            email: user.email,
        },
    });

    const favorites = currUser?.favoriteIds.filter(id => id != movieId);

    const res = await prisma.user.update({
        where: {
            email: user.email,
        },
        data: {
            favoriteIds: favorites,
        },
    });

    if (!res) return { error: "Something went wrong!" };

    return { success: "Removed from favorites." };
};

/**
 * Fetch all the favorite movies.
 * @returns favorite movies
 */
export const fetchAllFavoriteMovies = async () => {
    const user = await currentUser();

    if (!user || !user.email) return [];

    const currUser = await prisma.user.findUnique({
        where: {
            email: user.email,
        },
    });

    if (!currUser) return [];

    const favoriteMovies = await prisma.movie.findMany({
        where: {
            id: {
                in: currUser.favoriteIds,
            },
        },
    });

    return favoriteMovies;
};
