"use client";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { useFavoriteMovies } from "@/hooks/useFavoriteMovies";
import { useMovies } from "@/hooks/useMovies";

export default function Home() {
    const movies = useMovies();
    const { data: favorites } = useFavoriteMovies();

    return (
        <>
            <Navbar />
            <BillBoard />
            <MovieList data={movies} title="Trending" />
            {favorites && <MovieList data={favorites} title="Fevorites" />}
        </>
    );
}
