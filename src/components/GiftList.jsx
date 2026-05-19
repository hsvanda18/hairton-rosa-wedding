import Reveal from './Reveal'

// Quando tiver o link da lista, substitua '#' pelo URL
const GIFT_LINK = '#'

export default function GiftList() {
  return (
    <div className="gifts-section">
      <section id="presentes">
        <Reveal>
          <span className="section-label">Lista de Presentes</span>
          <h2 className="section-title">
            Um gesto<br /><em>de amor</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="gift-card">
            <p>
              A vossa presença é, de longe, o maior presente que poderíamos
              receber neste dia tão especial.
            </p>
            <p>
              Se ainda assim desejam oferecer algo, em breve partilharemos
              a nossa lista de presentes nesta página.
            </p>
            <p className="gift-note">
              Lista de presentes disponível em breve — volte a visitar!
            </p>
            {GIFT_LINK !== '#' && (
              <a href={GIFT_LINK} target="_blank" rel="noreferrer" className="btn" style={{ marginTop: '28px', display: 'inline-block' }}>
                Ver Lista de Presentes
              </a>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
