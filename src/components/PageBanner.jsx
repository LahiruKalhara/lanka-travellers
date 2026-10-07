// Banner with a background image at the top of each inner page
function PageBanner({ title, image }) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}
    >
      <h1>{title}</h1>
    </section>
  )
}

export default PageBanner
