import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks.jsx'
import { company } from '../data/company.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>Lanka Travellers</h2>
          <p>Your friendly travel partner for exploring Sri Lanka.</p>
          <SocialLinks />
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <p>{company.address}</p>
          <p>
            Phone: <a href={`tel:${company.phoneLink}`}>{company.phone}</a>
          </p>
          <p>
            Email: <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Lanka Travellers. All rights reserved. |{' '}
        <Link to="/credits">Photo credits</Link>
      </p>
    </footer>
  )
}

export default Footer
