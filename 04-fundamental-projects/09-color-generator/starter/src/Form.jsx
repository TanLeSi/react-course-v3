import { useRef, useState, } from "react";

const Form = ({ color, setColor }) => {
  const [input, setInput] = useState(color)
  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(input);
  }
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" id="color" value={input}
          onChange={(e) => setInput(e.target.value)} />
        <input type="text" id="colorName" value={input} placeholder={color}
          onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="btn">submit</button>
      </form>
    </section>
  )
}

export default Form
