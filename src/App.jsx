import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Packages from './pages/Packages.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Credits from './pages/Credits.jsx'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
          <Route
            path="*"
            element={
              <section className="section container center">
                <h1>Page Not Found</h1>
                <Link to="/" className="btn">Go to Home Page</Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
