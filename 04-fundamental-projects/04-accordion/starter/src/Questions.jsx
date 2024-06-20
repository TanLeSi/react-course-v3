import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = ({ question }) => {
  const [click, setClick] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{question.title}</h5>
        <button className="question-btn" type="button"
          onClick={() => setClick(!click)}>
          {click ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {click && <p>{question.info}</p>}
    </article>
  )
}
export default Questions
