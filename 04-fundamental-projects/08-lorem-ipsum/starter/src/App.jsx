import { useState } from "react";
import text from "./data";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [displayText, setDisplayText] = useState([]);
  const handleSummit = (e) => {
    e.preventDefault();
    const selectedText = text.slice(0, amount);
    setDisplayText(selectedText);
    setAmount(1);
  }
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSummit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount"
          min={1} max={8} step={1} value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="btn">generate</button>
      </form>
      {
        displayText.map((txt) => {
          return (
            <article className="lorem-text">
              <p>{txt}</p>
            </article>
          )
        })
      }
    </section>

  )
};
export default App;
