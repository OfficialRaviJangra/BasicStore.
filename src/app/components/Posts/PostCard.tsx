"use client"

import Image from "next/image"

const PostCard = ({ title, sub_title, image }: any) => {
    return (
        <div className="relative overflow-hidden flex flex-col justify-center">
            <Image
                src={image}
                width={700}
                height={500}
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='aspect-video rounded-xl'
                alt="offer_bg_image"
            />
            <div className="flex flex-col items-center mt-2">
                <p className="text-sm text-gray-400">{sub_title}</p>
                <h3 className="font-bold">{title}</h3>
            </div>
        </div>
    )
}

export default PostCard
