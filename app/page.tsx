"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

export default function Home() {
    const user = useCurrentUser();

    return (
        <div className="text-rose-500">
            NetFlix Clone
            <div>Logged in as : {user?.name}</div>
            <div
                className="h-10 text-center bg-white w-full hover:opacity-80 cursor-pointer rounded-lg font-bold"
                onClick={() => signOut({ callbackUrl: "/auth" })}
            >
                Log Out
            </div>
        </div>
    );
}
