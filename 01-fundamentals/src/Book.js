const Book = (probs) => {
    return (
        <article className="book">
            <img src={probs.img} alt={probs.title} />
            <h3>{probs.title}</h3>
            <h4>{probs.author}</h4>
            <span className="number">#{probs.index + 1}</span>
        </article>
    )
}

export default Book
