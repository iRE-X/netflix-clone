"use client";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useMovies } from "@/hooks/useMovies";

export default function Home() {
    const movies = useMovies();

    return (
        <>
            <Navbar />
            <BillBoard />
            <MovieList data={movies} title="Trending" />
        </>
    );
}
