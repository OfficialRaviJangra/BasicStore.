"use client"

const CategoryCard = ({ name, image, items }: any) => {
    return (
        <div className='flex flex-col items-center rounded-xl overflow-clip pb-2'>
            <div className='overflow-hidden rounded-xl'>
                <img
                    src={`${image}`}
                    alt="image"
                    className='tranform hover:scale-110 duration-150'
                />
            </div>
            <h1 className='font-semibold mt-2'>{name}</h1>
            <p className='text-[12px] leading-2 text-gray-400'>({items} items)</p>
        </div>
    )
}

export default CategoryCard
