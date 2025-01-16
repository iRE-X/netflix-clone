import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";

interface Props {
    visible: boolean;
    onClose: () => void;
}

const InfoModal = ({ visible, onClose }: Props) => {
    if (!visible) return null;

    const [isVisible, setVisible] = useState(!!visible);

    const { movieId } = useInfoModal();
    const { data: movie } = useMovie(movieId!);

    useEffect(() => {
        setVisible(!!visible);
    }, [visible]);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <div
            className="
                z-50
                transition
                duration-300
                bg-black
                bg-opacity-80
                flex
                items-center
                justify-center
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
        "
        >
            <div
                className="
                    w-auto
                    mx-auto
                    relative
                    max-w-3xl
                    rounded-md
                    overflow-auto
            "
            >
                <div
                    className={`
                    ${isVisible ? "scale-100" : "scale-0"}
                    transform
                    relative
                    duration-300
                    flex-auto
                    bg-zinc-900
                    drop-shadow-md
                    `}
                >
                    <div className="relative h-96">
                        <video
                            className="w-full h-full object-cover brightness-[60%]"
                            controls
                            controlsList="nodownload"
                            poster={movie?.thumbnailUrl}
                            src={movie?.videoUrl}
                        ></video>
                        <div
                            className="
                            cursor-pointer
                            absolute
                            flex
                            items-center
                            justify-center
                            right-3
                            top-3
                            w-10
                            h-10
                            bg-black
                            rounded-full
                            bg-opacity-70
                        "
                            onClick={handleClose}
                        >
                            <RxCrossCircled className="text-white" size={35} />
                        </div>
                        <div
                            className="
                            absolute
                            bottom-[20%]
                            left-7
                        "
                        >
                            <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold h-full mb-8">
                                {movie?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton movieId={movie?.id!} />
                                <FavoriteButton movieId={movie?.id!} />
                            </div>
                        </div>
                    </div>

                    <div className="px-12 py-8">
                        <p className="text-green-400 font-semibold text-lg mb-2">
                            <span className="px-2 py-1 bg-zinc-600 rounded-full">
                                New
                            </span>
                        </p>
                        <p className="text-lg text-white">
                            <span className="text-zinc-400">
                                Duration: &ensp;
                            </span>
                            {movie?.duration}
                        </p>
                        <p className="text-lg text-white">
                            <span className="text-zinc-400">Genre: &ensp;</span>
                            {movie?.genre}
                        </p>
                        <p className="text-lg text-white">
                            <span className="text-zinc-400">
                                Description: &ensp;
                            </span>
                            {movie?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
