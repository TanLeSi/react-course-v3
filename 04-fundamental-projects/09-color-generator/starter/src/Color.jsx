const Color = ({ weight, type, hex }) => {
  return (
    <article
      className={type === "shade" ? "color color-light" : "color false"}
      style=
      {{
        background: `#${hex}`
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article >
  )
}

export default Color
