import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: FaInstagram },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: FaYoutube },
  { label: 'WhatsApp', href: 'https://wa.me/94771234567', Icon: FaWhatsapp },
]

function SocialLinks() {
  return (
    <div className="social">
      {socials.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
