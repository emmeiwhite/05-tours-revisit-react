import { useState } from 'react'

export default function Tour({ id, info, image, name, price, removeTour }) {
  const [showMore, setShowMore] = useState(true)
  return (
    <article className="single-tour">
      <img
        src={image}
        alt={name}
        className="img"
      />

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {showMore ? (
            <p>
              {' '}
              {info.substr(0, 100)} ... &nbsp; <span className="">Show More</span>{' '}
            </p>
          ) : (
            <p>
              {' '}
              {info} <span>Show More</span>{' '}
            </p>
          )}
        </p>
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
