import { Movie } from "@prisma/client";
import React from "react";
import MovieCard from "./MovieCard";

interface Props {
    data: Movie[];
    title: string;
}

const MovieList = ({ data, title }: Props) => {
    if (!data) return null;

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <p className="text-white text-base md:text-xl lg:text-2xl font-semibold">
                {title}
            </p>
            <div className="grid grid-cols-4 gap-2">
                {data.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
