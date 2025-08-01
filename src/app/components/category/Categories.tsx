"use client"
import { categories, products } from '@/app/utils/Constants'
import CategoryCard from './CategoryCard'
import TopSellingCard from './TopSellingCard'
const Categories = () => {
    return (
        <section className='w-full md:px-25'>
            <div>
                <h1>Our Categories</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 p-4 gap-10 md:gap-5'>
                    {categories.map((category) => (
                        <CategoryCard key={category.id} name={category.name} image={category.image} items={category.items} />
                    ))}
                </div>
            </div>
            <div className='flex mt-20 px-10 flex-col justify-center items-center'>
                <h1 className='text-center text-[24px] font-semibold max-md:mt-7'>Top Selling Items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-10 md:gap-5'>
                    {products.map(product => (
                        <TopSellingCard key={product.id} name={product.name} image={product.image} price={product.price} />
                    ))}
                </div>
                <span>
                    <button className='bg-black text-white rounded-full py-3 px-4 text-center uppercase text-[10px] tracking-widest'>Go to Shop</button>
                </span>
            </div>
        </section>
    )
}

export default Categories
