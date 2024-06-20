import { useState } from "react";
import Reviews from "./Reviews";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
  const [idx, setIdx] = useState(0);
  const setRandomIdx = () => {
    const getRandomIdx = () => Math.floor(Math.random() * reviews.length);
    while (true) {
      let randomIdx = getRandomIdx();
      if (randomIdx !== idx) {
        setIdx(randomIdx);
        break
      }
    }
  }
  return (
    < main >
      <article className="review">
        <Reviews key={reviews.at(idx).id} review={reviews.at(idx)} />
        <div className="button-container">
          <button className="prev-btn" type="button"
            onClick={() => (idx === 0) ? setIdx(reviews.length - 1) : setIdx(idx - 1)}
          >
            <FaChevronLeft /></button>
          <button className="next-btn" type="button"
            onClick={() => (idx === reviews.length - 1) ? setIdx(0) : setIdx(idx + 1)}
          ><FaChevronRight /></button>
        </div>
        <button className="btn-hipster btn" type="button"
          onClick={() => setRandomIdx()}
        >Surprise Me</button>
      </article>
    </main >
  )
}
export default App;
