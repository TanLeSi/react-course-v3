const MenuItem = ({ dish }) => {
  return (
    <article className="menu-item">
      <img src={dish.img} alt={dish.title} className="img" />
      <div className="item-info">
        <header>
          <h5>{dish.title}</h5>
          <span className="item-price">${dish.price}</span>
        </header>
        <p className="item-text">{dish.desc}</p>
      </div>
    </article>
  )
}

export default MenuItem
