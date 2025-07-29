"use client"
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex w-full py-5 px-8 md:px-25">
            <div className="container flex justify-between items-center">
                <h1 className="text-[20px] font-bold">
                    <span className="text-orange-300">Basic</span>Store<span className="text-orange-300">.</span>
                </h1>
                {/* for mobile devices */}
                <div className="md:hidden">
                    <LuMenu
                        size={25}
                        fontWeight={500}
                        className="cursor-pointer"
                    />
                </div>
                {/* for desktop devices */}
                <div className="hidden md:flex gap-20 items-center">
                    <ul className="ul-list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                    <div className="flex gap-3 items-center">
                        <Link href="/search" className="cursor-pointer ">
                            <CiSearch size={20} />
                        </Link>
                        <Link href="/profile" className="cursor-pointer">
                            <CiUser size={20} />
                        </Link>
                        <Link href="/wishlist" className="cursor-pointer">
                            <CiHeart size={20} />
                        </Link>
                        <Link href="/cart" className="cursor-pointer">
                            <CiShoppingCart size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
