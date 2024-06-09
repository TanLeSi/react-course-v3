import React from "react"
import ReactDom from "react-dom/client"
import "./index.css"
import { books } from "./books"
import Book from "./Book"

function BookList() {
    return (
        <>
            <h1>Amazon best sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} index={index} />
                })}
            </section>
        </>
    );
}
export default BookList;

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<BookList />)
