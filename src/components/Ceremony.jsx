import Reveal from './Reveal'

const MAPS_URL = 'https://www.google.com/maps/place/Par%C3%B3quia+de+S%C3%A3o+Lucas+-+Zango+I/data=!4m2!3m1!1s0x0:0xfbcd51337d57cf06?sa=X&ved=1t:2428&ictx=111'

export default function Ceremony() {
  return (
    <div className="ceremony-section">
      <section id="cerimonia">
        <Reveal>
          <span className="section-label">Data &amp; Local</span>
          <h2 className="section-title">
            O Grande<br /><em>Dia</em>
          </h2>
          <p style={{ color: 'var(--soft)', lineHeight: 1.8, fontSize: '.95rem' }}>
            Estaremos à vossa espera para partilharmos juntos um momento que
            ficará para sempre gravado nos nossos corações.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="ceremony-card">
            <div className="ceremony-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Cerimónia Religiosa</h3>
            <dl className="ceremony-info">
              <dt>Data</dt>
              <dd>Sexta-feira, 03 de Julho de 2026</dd>
              <dt>Hora</dt>
              <dd>18h00</dd>
              <dt>Local</dt>
              <dd>Paróquia de São Lucas</dd>
              <dt>Endereço</dt>
              <dd>Icolo e Bengo · Zango</dd>
            </dl>
            <a
              className="map-link-btn"
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Ver no Mapa</span>
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
