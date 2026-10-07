import { Link } from 'react-router-dom'
import PackageCard from '../components/PackageCard.jsx'
import { packages } from '../data/packages.js'

function Home() {
  return (
    <>
      <title>Home | Lanka Travellers</title>

      {/* Hero section */}
      <section className="hero">
        <h1>Discover the Beauty of Sri Lanka</h1>
        <p>Explore ancient cities, tea hills, beaches and wildlife with Lanka Travellers.</p>
        <div className="buttons">
          <Link to="/packages" className="btn">View Packages</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section">
        <div className="container two-col">
          <img
            src="/images/hill-country-train-800.webp"
            alt="Train going through the green hill country of Sri Lanka"
          />
          <div>
            <h2>Welcome to Lanka Travellers</h2>
            <p>
              Lanka Travellers is a travel agency based in Colombo. We organise tours to the most beautiful places in
              Sri Lanka, including Kandy, Sigiriya, Ella, Nuwara Eliya and the southern beaches.
            </p>
            <p>
              Our friendly team provides hotels, transport and experienced guides so you can enjoy a safe and
              comfortable holiday.
            </p>
            <Link to="/about" className="btn">Read More About Us</Link>
          </div>
        </div>
      </section>

      {/* Featured packages */}
      <section className="section light">
        <div className="container">
          <h2 className="center">Featured Destinations &amp; Packages</h2>
          <div className="grid grid-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} short />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta">
        <h2>Ready to Plan Your Trip?</h2>
        <p>Contact us today and we will help you plan your Sri Lankan holiday.</p>
        <Link to="/contact" className="btn btn-orange">Book Your Tour</Link>
      </section>
    </>
  )
}

export default Home
