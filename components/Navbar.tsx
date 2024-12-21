import React, { useEffect, useState } from "react";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

import { NavItem } from "./NavItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMent] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) setShowBackground(true);
            else setShowBackground(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
                
            `}
            >
                <img
                    className="h-7 lg:h-14"
                    src="/images/logo.png"
                    alt="logo"
                />
                <div className="lg:flex flex-row ml-8 gap-7 hidden">
                    <NavItem label="Home" />
                    <NavItem label="Series" />
                    <NavItem label="Movies" />
                    <NavItem label="New & Popular" />
                    <NavItem label="My List" />
                    <NavItem label="Browse by Languages" />
                </div>

                <div
                    className="flex flex-row ml-8 lg:hidden cursor-pointer relative items-center gap-2"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown
                        className={`text-white transition ${
                            showMobileMenu ? "rotate-180" : "rotate-0"
                        }`}
                    />
                    <MobileMenu visible={showMobileMenu} />
                </div>

                <div className="flex felx-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>

                    <div
                        className="flex flex-row gap-2 items-center cursor-pointer relative"
                        onClick={() => setShowAccountMent(!showAccountMenu)}
                    >
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="profile" />
                        </div>
                        <BsChevronDown
                            className={`text-white transition ${
                                showAccountMenu ? "rotate-180" : "rotate-0"
                            }`}
                        />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
