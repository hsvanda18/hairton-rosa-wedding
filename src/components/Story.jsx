import Reveal from './Reveal'

export default function Story() {
  return (
    <section id="historia">
      <div className="story-grid">
        <div className="story-text">
          <Reveal>
            <span className="section-label">A Nossa História</span>
            <h2 className="section-title">
              Dois caminhos,<br />
              <em>uma única direcção</em>
            </h2>
            <p>
              Foi numa tarde comum que o extraordinário aconteceu. Hairton e Rosa
              cruzaram-se pela primeira vez numa tarde de Outubro, quando o sol
              dourado de Luanda pintava as ruas com aquela luz que só existe no
              fim do dia.
            </p>
            <p>
              O que começou como um sorriso tímido transformou-se em conversas
              que duravam horas, em passeios que se tornaram rotinas, e em
              silêncios que disseram mais do que quaisquer palavras.
            </p>
            <p>
              Hoje, depois de partilharem sonhos, risos e a certeza de que o amor
              verdadeiro existe, chegou o momento mais esperado. No dia 03 de julho
              de 2026, prometem ao mundo aquilo que já prometeram um ao outro
              todos os dias.
            </p>
            <p>
              <em style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'var(--bark)' }}>
                "Onde tu fores, eu irei."
              </em>
            </p>
          </Reveal>
        </div>

        <div className="story-visual">
          <Reveal delay={0.15}>
            <div className="story-frame">
              <div className="story-frame-content">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <p>Adiciona aqui a vossa<br />foto favorita juntos</p>
              </div>
              <div className="story-ornament" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
