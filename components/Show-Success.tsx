import { BiCheckCircle } from "react-icons/bi";
import React from "react";

interface Props {
    message: string;
}

const ShowSuccess = ({ message }: Props) => {
    return (
        <div className="flex items-center gap-x-3 justify-center bg-green-400/25 rounded-lg text-sm text-emerald-700 p-2">
            <BiCheckCircle className="w-4 h-4" />
            <p>{message}</p>
        </div>
    );
};

export default ShowSuccess;
