"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
    const pathName = usePathname();
    return (
        <nav className="flex justify-center items-center p-4">
            <Link href="/" className={pathName === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>
            Home
            </Link>
            <Link href="/about" className={pathName === "/about" ? "font-bold mr-4": "text-blue-500 mr-4"}>
            About
            </Link>
            <Link href="/products/1" className={pathName.startsWith("/products/1")? "font-bold mr-4" : "text-blue-500 mr-4"}>
            Product 1
            </Link>
            <SignedOut>
            <SignInButton mode="modal"></SignInButton>
            </SignedOut>
            <SignedIn>
            <UserButton/>
            </SignedIn>
        </nav>
    )

}