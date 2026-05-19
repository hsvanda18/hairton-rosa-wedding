// Petal configs generated once at module load to avoid re-randomising on render
const ANIMATIONS = ['fall-left', 'fall-right', 'fall-sway', 'fall-wide']
const COLORS     = ['#b5673d', '#c4a97d', '#5a6648', '#8a7560', '#6b4f35']

const PETALS = Array.from({ length: 22 }, (_, i) => ({
  id:        i,
  left:      (i * 4.7 + Math.sin(i * 1.3) * 8) % 100,
  size:      7 + (i % 5) * 1.8,
  duration:  11 + (i % 7) * 1.4,
  delay:     (i * 1.1) % 14,
  color:     COLORS[i % COLORS.length],
  opacity:   0.22 + (i % 4) * 0.07,
  anim:      ANIMATIONS[i % ANIMATIONS.length],
  isLeaf:    i % 5 !== 3,
}))

export default function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {PETALS.map(p => (
        <div
          key={p.id}
          className={`petal ${p.isLeaf ? 'petal--leaf' : 'petal--dot'}`}
          style={{
            left:            `${p.left}%`,
            width:           `${p.size}px`,
            height:          p.isLeaf ? `${p.size * 1.6}px` : `${p.size * 0.6}px`,
            backgroundColor: p.color,
            animationName:   p.anim,
            animationDuration:        `${p.duration}s`,
            animationDelay:  `${p.delay}s`,
            '--opacity':     p.opacity,
          }}
        />
      ))}
    </div>
  )
}
