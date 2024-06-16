import { useState } from "react"

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const displayInfo = !readMore ? tour.info.slice(0, 300) : tour.info;
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <span className="tour-price">${tour.price}</span>
      <div className="tour-info">
        <h4>{tour.name.slice(0, 10)}</h4>
        <p>
          {displayInfo}...
          <button className="info-btn"
            onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn btn btn-block" onClick={() => removeTour(tour.id)}>Not interested</button>
      </div>
    </article>
  )
}

export default Tour

