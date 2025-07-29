import React from 'react'
const Hero = () => {
    return (
        <section className='w-full h-[90vh] flex items-center justify-center bg-gray-100 md:px-25 md:pb-10'>
            <div className='relative rounded-xl overflow-hidden w-full h-full flex items-center justify-center'>
                <div className='absolute top-50 left-30'>
                    <h1 className='text-6xl font-bold text-white'>Iphone 16 Series</h1>
                    <p className='text-white text-sm mt-4'>Limited Stocks Available, Grab It Now!</p>
                    <button className='bg-white text-black px-8 py-3 rounded-full text-[8px] font-semibold uppercase tracking-widest mt-8 cursor-pointer hover:bg-black hover:text-white duration-200'>Shop collection</button>
                </div>
                <img
                    src="/images/hero.jpg"
                    alt="hero image"
                    className='w-full h-full object-cover'
                />
            </div>
        </section>
    )
}

export default Hero