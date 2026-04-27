"use client"

import { Button } from "@heroui/react";
import NavLink from "./NavLink";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

const NavBar = () => {

    const router = useRouter()

    const { data, isPending } = useSession();

    const userName = data?.user?.name;
    const userImage = data?.user?.image;

    const [open, setOpen] = useState(false);

    const handleLogOUt = async () => {
        await authClient.signOut();
        window.location.href = "/sign-in"
    }

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-4">

                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <div className="text-xl font-bold tracking-wide">
                        𝐵𝒜𝐿𝐼𝒜𝒟𝒜𝒩𝒢𝐼 𝒩𝐸𝒲𝒮
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 font-medium">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/news">News</NavLink>
                        <NavLink href="/about">About</NavLink>
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">

                        {/* Loading state */}
                        {isPending ? (
                            <p className="text-sm text-gray-500"><FaSpinner /></p>
                        ) : (
                            <>
                                {/* User Info */}
                                {userName && (
                                    <p className="text-sm font-medium">
                                        {userName}
                                    </p>
                                )}

                                {userImage && (
                                    <img
                                        src={userImage}
                                        alt="user image"
                                        className="w-9 h-9 rounded-full object-cover"
                                    />
                                )}
                            </>
                        )}

                        {/* Auth Button */}
                        {userName ? (
                            <Button onClick={handleLogOUt}>
                                Log Out
                            </Button>
                        )
                            : <Button >
                                <Link href={'/sign-in'}>Log in</Link>
                            </Button>
                        }

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)}>
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-4">
                        <ul className="flex flex-col gap-4 mt-4 font-medium">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/news">News</NavLink>
                            <NavLink href="/about">About</NavLink>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default NavBar;