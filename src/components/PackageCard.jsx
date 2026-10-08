import { Link } from 'react-router-dom'

// Package card. The short version is used on the Home page.
function PackageCard({ pkg, short = false }) {
  return (
    <div className="card">
      <img src={pkg.image} alt={pkg.imageAlt} loading="lazy" />
      <div className="card-body">
        <h3>{pkg.name}</h3>
        <p>
          <strong>Destination:</strong> {pkg.destination}
        </p>
        <p>
          <strong>Duration:</strong> {pkg.duration}
        </p>
        <p className="price">US$ {pkg.price} / person</p>

        {short ? (
          <Link to="/packages" className="btn" aria-label={`View details of ${pkg.name}`}>
            View Details
          </Link>
        ) : (
          <>
            <p>{pkg.description}</p>
            <h4>Places &amp; Activities</h4>
            <ul className="list">
              {pkg.places.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
            <Link to={`/contact?package=${pkg.id}`} className="btn" aria-label={`Book Now – ${pkg.name}`}>
              Book Now
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default PackageCard
