import PageBanner from '../components/PageBanner.jsx'
import PackageCard from '../components/PackageCard.jsx'
import { packages } from '../data/packages.js'

function Packages() {
  return (
    <>
      <title>Tour Packages | Lanka Travellers</title>

      <PageBanner title="Tour Packages" image="/images/tea-hills-1600.webp" />

      <section className="section">
        <div className="container">
          <p className="center">
            Choose one of our popular tour packages. Prices are per person and include hotels, transport and a guide.
          </p>
          <div className="grid grid-2">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Packages
