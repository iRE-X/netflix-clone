"use client";

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

interface Props {
    params: {
        movieId: string;
    };
}

const WatchPage = ({ params: { movieId } }: Props) => {
    const router = useRouter();

    const { data: movie } = useMovie(movieId);

    return (
        <div className="h-screen w-screen bg-black">
            <nav
                className="
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-black
            bg-opacity-70
        "
            >
                <BsArrowLeftCircle
                    className="text-white cursor-pointer"
                    size={40}
                    onClick={() => router.push("/")}
                />
                <p className="text-white text-xl md:text-3xl font-bold">
                    <span className="font-light">Watching: </span>
                    {movie?.title}
                </p>
            </nav>
            <video
                controls
                controlsList="nodownload"
                className="h-full w-full"
                poster={movie?.thumbnailUrl}
                src={movie?.videoUrl}
            ></video>
        </div>
    );
};

export default WatchPage;
