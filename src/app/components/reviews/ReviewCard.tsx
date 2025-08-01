"useclient"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
interface review {
    name: string,
    review: string,
    rating: number,
}

const ReviewCard = ({ name, review, rating }: review) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<FaStar key={i} className="text-orange-300 w-4 h-4" />);
        } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
            stars.push(<FaStarHalfAlt key={i} className="text-orange-300 w-4 h-4" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-gray-300 w-4 h-4" />);
        }
    }
    return (
        <div className="flex flex-col border border-gray-100 rounded-xl overflow-hidden p-5 shadow-sm gap-1">
            <p className="text-sm text-gray-700">{review}</p>
            <span className="flex gap-1 mt-4">{stars}</span>
            <h2 className="text-sm font-semibold">{name}</h2>
        </div>
    )
}

export default ReviewCard