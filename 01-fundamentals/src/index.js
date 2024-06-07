import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"
function BookList() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>);
}
const Book = (probs) => {
    console.log(probs)
    const title = "Interesting Facts For Curious Mind";
    return (
        <article className="book">
            <img src="./images/book-1.jpg" alt={title} />
            <h3>{title}</h3>
            <h4>Book author</h4>
        </article>
    )
}
export default BookList;

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<BookList />)
