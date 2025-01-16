import React from "react";
import { useBillBoard } from "@/hooks/useBillBoard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const BillBoard = () => {
    const movie = useBillBoard();
    const { openModal } = useInfoModal();

    const handleClick = () => {
        openModal(movie.id);
    };

    return (
        <div className="relative h-[56.25vw]">
            <video
                className="w-full h-[56.25vw] object-cover brightness-[60%]"
                // autoPlay
                loop
                muted
                poster={movie.thumbnailUrl}
                src={movie.videoUrl}
            ></video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-xl md:text-5xl lg:text-6xl w-[50%] h-full font-bold drop-shadow-xl">
                    {movie.title}
                </p>
                <p className="text-white text-sm md:text-lg w-[90%] md:w-[70%] lg:w-[60%] mt-3 md:mt-8 drop-shadow-xl">
                    {movie.description}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-4">
                    <PlayButton movieId={movie.id} />
                    <button
                        onClick={handleClick}
                        className="bg-white text-white rounded-md py-1 md:py-2 px-2 md:px-2 bg-opacity-30 w-auto text-sm md:text-lg font-semibold flex flex-row gap-1 items-center hover:bg-opacity-20 transition"
                    >
                        <AiOutlineInfoCircle />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BillBoard;
