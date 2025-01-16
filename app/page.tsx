"use client";
import BillBoard from "@/components/BillBoard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { useFavoriteMovies } from "@/hooks/useFavoriteMovies";
import useInfoModal from "@/hooks/useInfoModal";
import { useMovies } from "@/hooks/useMovies";

export default function Home() {
    const movies = useMovies();
    const { data: favorites } = useFavoriteMovies();
    const { isOpen, closeModal } = useInfoModal();

    return (
        <>
            <InfoModal visible={isOpen} onClose={closeModal} />
            <Navbar />
            <BillBoard />
            <MovieList data={movies} title="Trending" />
            {favorites && <MovieList data={favorites} title="Fevorites" />}
        </>
    );
}
