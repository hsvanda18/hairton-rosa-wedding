import Reveal from './Reveal'

export default function BibleVerse() {
  return (
    <div className="verse-section">
      <Reveal>
        <div className="verse-inner">
          <div className="verse-mark">"</div>
          <blockquote className="verse-text">
            O amor é paciente, o amor é bondoso. Não inveja, não se vangloria,
            não se orgulha. Não se comporta de modo inconveniente, não procura
            os seus próprios interesses, não se ira facilmente, não guarda rancor.
            O amor não se alegra com a injustiça, mas se alegra com a verdade.
            Tudo suporta, tudo crê, tudo espera, tudo persevera.
          </blockquote>
          <div className="verse-ref">
            <span className="verse-line" />
            <span>1 Coríntios 13:4–7</span>
            <span className="verse-line" />
          </div>
        </div>
      </Reveal>
    </div>
  )
}
