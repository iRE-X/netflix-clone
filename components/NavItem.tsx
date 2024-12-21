import React from "react";

interface Props {
    label: string;
}

export const NavItem = ({ label }: Props) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            {label}
        </div>
    );
};
