export default function Tour({ id, info, image, name, price, removeTour }) {
  return (
    <article className="single-tour">
      <img
        src={image}
        alt={name}
        className="img"
      />

      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button
          onClick={() => removeTour(id)}
          className="delete-btn btn btn-block"
        >
          Remove Tour
        </button>
      </div>

      <span className="tour-price">Price:$ ${price}</span>
    </article>
  )
}
