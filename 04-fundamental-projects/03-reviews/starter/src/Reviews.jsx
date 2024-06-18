const Reviews = ({ review }) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={review.image} alt={review.name} className="person-img" />
      </div>
      <h4 className="author">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
    </article>
  )
}

export default Reviews
