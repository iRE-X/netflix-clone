import { Movie } from "@prisma/client";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import { AiFillInfoCircle } from "react-icons/ai";
import useInfoModal from "@/hooks/useInfoModal";

interface Props {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
    const router = useRouter();
    const { openModal } = useInfoModal();

    return (
        <div className="group bg-zinc-900 h-[12vw] relative">
            <img
                className="
                    cursor-pointer 
                    rounded-md 
                    object-cover 
                    sm:group-hover:opacity-0 
                    w-full 
                    h-[12vw]
                    shadow-xl
                    transition
                    delay-200 
                "
                src={movie.thumbnailUrl}
                alt="movie thumbnail"
            />
            <div
                className="
                    absolute 
                    top-0 
                    opacity-0
                    z-10 
                    invisible 
                    sm:visible 
                    w-full 
                    scale-0 
                    group-hover:scale-110 
                    group-hover:-translate-y-[6vw] 
                    group-hover:translate-x-[2vw]
                    group-hover:opacity-100
                    transition
                    delay-200
                "
            >
                <img
                    className="
                    object-cover
                    w-full
                    h-[12vw]
                    shadow-xl
                    cursor-pointer
                    transition
                "
                    src={movie.thumbnailUrl}
                    alt="thumbnail"
                />
                <div
                    className="
                    z-10
                    bg-zinc-800
                    p-2
                    lg:p-4
                    absolute
                    w-full
                    transition
                    shadow-md
                    rounded-b-md
                "
                >
                    <div className="flex flex-row items-center gap-3">
                        <div
                            className="
                        cursor-pointer 
                        h-6 
                        w-6 
                        lg:w-10 
                        lg:h-10 
                        bg-white 
                        rounded-full 
                        flex 
                        justify-center 
                        items-center
                        transition
                        hover:bg-neutral-300"
                            onClick={() => router.push(`/watch/${movie.id}`)}
                        >
                            <BsFillPlayFill size={30} />
                        </div>
                        <FavoriteButton movieId={movie.id} />
                        <div
                            onClick={() => openModal(movie.id)}
                            className="
                        cursor-pointer 
                        ml-auto
                        group/item
                        h-6 
                        w-6 
                        lg:w-10 
                        lg:h-10 
                        bg-white 
                        rounded-full 
                        flex 
                        justify-center 
                        items-center
                        transition
                        hover:bg-neutral-300"
                        >
                            <AiFillInfoCircle size={40} />
                        </div>
                    </div>

                    <p className="text-green-400 font-semibold mt-4">
                        new <span className="text-white">2025</span>
                    </p>

                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">
                            {movie.duration}
                        </p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">
                            {movie.genre}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
