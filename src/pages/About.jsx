import PageBanner from '../components/PageBanner.jsx'

const services = [
  'Tour packages',
  'Hotel bookings',
  'Airport pick-up and drop-off',
  'Vehicle hire with driver',
  'Wildlife safaris',
  'Tour guides',
]

const team = [
  { name: 'Nimal Perera', role: 'Founder & Director' },
  { name: 'Shanika Fernando', role: 'Tour Manager' },
  { name: 'Ruwan Jayasinghe', role: 'Tour Guide' },
  { name: 'Dilini Silva', role: 'Customer Service' },
]

function About() {
  return (
    <>
      <title>About Us | Lanka Travellers</title>

      <PageBanner title="About Us" image="/images/kandy-lake-1600.webp" />

      {/* Company introduction */}
      <section className="section">
        <div className="container two-col">
          <img
            src="/images/stilt-fishermen-800.webp"
            alt="Stilt fishermen sitting on poles in the sea on the south coast of Sri Lanka"
          />
          <div>
            <h2>Who We Are</h2>
            <p>
              Lanka Travellers was started in 2014 in Colombo. We are a small team of travel lovers who want to show
              visitors the beauty of Sri Lanka.
            </p>
            <p>
              We plan holidays for families, couples and groups, and take care of hotels, transport and guides for
              every trip.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="section light">
        <div className="container grid grid-2">
          <div className="box">
            <h2>Our Vision</h2>
            <p>To be the most trusted travel agency in Sri Lanka.</p>
          </div>
          <div className="box">
            <h2>Our Mission</h2>
            <p>To give every traveller a safe, enjoyable and good-value holiday with friendly local service.</p>
          </div>
        </div>
      </section>

      {/* Why choose us and services */}
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <h2>Why Choose Lanka Travellers?</h2>
            <ul className="list">
              <li>Experienced local guides</li>
              <li>Good prices with no hidden charges</li>
              <li>Comfortable hotels and vehicles</li>
              <li>Tours can be changed to suit you</li>
              <li>Help available 24/7 during your trip</li>
            </ul>
          </div>
          <div>
            <h2>Our Services</h2>
            <ul className="list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team and company information */}
      <section className="section light">
        <div className="container">
          <h2 className="center">Our Team</h2>
          <div className="grid grid-4">
            {team.map((member) => (
              <div key={member.name} className="box center">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>

          <h2 className="center company-title">Company Information</h2>
          <p className="center">
            Lanka Travellers (Pvt) Ltd &middot; Established 2014 &middot; Head office: Galle Road, Colombo 03 &middot;
            20+ staff members
          </p>
        </div>
      </section>
    </>
  )
}

export default About
