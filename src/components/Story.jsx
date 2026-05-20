import Reveal from './Reveal'
import couplePhoto from '../assets/casal.jpg'

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
              <img
                src={couplePhoto}
                alt="Hairton e Rosa"
                className="story-photo"
              />
              <div className="story-ornament" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
