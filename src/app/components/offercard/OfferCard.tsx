"use client"

interface offer {
    title: String,
    description: String,
    image: string,
    button_text: string
}

const OfferCard = ({ title, description, image, button_text }: offer) => {
    return (
        <div className='relative max-h-fit flex-1/2 rounded-xl overflow-clip z-0'>
            <img
                src={image}
                className='aspect-video object-cover'
                alt="offer_bg_image"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className='absolute top-15 md:top-20 left-10 md:left-14 z-20'>
                <h1 className='text-3xl md:text-4xl font-bold text-white mt-0'>{title}</h1>
                <p className='text-sm md:text-lg text-white'>{description}</p>
                <button className='mt-3'>{button_text}</button>
            </div>
        </div>
    )
}

export default OfferCard
