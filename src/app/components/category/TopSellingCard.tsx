"use client"

const TopSellingCard = ({ name, image, price }: any) => {
    return (
        <div className=' flex flex-col items-center rounded-xl overflow-clip pb-2 shrink-0'>
            <div className='flex justify-center items-center h-[380px] overflow-hidden rounded-xl bg-gray-100 p-12'>
                <img
                    src={`${image}`}
                    alt="image"
                    className='object-cover'
                />
            </div>
            <h1 className='font-semibold mt-2'>{name}</h1>
            <p className="text-orange-300 text-sm leading-6">${price}</p>
        </div>
    )
}

export default TopSellingCard
