"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

import React from "react";

interface Props {
    visible?: boolean;
}

const AccountMenu = ({ visible }: Props) => {
    if (!visible) return null;

    const user = useCurrentUser();

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-3 px-3 items-center group/item w-full">
                    <img
                        className="w-8 rounded-md"
                        src="/images/default-blue.png"
                        alt="profile"
                    />
                    <p className="text-white text-sm group-hover/item:underline">
                        {user?.name}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div
                    className="px-3 text-white text-center text-sm hover:underline"
                    onClick={() => signOut()}
                >
                    Sign out of Netflix
                </div>
            </div>
        </div>
    );
};

export default AccountMenu;
