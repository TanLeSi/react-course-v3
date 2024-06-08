import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"

const books = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: "./images/book-1.jpg",
        id: 1,
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: "./images/book-2.jpg",
        id: 2,
    },
    {
        author: 'Stephen King',
        title: 'Fairy Tale',
        img: "./images/book-3.jpg",
        id: 3,
    },
];

const EventExample = () => {
    const handleFormSubmit = (input) => {
        input.preventDefault()
        console.log(input)
    };
    const handleButtonClick = () => {
        alert("Button clicked")
    };
    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <h2>Form Example</h2>
                <input type="text" name="example" style={{ margin: "1rem 0" }} />
                <button type="submit">Click Me</button>
            </form>
        </section>
    )
};

function BookList() {
    return (
        <section className="booklist">
            <EventExample />
            {books.map((book) => {
                return <Book {...book} key={book.id} />
            })}
        </section>);
}
const Book = (probs) => {
    return (
        <article className="book">
            <img src={probs.img} alt={probs.title} />
            <h3>{probs.title}</h3>
            <h4>{probs.author}</h4>
        </article>
    )
}
export default BookList;

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<BookList />)
