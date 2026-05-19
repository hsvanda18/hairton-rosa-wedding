export default function Nav() {
  return (
    <nav>
      <span className="nav-logo">H &amp; R</span>
      <ul className="nav-links">
        <li><a href="#historia">A Nossa História</a></li>
        <li><a href="#cerimonia">Cerimónia</a></li>
        <li><a href="#rsvp">Confirmação</a></li>
      </ul>
      {/* visible only on mobile */}
      <a href="#rsvp" className="nav-cta">Confirmar</a>
    </nav>
  )
}
