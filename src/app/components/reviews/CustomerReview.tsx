"use client"
import { offers, testimonials } from '../../utils/Constants'
import OfferCard from '../offercard/OfferCard'
import ReviewCard from './ReviewCard'

const CustomerReview = () => {
    return (
        <section className='flex flex-col w-full h-fit px-8 md:px-25 py-15 gap-20'>
            <div className='flex flex-col md:flex-row gap-6'>
                {offers.map((offer) => (
                    <OfferCard
                        key={offer.id}
                        title={offer.title}
                        description={offer.description}
                        image={offer.image}
                        button_text={offer.button_text} />
                ))}
            </div>
            <div>
                <h1>Our Customer's Reviews</h1>
                <div className='flex flex-col md:flex-row gap-7 mt-5'>
                    {testimonials.map(testimonal => (
                        <ReviewCard
                            key={testimonal.id}
                            name={testimonal.name}
                            review={testimonal.review}
                            rating={testimonal.rating} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerReview
