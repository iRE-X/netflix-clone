import React from "react";

interface props {
    id: string;
    onChange: any;
    value: string;
    label: string;
    type: string;
}

const Input = ({ id, onChange, value, label, type }: props) => {
    return (
        <div className="relative">
            <input
                id={id}
                className="block rounded-md px-6 pt-6 pb-1 w-full text-base bg-neutral-700 text-white appearance-none focus:outline-none focus:ring-0 peer"
                type={type}
                value={value}
                onChange={onChange}
                placeholder=" "
            />
            <label
                className="absolute text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-focus:scale-75"
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
