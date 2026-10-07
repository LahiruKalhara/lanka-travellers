import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo.jsx'

function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <div className="container navbar">
        <Link to="/" aria-label="Lanka Travellers home page" onClick={closeMenu}>
          <Logo />
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav id="main-menu" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/packages" onClick={closeMenu}>Packages</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
