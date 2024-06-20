import { FaQuoteRight } from "react-icons/fa"

const Reviews = ({ review }) => {
  return (
    <>
      <div className="img-container">
        <img src={review.image} alt={review.name} className="person-img" />
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
    </>
  )
}

export default Reviews
