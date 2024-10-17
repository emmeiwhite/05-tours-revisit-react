import Tour from './Tour'
export default function ToursList({ tours, removeTour }) {
  return (
    <div className="tours">
      {tours.map(tour => (
        <Tour
          {...tour}
          key={tour.id}
          removeTour={removeTour}
        />
      ))}
    </div>
  )
}
