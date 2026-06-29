const MAPS_CHURCH = 'https://www.google.com/maps/search/Par%C3%B3quia+de+S%C3%A3o+Lucas+Zango+Angola'
const MAPS_RECEPTION = 'https://maps.app.goo.gl/WK3AqqfnywyJ1Nr36'

export default function EventDetails() {
  return (
    <section id="detalhes">
      <div className="section-inner">
        <p className="section-label">O Evento</p>
        <h2 className="section-title">Detalhes da Celebração</h2>
        <div className="section-ornament"><span>✦</span></div>

        <div className="details-grid">
          <div className="detail-card">
            <span className="detail-icon">📅</span>
            <p className="detail-title">Data</p>
            <p className="detail-main">03 de Julho de 2026</p>
            <p className="detail-sub">Sexta-feira</p>
          </div>

          <div className="detail-card">
            <span className="detail-icon">⛪</span>
            <p className="detail-title">Missa</p>
            <p className="detail-main">17h00</p>
            <p className="detail-sub">Paróquia de São Lucas · Zango</p>
            <a
              className="map-link"
              href={MAPS_CHURCH}
              target="_blank"
              rel="noreferrer"
            >
              Ver no mapa
            </a>
          </div>

          <div className="detail-card">
            <span className="detail-icon">🥂</span>
            <p className="detail-title">Copo de Água</p>
            <p className="detail-main">19h00</p>
            <p className="detail-sub">Paraíso do Zango · Zango 4</p>
            <a
              className="map-link"
              href={MAPS_RECEPTION}
              target="_blank"
              rel="noreferrer"
            >
              Ver no mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
