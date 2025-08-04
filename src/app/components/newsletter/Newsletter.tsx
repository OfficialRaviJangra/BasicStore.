"use client"

import { PiShoppingCartSimpleLight, PiTrophyLight } from "react-icons/pi";
import { BsFillTagFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import Image from "next/image";

const Newsletter = () => {
    return (
        <section className="w-full h-screen flex flex-col md:px-25 gap-10">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col justify-center items-center py-7 px-5 rounded-xl shadow-sm">
                    <PiShoppingCartSimpleLight className="text-orange-300" size={25} />
                    <h2 className="font-bold mt-4">Free Shipping</h2>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipi.</p>
                </div>
                <div className="flex flex-col justify-center items-center py-7 px-5 rounded-xl shadow-sm">
                    <PiTrophyLight className="text-orange-300" size={25} />
                    <h2 className="font-bold mt-4">Quality Guarantee</h2>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipi.</p>
                </div>
                <div className="flex flex-col justify-center items-center py-7 px-5 rounded-xl shadow-sm">
                    <BsFillTagFill className="text-orange-300" size={25} />
                    <h2 className="font-bold mt-4">Daily Offers</h2>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipi.</p>
                </div>
                <div className="flex flex-col justify-center items-center py-7 px-5 rounded-xl shadow-sm">
                    <RiSecurePaymentFill className="text-orange-300" size={25} />
                    <h2 className="font-bold mt-4">Secure Payments</h2>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipi.</p>
                </div>
            </div>
            <div className="relative flex justify-center items-center w-full h-[50%] md:rounded-xl overflow-clip">
                <img
                    src="/images/newsletter_bg.jpg"
                    className="object-cover"
                    alt="newsletter background"
                />
                <div className="absolute flex flex-col justify-center items-center">
                    <h2 className="text-white font-bold text-[24px]">Subscribe Us Now</h2>
                    <h3 className="text-gray-400 text-[15px] px-15 text-center">Get Latest News, Updates And Deals Directly Mailed To Your Inbox</h3>
                    <span className="flex items-center mt-5">
                        <input
                            type="text"
                            className="w-[250px] bg-white outline-none rounded-md rounded-tr-none rounded-br-none px-3 py-2 text-sm"
                            placeholder="Your email address here"
                        />
                        <button className="rounded-md rounded-tl-none rounded-bl-none py-3 px-4 mt-0 bg-orange-400">subscribe</button>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
