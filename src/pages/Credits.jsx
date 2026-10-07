import { credits } from '../data/credits.js'

function Credits() {
  return (
    <>
      <title>Photo Credits | Lanka Travellers</title>

      <section className="section container">
        <h1>Photo Credits</h1>
        <p>All photos on this website are from Wikimedia Commons and are used under free licences.</p>
        <ul className="list">
          {credits.map((item) => (
            <li key={item.file}>
              {item.subject} – {item.author} ({item.license}) –{' '}
              <a href={item.source} target="_blank" rel="noopener noreferrer">
                View source
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Credits
