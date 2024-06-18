import { useState } from "react";
import Reviews from "./Reviews";
import reviews from "./data"

const App = () => {
  const [idx, setIdx] = useState(0);
  return (
    <div>
      {
        reviews.map((review) => {
          return (
            <div>
              <Reviews key={review.id} review={review} />
              <div className="button-container">
                <button className="prev-btn" type="button">Prev</button>
                <button className="next-btn" type="button">Next</button>
              </div>
            </div>
          )
        }
        )
      }
    </div>
  )
}
export default App;
