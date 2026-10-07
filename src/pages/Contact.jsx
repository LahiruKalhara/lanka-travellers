import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import { packages } from '../data/packages.js'
import { company } from '../data/company.js'

function Contact() {
  const [searchParams] = useSearchParams()
  const [sent, setSent] = useState(false)

  // There is no database, so the form only shows a thank you message
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <>
      <title>Contact Us | Lanka Travellers</title>

      <PageBanner title="Contact Us" image="/images/mirissa-beach-1600.webp" />

      <section className="section">
        <div className="container two-col contact">
          <div>
            <h2>Get in Touch</h2>
            <p>
              <strong>Phone:</strong> <a href={`tel:${company.phoneLink}`}>{company.phone}</a>
            </p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              <strong>Address:</strong> {company.address}
            </p>
            <p>
              <strong>Opening hours:</strong> {company.hours}
            </p>
            <h3>Follow Us</h3>
            <SocialLinks />
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>

            {sent && (
              <p className="success" role="status">
                Thank you! Your message has been sent. We will contact you soon.
              </p>
            )}

            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" />

            <label htmlFor="package">Tour Package</label>
            <select id="package" name="package" defaultValue={searchParams.get('package') || ''}>
              <option value="">Select a package</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name}
                </option>
              ))}
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Google Map */}
      <section className="map">
        <iframe
          title="Map showing the Lanka Travellers office in Colombo"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=15&output=embed`}
          loading="lazy"
        />
      </section>
    </>
  )
}

export default Contact
