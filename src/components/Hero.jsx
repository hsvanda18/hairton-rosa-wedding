import Petals from './Petals'
import { useParallax } from '../hooks/useParallax'

const BotanicalPath = () => (
  <>
    <path d="M50,280 Q80,200 120,180 Q160,160 140,100 Q120,40 180,20" stroke="#5a6648" strokeWidth="2" fill="none"/>
    <path d="M120,180 Q90,140 60,150" stroke="#5a6648" strokeWidth="1.5" fill="none"/>
    <path d="M140,130 Q110,100 90,110" stroke="#5a6648" strokeWidth="1.5" fill="none"/>
    <ellipse cx="62" cy="152" rx="18" ry="10" fill="#5a6648" transform="rotate(-30 62 152)"/>
    <ellipse cx="92" cy="112" rx="16" ry="9" fill="#5a6648" transform="rotate(-15 92 112)"/>
    <ellipse cx="140" cy="98" rx="20" ry="11" fill="#5a6648" transform="rotate(20 140 98)"/>
    <ellipse cx="178" cy="22" rx="15" ry="8" fill="#5a6648" transform="rotate(-10 178 22)"/>
    <circle cx="180" cy="20" r="5" fill="#b5673d"/>
    <circle cx="140" cy="100" r="4" fill="#b5673d"/>
  </>
)

export default function Hero() {
  const parallax = useParallax(0.22)

  return (
    <header className="hero">
      <div className="hero-bg" />

      <svg className="botanical botanical-tl" viewBox="0 0 300 300" fill="none"
        style={{ transform: `rotate(-15deg) translateY(${parallax * -0.6}px)` }}>
        <BotanicalPath />
      </svg>
      <svg className="botanical botanical-br" viewBox="0 0 300 300" fill="none"
        style={{ transform: `rotate(165deg) translateY(${parallax * 0.4}px)` }}>
        <BotanicalPath />
      </svg>
      <svg className="botanical botanical-tr" viewBox="0 0 300 300" fill="none"
        style={{ transform: `rotate(20deg) scaleX(-1) translateY(${parallax * -0.3}px)` }}>
        <BotanicalPath />
      </svg>

      <Petals />

      <p className="hero-eyebrow">Convite de Casamento</p>

      {/* Pais do Noivo */}
      <div className="hero-parents hero-parents--groom">
        <span className="hero-parents-label">Pais do Noivo</span>
        <p>
          <span className="in-memoriam">Simão Ntoni</span>
          {' '}·{' '}
          Isabel Palanca
        </p>
      </div>

      <div className="hero-parents-divider">
        <span /><span className="hero-parents-diamond">◆</span><span />
      </div>

      {/* Casal */}
      <h1 className="hero-names">
        <em>Hairton</em>
        <span className="hero-amp">&amp;</span>
        <em>Rosa</em>
      </h1>

      <div className="hero-parents-divider">
        <span /><span className="hero-parents-diamond">◆</span><span />
      </div>

      {/* Pais da Noiva */}
      <div className="hero-parents hero-parents--bride">
        <span className="hero-parents-label">Pais da Noiva</span>
        <p>Quiassunga Adolfo · Cristina Branca José</p>
      </div>

      <div className="hero-divider" style={{ marginTop: '32px' }}>
        <span />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0 L9.5 6 L16 8 L9.5 10 L8 16 L6.5 10 L0 8 L6.5 6 Z"/>
        </svg>
        <span />
      </div>

      <p className="hero-date">03 · 07 · 2026</p>
      <p className="hero-location">Paróquia de São Lucas · Zango, Icolo &amp; Bengo</p>

      <div className="hero-cta">
        <a href="#rsvp" className="btn">Confirmar Presença</a>
      </div>
    </header>
  )
}
