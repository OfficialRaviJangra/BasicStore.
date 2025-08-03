"use client"

const Hero = () => {
    return (
        <section className='w-full h-[90vh] flex items-center justify-center md:px-25 md:pb-10'>
            <div className='relative rounded-xl overflow-hidden w-full h-full flex items-center justify-center'>
                <div className='absolute top-50 left-30'>
                    <h1 className='text-6xl font-bold text-white'>Iphone 16 Series</h1>
                    <p className='text-white text-sm mt-4'>Limited Stocks Available, Grab It Now!</p>
                    <button>Shop collection</button>
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