import prisma from "@/prisma/db";

export const getRandomMovie = async () => {
    try {
        const count = await prisma.movie.count();
        const randomIndex = Math.floor(Math.random() * count);
        const random = await prisma.movie.findMany({
            take: 1,
            skip: randomIndex,
        });
        return random[0];
    } catch {
        return null;
    }
};

export const getAllMovies = async () => {
    try {
        return await prisma.movie.findMany();
    } catch {
        return null;
    }
};

export const getMovie = async (movieId: string) => {
    try {
        return await prisma.movie.findUnique({ where: { id: movieId } });
    } catch {
        return null;
    }
};
