"use client";
import Navbar from "@/components/Navbar";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function Home() {
    const user = useCurrentUser();

    return (
        <>
            <Navbar />
            <div className="bg-gray-800">
                <div className="h-96"></div>
                <div className="h-96"></div>
                <div className="h-96"></div>
                <div className="h-96"></div>
                <div className="h-96"></div>
                <div className="h-96"></div>
                <div className="h-96"></div>
                <div className="h-96"></div>
            </div>
        </>
    );
}
