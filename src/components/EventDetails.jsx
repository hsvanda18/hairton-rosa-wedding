const MAPS_QUERY = 'Paróquia+de+São+Lucas+Zango+Angola'

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
            <span className="detail-icon">🕕</span>
            <p className="detail-title">Horário</p>
            <p className="detail-main">18h00</p>
            <p className="detail-sub">Por favor, chegue com antecedência</p>
          </div>

          <div className="detail-card">
            <span className="detail-icon">⛪</span>
            <p className="detail-title">Local</p>
            <p className="detail-main">Paróquia de São Lucas</p>
            <p className="detail-sub">Icolo e Bengo · Zango · Angola</p>
            <a
              className="map-link"
              href={`https://www.google.com/maps/search/${MAPS_QUERY}`}
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
